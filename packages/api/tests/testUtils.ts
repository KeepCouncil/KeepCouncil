import axios from 'axios'
import { identity } from 'lodash/fp'
import Log from '../src/utils/log.utils'
import globalSetup from './globalSetup'
import globalTeardown from './globalTeardown'
import Database from '../src/database'

async function setupTest(test: any) {
  beforeAll(async () => {
    await globalSetup()
  })

  beforeEach(async () => {
    await Database.Connection.removeExistingData()
    await Database.Connection.seed()
  })

  afterAll(async () => {
    await globalTeardown()
  })
}

function callAxios(api, verb: string, path: string, requestOpts) {
  if (verb === 'get' || verb === 'delete') {
      return api[verb](path, requestOpts)
  } else {
      const data = requestOpts.body
      delete requestOpts.body
      return api[verb](path, data, requestOpts)
  }
}

async function apiRequest(verb: string, baseUrl: string, path: string, opts: any): Promise<any> {
  const requestOpts = {...opts}
  if (requestOpts.encoding === undefined) {
      requestOpts.encoding = 'utf-8'
  }

  const api = axios.create({
      baseURL: baseUrl
  })

  return new Promise((resolve, reject) => {
      const handleError = e => {
          Log.fatal(`Error performing ${verb} for url ${baseUrl}${path}:`, e)
          if (e.response) {
              if ([400, 409].includes(e.response.status) && opts.body) {
                Log.fatal('Payload of invalid request: ', opts.body)
              }
          }
          reject(e)
      }
      api.interceptors.response.use(identity, handleError)
      const handleData = response => {
          if (response) {
              resolve(response)
          }
      }
      callAxios(api, verb, path, requestOpts).then(handleData).catch(handleError)
  })
}

async function apiGet(baseUrl: string, path: string, opts: any = {}) {
  return apiRequest('get', baseUrl, path, opts)
}

async function apiPut(baseUrl: string, path: string, payload: any, opts: any = {}) {
  return apiRequest('put', baseUrl, path, {body: payload, ...opts})
}

async function apiPost(baseUrl: string, path: string, payload: any, opts: any = {}) {
  return apiRequest('post', baseUrl, path, {body: payload, ...opts})
}

async function apiDelete(baseUrl: string, path: string, opts: any = {}) {
  return apiRequest('delete', baseUrl, path, opts)
}

const BASE_URL = `http://0.0.0.0:3001/api/v1/`

export {
  setupTest,
  apiGet,
  BASE_URL,
}
