import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './component/header'

function Exam() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Exam
