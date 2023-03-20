import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Error } from './page/error/Error'
import { Commits } from './page/commits/Commits'

export function AppRouter (): JSX.Element {
  return (
    <BrowserRouter basename={process.env.PUBLIC_PATH}>
      <Routes>
        <Route path='/' element={<Commits />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
