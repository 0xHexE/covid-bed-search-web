import React from 'react';
import './styles.less';
import { AppMenu } from './Menu';

export function Header() {
  return (
    <header className="header" id="header">
      <div className="logo">
        <img src="https://img.icons8.com/clouds/344/coronavirus.png" alt=" " />
      </div>
      <span className="app-title">COVID Bed Search</span>
      <span className="flex-grow" />
      <AppMenu />
    </header>
  );
}
