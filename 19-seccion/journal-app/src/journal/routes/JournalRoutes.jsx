import { Navigate, Route, Routes } from 'react-router-dom'
import { JournalPages } from '../Pages/JournalPages'
export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<JournalPages/>} />
      <Route path='/*' element={<Navigate to='/'/>} />
    </Routes>
  )
}
