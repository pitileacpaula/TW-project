import React, { Component } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
export class TableRows extends Component {  
  render() {    
    return (      
     <TableRow> 
        <TableCell>{this.props.departure}</TableCell>
        <TableCell>{this.props.arrival}</TableCell>
        <TableCell>{this.props.date}</TableCell>
       </TableRow>
    )
  }
}
export default TableRows;