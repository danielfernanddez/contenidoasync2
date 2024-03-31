import './App.css';
import { Hero } from './components/hero/hero';
import { Archive } from './components/archive/archive';
import { Brag } from './components/brag/brag';
import { Cards } from './components/cards/cards';
import { Context } from './components/context/context';
import { Expand } from './components/expand/expand';
import { Keep } from './components/keep/keep';
import { Politicas } from './components/politicas/politicas';
import { Rrss } from './components/rrss/rrss';

function App() {
  return (
    <>
      <Hero />
      <Archive />
      <Keep />
      <Expand />
      <Context />
      <Cards />
      <Brag />
      <Politicas />
      <Rrss/>
    </>
  );
}

export default App;

