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
  "repository": {
    "openIssues": { "totalCount": 1 },
    "closedIssues": { "totalCount": 1 },
    "openPullRequest": { "totalCount": 5 },
    "closedPullRequest": { "totalCount": 2 },
    "mergedPullRequest": { "totalCount": 4 },
    "collaborators": { "totalCount": 1 },
    "watchers": { "totalCount": 1 },
    "forks": { "totalCount": 0 },
    "stargazers": { "totalCount": 0 }
  }
}
```

## Example

In this below example we will use `report-action` to create a composite action.

```
runs:
  using: 'composite'
  steps:
    - uses: minuth/report-action@v1
      id: report_action
    - run: node ./dist/index.js ${{steps.report_action.outputs.report}}
```

In this case, the first step uses the `minuth/report-action@v1` action to get the **report** and the second step runs a node script ([Javascript action](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)) that passes the **report** (output of the first step) as an argument. So the Javascript action can use the **report** argument the do anything in code.

> This action can be used in the workflow like other actions.
