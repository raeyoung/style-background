import React from "react";
import Nav from './components/Nav'
import SubNav from './components/SubNav';
import Main from './components/Main';

const BackgroundTest = () => {
  return (
    <>
      <header id="mainHeader">
        <Nav />
      </header>
      <nav id="mainNav">
        <SubNav />
      </nav>
      <main id="main">
        <Main />
      </main>
    </>
  );
}

export default BackgroundTest;
