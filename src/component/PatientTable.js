import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useNavigate } from 'react-router-dom';

const PatientTable = (props) => {
  const {alldata : rows, name} =props;

  return ( 
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">       
       <TableHead>
          <TableRow>
          <TableCell>{name}</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">ADDRESS</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Status</TableCell>

           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            
              <TableCell component="th" scope="row" style={{cursor: "pointer"}}>
              <Link to={row.name}>{row.name}</Link>  
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{'recovered'}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
 
export default PatientTable;
