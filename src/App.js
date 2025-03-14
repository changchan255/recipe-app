import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout';
function App() {
 return (
   <BrowserRouter>
     <Routes>
      <Route
      path='/'
      element= {
        <Layout>
          
        </Layout>
      }
      />
     </Routes>
   </BrowserRouter>
 );
}

export default App;
