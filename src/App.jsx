import { publicRoutes } from './config/routes.config/index'
import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        {publicRoutes.map(route => (
          <Route
            key={route.key}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </Suspense>
  )
}

export default App
