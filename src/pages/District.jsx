import React, { Component } from 'react';
import BTable from '../component/Table_user.jsx';

class District_info extends Component {
    state = {
        isLoading: true,
        alldata: [],
        error: null
    };

    getFetchUsers() {
        this.setState({
            loading: true
        }, () => {
            fetch("http://localhost:3002/district").then(res => res.json()).then(result => this.setState({
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
            type="district"
             alldata={this.state.alldata}
             getList={this.getLists}
         />
         
     
     </div>
        );
    }
}
 
export default District_info;