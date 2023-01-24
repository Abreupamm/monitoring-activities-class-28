import './App.css';
import { Component } from 'react';
import Header from './components/header/Header';
import logo from './imgs/logo.png'
import Section from './pages/Section';

class App extends Component {
  render () {
    return (
      <>
        <Header
          classHeader='header'
          src={logo}
          alt='logo carrinho de compras'
          classImg='logo'
        />
        <Section />
      </>
    );
  }
}

export default App;
