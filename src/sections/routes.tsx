// src/pages/routes.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Layout from '../layout/global'



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          {/* Aquí puedes agregar más rutas hijas */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
