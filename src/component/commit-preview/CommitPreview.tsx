import React from 'react'
import { Commit } from '../../page/commits/Commits.interface'
import './CommitPreview.css'

interface Props {
  commit: Commit
}

export function CommitPreview (props: Props): JSX.Element {
  const { commit } = props;
  const date = new Date(commit.commit.author.date)

  return (
    <div className="commit">
      <div>
        <div className="space-y-0.5 mb-4">
          <h5 className="text-lg text-black font-semibold">
            <a href={commit.html_url} className='hover:bg-sky-200 underline decoration-sky-500'>
              {commit.sha}
            </a>
          </h5>
          <p className="text-xs text-gray-700 dark:text-gray-400">
            {date.toUTCString()}
          </p>
        </div>
        <div>
          <p className="font-normal text-gray-500 dark:text-gray-400">
            {commit.commit.message}
          </p>
        </div>
        <div className='mt-5'>
          <p className="text-xs font-light text-gray-700 dark:text-gray-400">
            By {commit.commit.author.name}
          </p>
        </div>
      </div>
    </div>
  )
}
