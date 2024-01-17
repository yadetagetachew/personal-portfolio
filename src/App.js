import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Cards from './Cards';
import Title from './Title';
import About from './About';
import Contact from './Contact';
import myStory from './media/myStory.png';
import myProjects from './media/myProject.png'
// import Icon from './svg'

function App() {
  return (
    <div className='app'>
    <Navbar />
    <Header />
    {/* <Icon /> */}
    <Title 
      image = {myStory} 
    />
    <About />
    <Title 
      image = {myProjects} 
    />
    <Cards />
    <Contact />
    </div>
  );
}

export default App;
