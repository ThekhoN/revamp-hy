import React, {Component} from 'react';
import Nav from '../../components/nav';
import {debouncer} from '../../modules/debounce';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      mobileView: true
    }
    this.updateStateMobileView = this.updateStateMobileView.bind(this);
  }
  updateStateMobileView(){
    const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(w < 768){
      this.setState({
        mobileView: true
      })
    }
    else {
      if(this.state.mobileView){
        this.setState({
          mobileView: false
        })
      }
    }
  }
  componentDidMount () {
    this.updateStateMobileView();
    window.addEventListener('resize', debouncer(this.updateStateMobileView, 250));
  }
  render () {
    return (
        <div>
          <Nav mobileView={this.state.mobileView}/>
        </div>
    );
  }
}
