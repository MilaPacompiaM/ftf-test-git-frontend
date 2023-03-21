import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { GetAllCommits } from '../../api/services'
import { Commit } from './Commits.interface'
import { CommitPreview } from '../../component/commit-preview/CommitPreview'

export function Commits (): JSX.Element {
  const { data: commits } = useQuery(['allCommits'], async () => {
    const response = await GetAllCommits()
    return response
  })

  if (commits ==  null) {
    return <p>Loading</p>
  }

  return (
    <div className='grid grid-cols-1 max-w-3xl m-10'>
      <h1 className='text-2xl mb-5'>All commits</h1>
      <p className='mb-5 underline decoration-sky-500'>This informations is automatically reloaded every 1 minute.</p>
      {commits.map((item: Commit) => (
        <div className='mb-5'>
          <CommitPreview commit={item} />
        </div>
      ))}
    </div>
  )
}
