import {expect, test} from '@jest/globals'
import {ReportService} from '../src/service/report.service'
import {getInput} from '../src/util/input-helper'

test('test report service get repository report', async () => {
  const {token, repositoryOwner, repositoryName} = getInput()
  const service = new ReportService(token, repositoryOwner, repositoryName)

  const report = await service.getRepositoryReport()
  console.log({...report})

  expect(report).toBeDefined()
})
