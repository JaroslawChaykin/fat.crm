import React from 'react';
import './App.scss';
import { Button, ButtonGroup } from './components';

function App() {

  return (
    <div className="App">
      <ButtonGroup rounded outline size={'medium'}>
        <Button text={'All'} onClick={() => console.log('12')}/>
        <Button text={'Sessions'} href={'privet'} icon={'gauge solid'}/>
        <Button text={'Source'} />
        <Button text={'Referrals'} />
      </ButtonGroup>
    </div>
  );
}

export default App;
