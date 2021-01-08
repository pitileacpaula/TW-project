import React from 'react'
//import data from '../data.json'
import db from '../db.json'
import TextField from '@material-ui/core/TextField';
import { Table, TableBody, TableRow } from 'material-ui';
import { TableCell, TableHead } from '@material-ui/core';
import { MuiThemeProvider } from 'material-ui/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableRows from './TableRows'
class SearchArrival extends React.Component {
    state={
        search : ''
    }

     handlechange (e) {
             this.setState({
                 search: e.target.value
             })
         }

    render()
    {


       

        const trains = db.trains;

        let libData=[];  
        const searchKey= this.state.search.trim().toLowerCase();
        let errorMessage;
      
        if(searchKey && searchKey.length >0)
        { 
            libData= trains.filter( i => {
            if(i.inTransit!== false){
                errorMessage='0'
                return i.trainId.toLowerCase().match(searchKey);
            }

        })}

        let rows=[]; 
        libData.forEach(element => {
            rows.push(
                <TableRows key={element.id}
                departure={element.departure}
                arrival={element.arrival}
        date={element.date}
        ></TableRows>
            )
        });
        return (
            
                <div>
                  
                  <TextField  id="filled-search" label=" Train id" type="search" variant="filled" value= { this.state.search} onChange={(e) => this.handlechange(e)} />

                <MuiThemeProvider>
                <TableContainer component={Paper} >
                  <Table>
            <TableHead >
          <TableRow>
            <TableCell><b>Departure</b></TableCell>
            <TableCell><b> Arrival</b></TableCell>
            <TableCell><b>Date</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
                <TableCell>
                     {
                    libData.map((i,index) => {
                        return <td key={index}> {i.departure}  </td>
                    })
                     }
                 </TableCell>
                <TableCell >
                     {
                    libData.map((i,index) => {
                        return <td key={index}> {i.arrival}  </td>
                    })
                    }
                </TableCell>
            <TableCell >
                 {
                    libData.map((i,index) => {
                        return <td key={index}> {i.date}  </td>
                    })
                }
            </TableCell>
            </TableRow>
        </TableBody>
                </Table> 
                </TableContainer>
                </MuiThemeProvider>
            <h1>{errorMessage}!</h1>

           
            </div>
        )
    }
}
export default SearchArrival;