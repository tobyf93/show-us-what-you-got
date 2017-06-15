import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import styles from '../../assets/stylesheets/menuItem.scss';

class Item extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.state = { showChildren: false };
  }

  onClick() {
    if (this.props.data.children) {
      console.log('Menu Item Toggled');
      this.setState({
        showChildren: !this.state.showChildren,
      });
    } else {
      console.log('Link Clicked');
    }
  }

  render() {
    const children = this.props.data.children;
    let iconClass = '';

    if (children) {
      if (this.state.showChildren) iconClass = 'chevron-up';
      else iconClass = 'chevron-down';
    } else {
      iconClass = 'minus';
    }

    return (
      <div className={styles.root}>
        <div className={styles.item} onClick={this.onClick}>
          <div className={styles.icon}>
            <i className={`fa fa-${iconClass}`} aria-hidden="true" />
          </div>
          <div>{this.props.data.name}</div>
        </div>
        <div className={styles.children}>
          {
            children && this.state.showChildren ? (
              children.map(child => <Item key={uuid()} data={child} />)
            ) : null
          }
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Item;
