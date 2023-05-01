import {config} from 'dotenv'

config()

export interface TestConfig {
  token: string
  repositoryOwner: string
  repositoryName: string
}

export function getTestConfig(): TestConfig {
  const {
    TEST_GITHUB_TOKEN,
    TEST_GITHUB_REPOSITORY_OWNER,
    TEST_GITHUB_REPOSITORY_NAME
  } = process.env

  return {
    token: TEST_GITHUB_TOKEN || '',
    repositoryOwner: TEST_GITHUB_REPOSITORY_OWNER || '',
    repositoryName: TEST_GITHUB_REPOSITORY_NAME || ''
  }
}
