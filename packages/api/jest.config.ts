import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  // globalSetup: './tests/globalSetup.ts',
  // globalTeardown: './tests/globalTeardown.ts',
}

export default config
