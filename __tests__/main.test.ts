import {expect, test} from '@jest/globals'
import {ReportService} from '../src/service/report.service'
import {config} from 'dotenv'

config()

test('test report service get repository report', async () => {
  const token = process.env.TOKEN || ''
  const service = new ReportService(token, 'minuth', 'report-action')

  const report = await service.getRepositoryReport()
  console.log({...report})

  expect(report).toBeDefined()
})
