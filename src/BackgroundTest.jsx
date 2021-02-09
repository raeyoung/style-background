import React from "react";
import Header from './components/Header'
import SubNav from './components/SubNav';
import Main from './components/Main';

const BackgroundTest = () => {
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
    </>
  );
}

export default BackgroundTest;
