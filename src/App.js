import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Banner from './Header/Banner';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';

function App() {
  return (
    <div className="App">
      {/* {setTimeout(()=>{return <Banner></Banner>},5000)} */}
      {/* <Header></Header> */}
     <SortingVisualizer></SortingVisualizer>
    </div>
  );
}

export default App;
