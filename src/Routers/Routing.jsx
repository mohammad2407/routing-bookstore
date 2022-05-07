import React from 'react'
import { Route, Routes } from 'react-router'
import { EachBook } from '../Components/EachBook'
import { Library } from '../Components/Library'

export const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path = '/' element={<Library />} />
            <Route path = '/books/:id' element={<EachBook />} />
            
        </Routes>
    </div>
  )
}
