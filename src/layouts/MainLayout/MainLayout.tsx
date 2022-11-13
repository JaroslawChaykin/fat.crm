import React, { FC, PropsWithChildren } from 'react';
import './MainLayout.style.scss'

const MainLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={'main-layout'}>
      <aside>
        Menu
      </aside>
      <header className={'fixed-top'}>Header</header>
      <section className={'content'}>
        {children}
      </section>
    </div>
  );
};

export default MainLayout;