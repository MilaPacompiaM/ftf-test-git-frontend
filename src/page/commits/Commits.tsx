import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { GetAllCommits } from '../../api/services'
import { Commit } from './Commits.interface'
import { CommitPreview } from '../../component/commit-preview/CommitPreview'
import './Commits.css'

export function Commits (): JSX.Element {
  const { data: commits } = useQuery(['allCommits'], async () => {
    const response = await GetAllCommits()
    return response
  })

  if (commits ==  null) {
    return <p>Loading</p>
  }

  return (
    <div className='container'>
      <h1 className='text-2xl mb-5'>All commits</h1>
      {commits.map((item: Commit) => (
        <div style={{ marginBottom: '10px' }}>
          <CommitPreview commit={item} />
        </div>
      ))}
    </div>
  )
}
