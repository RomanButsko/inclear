import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom'

import { Layout } from './layout/Layout'
import { NotFound } from './pages/404/NotFound'
import { HomePage } from './/pages/Home/HomePage'
import { AboutUs } from './pages/aboutUs/AboutUs'
import { Make } from './pages/Make/Make'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="make" element={<Make />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

export default router
