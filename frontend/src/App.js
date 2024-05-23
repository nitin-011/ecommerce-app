import React from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/Hompage";
import ProductPage from "./pages/productpage";
import AllProducts from "./pages/GetPRoductPage.js";
import SearchPage from "./pages/searchpge.js";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomePage />
                    }
                ></Route>
                <Route
                    path="/product/:id"
                    element={
                        <ProductPage />
                    }
                ></Route>
                <Route
                    path="/products"
                    element={
                        <AllProducts />
                    }
                ></Route>
                <Route
                    path="/products/:keyword"
                    element={
                        <AllProducts />
                    }
                ></Route>
                               <Route
                    path="/search"
                    element={
                        <SearchPage />
                    }
                ></Route>

            </Routes>
        </BrowserRouter>
    )
}

export default App;