import React from 'react';
import './App.scss';
import { Button } from './components';

function App() {
  return (
    <div className="App">
      <Button text={'Press me'} callback={() => console.log('I button')} rounded outline disabled />
    </div>
  );
}

export default App;
