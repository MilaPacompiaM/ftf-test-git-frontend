import React from 'react';
import { render, screen } from '@testing-library/react';
import { CommitPreview } from './CommitPreview';
import { Commit } from '../../page/commits/Commits.interface';

test('renders commit data', () => {
  const mockCommit: Commit = {
    sha: 'sha-123456789',
    html_url: 'https://www.google.com.pe/',
    commit: {
      author: {
        name: 'Michael Jackson',
        email: 'michael@test.com',
        date: '2023-01-01T10:00:00Z'
      },
      message: 'feat: update code'
    }
  }
  render(<CommitPreview commit={mockCommit} />);

  expect(screen.getByText(/Michael Jackson/i)).toBeInTheDocument();
  expect(screen.getByText(/feat: update code/i)).toBeInTheDocument();
  expect(screen.getByText((new Date('2023-01-01T10:00:00Z')).toUTCString())).toBeInTheDocument();
});