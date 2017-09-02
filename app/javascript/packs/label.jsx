import React from 'react'

export default class Label extends React.Component {
  constructor(props){
    super(props)
  }

  render () {
    return (
      <div>
        <div>{this.propslabel}</div>
      </div>
    );
  }
}

//type checking
Label.propTypes = {
  label: React.PropTypes.string
};
