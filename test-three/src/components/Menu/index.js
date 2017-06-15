import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../assets/stylesheets/menu.scss';
import Item from './Item';

function Menu({ data }) {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        Tree Menu
      </div>
      {
        data.children.map(child => <Item data={child} />)
      }
    </div>
  );
}

export default Menu;
