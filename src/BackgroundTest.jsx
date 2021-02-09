import React, { useState } from "react";
import Header from './components/Header';
import SubNav from './components/SubNav';
import Main from './components/Main';
import DarkStyles from './DarkStyles';
import LightStyles from './LightStyles'

const BackgroundTest = () => {
  const [number, setNumber] = useState(0);
  // const handleChangeDarkMode = (e) => {
  //   if(e.target.value === "1") {
  //     console.log("aa")
  //     return <DarkStyles />;
  //   }else {
  //     console.log("bb")
  //     return <LightStyles />;
  //   }
  // }
  const handleClick = (e) => {
    console.log(e.target.value)
    setNumber(e.target.value);
  }
  return (
    <>
      <header id="mainHeader">
        <Header />
      </header>
      <nav id="mainNav">
        <SubNav />
      </nav>
      <main id="main">
        <Main />
      </main>
      <br />
      <button onClick={handleClick} value="1">Dark Mode</button>
      <button onClick={handleClick} value="2">Light Mode</button>
      { (number === "1") ? <DarkStyles /> : <LightStyles /> }
      
      
    </>
  );
}

export default BackgroundTest;
