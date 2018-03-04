import React from 'react';
import './MainContent.scss';

export default class MainContent extends React.Component {
  render() {
    return (
      <main className="main">
        {this.props.children}
      </main>
    );
  }
}
