import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import styles from '../../assets/stylesheets/menu.scss';
import Item from './Item';

function Menu({ data }) {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        Tree Menu
      </div>
      {
        data.children.map(child => <Item key={uuid()} data={child} />)
      }
    </div>
  );
}

Menu.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Menu;
