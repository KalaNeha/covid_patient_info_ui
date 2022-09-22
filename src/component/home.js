import React, { Component } from 'react';
import BTable from './Table_user.js';

class Home extends Component {

  state = {
    isLoading: true,
    countries: [],
    error: null
};

getFetchUsers() {
  this.setState({
      loading: true
  }, () => {
      fetch("http://localhost:3002/countries").then(res => res.json()).then(result => this.setState({
          loading: false,
          countries: result
      })).catch(console.log);
  });
}
componentDidMount() {
  this.getFetchUsers();
}
  render(){
    return (
      <div>
         <BTable
            country="country"
             countries={this.state.countries}
             getList={this.getLists}
         />
         
     
     </div>
       );
  }
}

export default Home;

