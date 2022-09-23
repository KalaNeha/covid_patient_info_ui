import React, { Component } from 'react';
import BTable from './Table_user.js';

class State_info extends Component {
    state = {
        isLoading: true,
        states: [],
        error: null
    };

    getFetchUsers() {
        this.setState({
            loading: true
        }, () => {
            fetch("http://localhost:3002/state").then(res => res.json()).then(result => this.setState({
                loading: false,
                states: result
            })).catch(console.log);
        });
      }
      componentDidMount() {
        this.getFetchUsers();
      }
    render() { 
        return (
            <div>
         <BTable
            state="state"
             countries={this.state.states}
             getList={this.getLists}
         />
         
     
     </div>
        );
    }
}
 
export default State_info;