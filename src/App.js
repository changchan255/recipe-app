import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout';
import { Hero } from './components/hero';
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
     </Routes>
   </BrowserRouter>
 );
}

export default App;
