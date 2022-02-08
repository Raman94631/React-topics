import React from 'react';

class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);
      // Only change code below this line
  this.state={
    name:"Raman"
  }
      // Only change code above this line
    }
    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };

export default StatefulComponent;
