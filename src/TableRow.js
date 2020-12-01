import React, { Component } from 'react';
export class TableRow extends Component {  
  render() {    
    return (      
      <tr>        
        <td>{this.props.departure}</td>
        <td>{this.props.arrival}</td>
       <td>{this.props.date}</td>
      </tr>
    )
  }
}
export default TableRow;