import React, { Component } from 'react';
import TableRow from './TableRow'
export class TrainTable extends Component {    
    render() {    
      let rows = [];     
      this.props.data.forEach((dataObj) => {      
        rows.push(        
          <TableRow          
             key={dataObj.id}          
             departure={dataObj.departure}          
             arrival={dataObj.arrival}    
             date={dataObj.date}      
             />
        );    
      });     
      return (      
        <table>        
          <thead>          
            <tr>            
              <th>departure</th>            
              <th>arrival</th>      
              <th>date</th>    
                  
            </tr>
          </thead>        
          <tbody>        
            {rows}       
          </tbody>     
        </table>    
      ) 
    }
  }
  export default TrainTable;