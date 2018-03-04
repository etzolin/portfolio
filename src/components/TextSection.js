import React from 'react';
import './TextSection.scss';

export default class TextSection extends React.Component {
  render() {
    return (
      <section className="container">
        {this.props.title && <h3>{this.props.title}</h3>}
        {this.props.children}
      </section>
    );
  }
}
