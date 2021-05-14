import Menu from './components/Menu';
import './App.css';
import Header from './components/Header';
import Folder from './components/Folder';
import { useRef, useState } from 'react';

function App() {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className="wrapper">
      <Header setInputSearch={setInputSearch} />
      <Menu />
      <Folder inputSearch={inputSearch} />
    </div>
  );
}

export default App;
