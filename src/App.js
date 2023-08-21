
import React from 'react'
import './App.css'
import one from './assets/1.png'
import two from './assets/2.png'
import three from './assets/3.png'
import four from './assets/4.png'
import five from './assets/5.png'
import six from './assets/6.jpg'
import eight from './assets/Ellipse_9.png'

const App =() =>{
  return (
    <body>
      <div className='navbar-list'>
        <nav className='navbar'>
         <ul className='navbar-items'>
          <div className='logo'>
            <img src={one} alt='logo' />
            <p>Boldo</p>
            </div>


          <li><a href='#'>Product</a></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>About</a></li>
          </ul>

          <div className='button'>
          <button className='login-button'><a href='#'>Log In</a></button>
          </div>
      </nav>
      </div>
    

      <div className='hero-page'>
      <div className='header-text'>
      <h4>Save time by building<br />fast with Boldo Template</h4>
      <p>Funding handshake buyer business-to-business metric iPad partnership. <br /> 
      First mover advantage innovator success deployment non-disclosure.</p>
      
      <div className='button-container'>
      <button className='buy-button'>Buy template</button> 
      <button className='explore'>Explore</button>
      </div>
      </div>

       <div className='images'>

        <img className='bar-thread' src={two} alt='chart' /> <br />
        <img className='bar-chart' src={four} alt='chart' /> 
        <img className='pie-chart' src={three} alt='chart' /> 
        </div>
        </div>

        <div className='logo-wall'>

          <img className='logo1' src={one} alt='logo' />
          <h3 className='logo-1'>Boldo</h3>
          <img className='logo2' src={five} alt='logo' />
          <h3 className='logo-2'>Presto</h3>
          <img className='logo3' src={one} alt='logo' />
          <h3 className='logo-3'>Boldo</h3>
          <img className='logo4' src={five} alt='logo' />
          <h3 className='logo-4'>Presto</h3>
          <img className='logo5' src={one} alt='logo' />
          <h3 className='logo-5'>Boldo</h3>
          <img className='logo6' src={five} alt='logo' />
          <h3 className='logo-6'>Presto</h3>   
         </div>
     
   </body>

  );
};

export default App;