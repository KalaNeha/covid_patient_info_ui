import React, { Component } from 'react';
import BTable from '../component/Table_user.jsx';

class State_info extends Component {
    state = {
        isLoading: true,
        alldata: [],
        error: null
    };

    getFetchUsers() {
        this.setState({
            loading: true
        }, () => {
            fetch("http://localhost:3002/state").then(res => res.json()).then(result => this.setState({
                loading: false,
                alldata: result
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
            type="states"
             alldata={this.state.alldata}
             getList={this.getLists}
         />
         
     
     </div>
        );
    }
}
 
export default State_info;