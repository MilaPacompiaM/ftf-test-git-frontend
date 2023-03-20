import React from 'react'
import { Commit } from '../../page/commits/Commits.interface'
import './CommitPreview.css'

interface Props {
  commit: Commit
}

export function CommitPreview (props: Props): JSX.Element {
  const { commit } = props;  

  return (
    <div className="commit">
      <div className="commit-content">
        <div className="space-y-0.5">
          <h5 className="text-lg text-black font-semibold">
            <a href={commit.html_url}>
              {commit.sha}
            </a>
          </h5>
          <p className="font-light">
            By {commit.commit.author.name}
          </p>
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {commit.commit.message}
        </p>
      </div>
    </div>
  )
}
