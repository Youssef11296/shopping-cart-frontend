import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from './configs/routes'
import { Box } from "@mui/material"

const App = () => {
  return (
    <Box sx={{ height: "100vh", background: "whitesmoke" }}>
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
    </Box>
  )
}

export default App
