import React from 'react';

class Panel extends React.Component {
  render() {
    let widthClass = 'col-md-' + this.props.width;
    return (
      <div className={widthClass}>
        <div className="card">
          <div className="card-header">{this.props.title}</div>
          <div className="card-body">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Panel