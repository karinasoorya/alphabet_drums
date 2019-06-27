import React from 'react';
import Button from 'react-bootstrap/Button';

class Drum extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleClick(e) {
    this.props.tick.play();
  }
  handleKeyDown(e) {
    if(this.props.keyVal === e.keyCode) {
      this.props.tick.play();
    }
  }
  componentWillMount() {
   document.addEventListener('keydown', this.handleKeyDown);
  }
  render() {
    return (
        <div>
          <Button variant = "info" size = 'lg' onClick = {this.handleClick}>{String.fromCharCode(this.props.keyVal)}</Button>
        </div>
    );
  }
}

export default Drum;
