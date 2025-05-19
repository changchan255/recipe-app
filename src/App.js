import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout';
import { Hero } from './components/hero';
import { Recipe } from './screens/recipe';

function App() {
 return (
   <BrowserRouter>
     <Routes>
      <Route
      path='/'
      element= {
        <Layout>
          <Hero/>
        </Layout>
      }
      />

      <Route
      path='recipe'
      element={
        <Layout>
          <Recipe/>
        </Layout>
      }
      />
     </Routes>
   </BrowserRouter>
 );
}

export default App;
