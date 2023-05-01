import {expect, test} from '@jest/globals'
import {ReportService} from '../src/service/report.service'
import {getTestConfig} from '../src/config/test-config'

test('test report service get repository report', async () => {
  const {token, repositoryName, repositoryOwner} = getTestConfig()
  const service = new ReportService(token, repositoryOwner, repositoryName)

  const report = await service.getRepositoryReport()
  console.log({...report})

  expect(report).toBeDefined()
})
