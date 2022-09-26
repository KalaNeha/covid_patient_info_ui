import React, { Component } from 'react';
import BTable from '../component/Table_user.jsx';

class Home extends Component {

  state = {
    isLoading: true,
    alldata: [],
    error: null
};

getFetchUsers() {
  this.setState({
      loading: true
  }, () => {
      fetch("http://localhost:3002/countries").then(res => res.json()).then(result => this.setState({
          loading: false,
          alldata: result
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
            type="country"
             alldata={this.state.alldata}
             getList={this.getLists}
         />
         
     
     </div>
       );
  }
}

export default Home;

