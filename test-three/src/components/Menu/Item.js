import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../assets/stylesheets/menuItem.scss';

class Item extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.state = { showChildren: false };
  }

  onClick() {
    this.setState({
      showChildren: !this.state.showChildren
    });
  }

  render() {
    return (
      <div className={styles.root}>
        <div onClick={this.onClick}>
          {
            this.state.showChildren ? ' - ' : ' + '
          }
          {this.props.data.name}
        </div>
        <div className={styles.children}>
          {
            this.props.data.children && this.state.showChildren ? (
              this.props.data.children.map(child => <Item data={child} />)
            ) : null
          }
        </div>
      </div>
    );
  }
}

export default Item;
