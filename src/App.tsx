import React from 'react';
import './App.scss';
import { Button, ButtonGroup } from './components';

function App() {
  return (
    <div className="App">
      <ButtonGroup rounded primary>
        <Button text={'Press 1'} callback={() => console.log('I button')} />
        <Button text={'Press 2'} callback={() => console.log('I button')} />
        <Button text={'Press 3'} callback={() => console.log('I button')} />
        <Button text={'Press 4'} callback={() => console.log('I button')} />
      </ButtonGroup>
    </div>
  );
}

export default App;
