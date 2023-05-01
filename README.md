# Report Action

This GitHub Action allows you to retrieve various statistics about a GitHub repository, including:

- Total open issues
- Total closed issues
- Total open pull requests
- Total closed pull requests
- Total merged pull requests
- Total collaborators
- Total watchers
- Total forks
- Total stargazers

## Inputs

### `repository` [optional]

Repository name with owner. For example, `minuth/report-action`

### `token` [optional]

Personal access token (PAT) used to fetch the repository.

## Outputs

### `report`

The report result in json format:

```
{
      repository: {
        openIssues: { totalCount: 1 },
        closedIssues: { totalCount: 1 },
        openPullRequest: { totalCount: 4 },
        closedPullRequest: { totalCount: 1 },
        mergedPullRequest: { totalCount: 0 },
        collaborators: { totalCount: 1 },
        watchers: { totalCount: 1 },
        forks: { totalCount: 0 },
        stargazers: { totalCount: 0 }
      }
}
```

## Example usage
