import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from './configs/routes'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route, idx) => {
            const { path, Page } = route
            return (
              <Route key={idx} path={path} element={<Page />} />
            )
          })}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
