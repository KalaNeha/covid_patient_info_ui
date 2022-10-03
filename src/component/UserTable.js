import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useNavigate } from 'react-router-dom';


// const history = useHistory()

// history.push("/country/state")
const UserTable = (props) => {
 const {alldata : rows, name} =props;


 console.log(props);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">       
       <TableHead>
          <TableRow>
            <TableCell>{name}</TableCell>
            <TableCell align="right">Active Cases</TableCell>
            <TableCell align="right">Close Cases</TableCell>
            <TableCell align="right">Deaths</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            
              <TableCell  component="th" scope="row" style={{cursor: "pointer"}}>
               <Link to={row.name}>{row.name}</Link>  
              </TableCell>
              <TableCell align="right">{row.active_cases}</TableCell>
              <TableCell align="right">{row.recover}</TableCell>
              <TableCell align="right">{row.deaths}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
 
export default UserTable;
