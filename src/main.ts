import * as core from '@actions/core'
import {getInput} from './util/input-helper'
import {RepositoryReport} from '@model/index'
import {ReportService} from '@service/report.service'

async function run(): Promise<void> {
  try {
    const repositoryReport = await getRepositoryReport()
    const report = {repository: repositoryReport}

    core.setOutput('report', JSON.stringify(report))
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

async function getRepositoryReport(): Promise<RepositoryReport> {
  const {token, repositoryName, repositoryOwner} = getInput()
  const reportService = new ReportService(
    token,
    repositoryOwner,
    repositoryName
  )
  const report = await reportService.getRepositoryReport()

  return report
}

run()
