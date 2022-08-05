import chalk from 'chalk'

const log = console.log
const warn = console.warn
const error = console.error

const white = chalk.white
const green = chalk.green
const yellow = chalk.yellow
const red = chalk.red

const stringify = item => JSON.stringify(item, null, 2)

function info(msg) {
  log(`${white(new Date().toISOString())} ${green('log')} ${stringify(msg)}`)
}

function warning(msg, errorObject?) {
  warn(`${white(new Date().toISOString())} ${yellow('warn')} ${stringify(msg)}`)
  if (errorObject) {
    warn(`${white(new Date().toISOString())} ${yellow('warn')} ${stringify(errorObject)}`)
  }
}

function fatal(msg, errorObject?) {
  error(`${white(new Date().toISOString())} ${red('error')} ${stringify(msg)}`)
  if (errorObject) {
    error(`${white(new Date().toISOString())} ${red('error')} ${stringify(errorObject)}`)
  }
}

export function stripId(objectToStrip: any) {
  const { id, ...rest } = objectToStrip
  return rest
}

export default {
  info,
  warning,
  fatal,
}
