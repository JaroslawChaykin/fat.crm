import React from 'react';
import './App.scss';
import { Button, ButtonGroup } from './components';
import MainLayout from './layouts/MainLayout/MainLayout';

function App() {

  return (
    <div className="App">
      <MainLayout>
        <ButtonGroup rounded outline size={'medium'} vertical>
          <Button text={'All'} onClick={() => console.log('12')}/>
          <Button text={'Sessions'} href={'privet'} icon={'gauge solid'}/>
          <Button text={'Source'} />
          <Button text={'Referrals'} />
        </ButtonGroup>
      </MainLayout>
    </div>
  );
}

export default App;
