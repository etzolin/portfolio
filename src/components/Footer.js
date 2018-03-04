import React from 'react';
import './Footer.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer container">
        <p>{this.props.title}</p>
      </footer>
    );
  }
}
