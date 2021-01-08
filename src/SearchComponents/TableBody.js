import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableRows from './TableRows'

const useStyles = makeStyles({
  table: {
    width: 650,
  },
});

function createData(departure, arrival, date) {
  return { departure, arrival, date };
}


<<<<<<< HEAD
=======

>>>>>>> 648006e89005bd981cfb8c5a16c3a4e3a79958e9
 class TableTrains extends Component {
  
  render() {
    let rows =[];
    this.props.data.forEach((dataObj)=> {
      rows.push(
        <TableRows key={dataObj.id}
        departure={dataObj.departure}
        arrival={dataObj.arrival}
        date={dataObj.date} />
      )
    }) 
  return (
    <TableContainer component={Paper} >
      <Table  aria-label="simple table" >
        <TableHead >
          <TableRow>
            <TableCell><b>Departure</b></TableCell>
            <TableCell><b> Arrival</b></TableCell>
            <TableCell><b>Date</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
}
export default TableTrains;