import React from 'react';
import './App.scss';
import { Button, ButtonGroup } from './components';

function App() {

  return (
    <div className="App">
      <ButtonGroup rounded outline>
        <Button text={'Press 1'} onClick={() => console.log('12')}/>
        <Button text={'Press 2'} href={'/home'}/>
        <Button text={'Press 3'}/>
        <Button text={'Press 4'}/>
      </ButtonGroup>
    </div>
  );
}

export default App;
