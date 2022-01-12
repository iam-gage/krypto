import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { navbar, welcome, footer, services, transactions } from './components';

const App = () =>  {

  return (
    <div className="App">
    	<div className="main-h-screen">
		<div className="gradient-bg-welcome">
			<navbar />
			<welcome />
		</div>
			<services />
			<transactions />
			<footer />

	</div>
    </div>
  );
}

export default App
