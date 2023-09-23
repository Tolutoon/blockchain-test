import React from 'react';
import { Navbar, Welcome, Services, Footer, Transactions } from '../src/components';


function Home() {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
      <Navbar/>
      <Welcome/>
      </div>
      <Services/>
      <Transactions />
      <Footer/>
    </div>
  )
}

export default Home;