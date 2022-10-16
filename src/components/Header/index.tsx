import { Component } from 'react';

export default class Header extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='header'>
        <h1>Treinos</h1>
      </div>
    );
  }
}
