export interface RepositoryReport {
  openIssues?: Report
  closedIssues?: Report
  openPullRequests?: Report
  closedPullRequests?: Report
  mergedPullRequests?: Report
  collaborators?: Report
  watchers?: Report
  forks?: Report
  stargazers?: Report
}

export interface Report {
  totalCount: Number
}
