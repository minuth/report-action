import {RepositoryReport} from '../model/repository-report.model'
import * as github from '@actions/github'

export class ReportService {
  private octokit

  constructor(
    private token: string,
    private repositoryOwner: string,
    private repositoryName: string
  ) {
    this.octokit = github.getOctokit(token)
  }

  async getRepositoryReport(): Promise<RepositoryReport> {
    const {repository} = await this.octokit.graphql<{
      repository: RepositoryReport
    }>(`
    query { 
        repository(name: "${this.repositoryName}", owner: "${this.repositoryOwner}") {
          openIssues: issues(states: OPEN) {
            totalCount
          }
          closedIssues: issues(states: CLOSED) {
            totalCount
          }
          openPullRequest: pullRequests(states: OPEN) {
            totalCount
          }
          closedPullRequest: pullRequests(states: CLOSED) {
            totalCount
          }
          mergedPullRequest: pullRequests(states: MERGED) {
            totalCount
          }
          collaborators {
            totalCount
          }
          watchers {
            totalCount
          }
          forks {
            totalCount
          }
          stargazers {
            totalCount
          }
        }
      }
    `)

    return repository
  }
}
