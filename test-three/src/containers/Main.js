import React from 'react';
import Menu from '../components/Menu';
import data from './data.json';

function Main() {
  return <Menu data={JSON.parse(data)} />;
}

export default Main;
