import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroeScreen } from '../components/heroes/HeroeScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
  return (
    <div> 
        <Navbar />
        <div className='container mt-2'>
            <Routes>
                <Route path="/marvel" element={<MarvelScreen />} />
                <Route path="/hero/:heroeId" element={<HeroeScreen />} />
                <Route path="/dc" element={<DcScreen />} />
                <Route path="/search" element={<SearchScreen />} />

                <Route  path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    </div>
  )
}
