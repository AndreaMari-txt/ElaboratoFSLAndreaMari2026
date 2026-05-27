import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import useScrollProgress from './hooks/useScrollProgress'

export default function App() {
  useScrollProgress()

  return (
    <>
      {/* Scroll progress bar */}
      <div id="scroll-progress" />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  )
}
