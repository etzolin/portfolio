import React from 'react';
import './JobItem.scss';

export default class JobItem extends React.Component {
  render() {
    return (
      <div className="job">
        <h5 className="job-title">{this.props.title}</h5>
        <p className="job-description">{this.props.children}</p>
      </div>
    );
  }
}
