import './App.css'

import Intermediate from './components/Intermediate/Intermediate';
import Internal from './components/Internal/Internal';
import { ExternalContext } from './components/ExternalContext/ExternalContext';

export default function App() {
  return (
    <ExternalContext.Provider value='Hello'>
      <Intermediate>
        <Internal></Internal>
      </Intermediate>
    </ExternalContext.Provider>
  );
}