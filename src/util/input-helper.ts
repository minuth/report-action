import * as core from '@actions/core'
import * as github from '@actions/github'
import {Input} from '@model/index'

export function getInput(): Input {
  const qualifiedRepository =
    core.getInput('repository') ||
    `${github.context.repo.owner}/${github.context.repo.repo}`
  core.debug(`qualified repository = '${qualifiedRepository}'`)
  const splitRepository = qualifiedRepository.split('/')
  if (
    splitRepository.length !== 2 ||
    !splitRepository[0] ||
    !splitRepository[1]
  ) {
    throw new Error(
      `Invalid repository '${qualifiedRepository}'. Expected format {owner}/{repo}.`
    )
  }
  const repositoryOwner = splitRepository[0]
  const repositoryName = splitRepository[1]
  const token = core.getInput('token')

  return {token, repositoryName, repositoryOwner}
}
