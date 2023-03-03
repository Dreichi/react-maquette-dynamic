import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './component/nav/nav';
import Header from './component/header/header';
import Form from './component/form/form';
import Footer from './component/footer/footer';
import PuzzleCard from './component/puzzle-card/Puzzle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Header />
    <PuzzleCard />
    <Form />
    <Footer />
  </React.StrictMode>
);

