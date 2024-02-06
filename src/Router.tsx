import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts'
import { Home } from './pages/home'
import { Cart } from './pages/cart'
export function Router() {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
            </Route>
        </Routes>
    )
}