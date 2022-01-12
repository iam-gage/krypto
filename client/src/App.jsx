import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar, Welcome, Footer, Services, Transactions } from './components';

const App = () =>  {

  return (
    <div className="App">
    	<div className="main-h-screen">
		<div className="gradient-bg-welcome">
			<Navbar />
			<Welcome />
		</div>
			<Services />
			<Transactions />
			<Footer />

	</div>
    </div>
  );
}

export default App
