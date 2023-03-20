import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { GetAllCommits } from '../../api/services'
import { Commit } from './Commits.interface'

export function Commits (): JSX.Element {
  const { data: commits } = useQuery(['allCommits'], async () => {
    const response = await GetAllCommits()
    return response
  })

  if (commits ==  null) {
    return <p>Loading</p>
  }

  return (
    <div>
      {commits.map((item: Commit) => <div>{item.sha}</div>)}
    </div>
  )
}
