import { router } from "./router"
import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function() {
    return (
        <BrowserRouter>
            <Routes>
                {router.map((route) => (<Route path={route.path} key={route.name} element={<route.component />} />) )}
            </Routes>
        </BrowserRouter>
    )
}