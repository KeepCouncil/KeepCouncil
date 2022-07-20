import axios from 'axios'
import * as rax from 'retry-axios'
import { identity, flow, tap, noop, bindKey } from 'lodash/fp'
import { v4 as uuidv4 } from 'uuid'

export function apiUrl() {
  return `http://${window.location.hostname}:3001/api/v1/`
}

export const api = axios.create({
  baseURL: apiUrl(),
  headers: {
    'Content-Type': 'application/json'
  },
})

export function addApiErrorInterceptors({
  onBeginRetry = noop,
  onEndRetry = noop,
  onError = noop,
}) {
  const retries = new Set()
  const id = '__id__'

  const assignId = (config: any) =>
    config[id] ? config : { ...config, [id]: uuidv4() }

  const addRetry = ({ config }: any) => {
    const wasEmpty = !retries.size
    retries.add(config[id])
    if (wasEmpty) {
      onBeginRetry()
    }
  }

  const removeRetry = ({ config }: any) => {
    if (retries.delete(config[id]) && !retries.size) {
      onEndRetry()
    }
  }

  api.interceptors.request.use(assignId, identity)

  api.defaults.raxConfig = {
    instance: api,
    retry: 4,
    statusCodesToRetry: [[502, 503]],
    onRetryAttempt: addRetry,
  }
  rax.attach(api)

  api.interceptors.response.use(
    tap(removeRetry),
    flow(tap(removeRetry), tap(onError), bindKey(Promise, 'reject'))
  )
}
