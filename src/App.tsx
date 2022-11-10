import React from 'react';
import './App.scss';
import { Button, ButtonGroup } from './components';

function App() {

  return (
    <div className="App">
      <ButtonGroup rounded outline>
        <Button text={'Press 1'} callback={() => console.log('I button')}/>
        <Button text={'Press 2'} callback={() => console.log('I button')}/>
        <Button text={'Press 3'} callback={() => console.log('I button')}/>
        <Button text={'Press 4'} callback={() => console.log('I button')}/>
      </ButtonGroup>
      <Button text={'Press 5'} callback={() => console.log('I button')} rounded outline/>
      <Button text={'Press 6'} callback={() => console.log('I button')} rounded outline/>
      <ButtonGroup rounded primary>
        <Button text={'Press 7'} callback={() => console.log('I button')}/>
        <Button text={'Press 8'} callback={() => console.log('I button')}/>
      </ButtonGroup>
    </div>
  );
}

export default App;
