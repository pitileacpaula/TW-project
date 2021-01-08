import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableRows from '../SearchComponents/TableRows'

class SearchDeparture extends React.Component {
    state={
        search : '' ,
       // arrival : null,
       // departure : null,
       // date : null
    }

     handlechange (e) {
             this.setState({
                 search: e.target.value
             })
         }
      
        
         
    render()
    {
        const {trains} = this.props;
        let libData=[];  
        const searchKey= this.state.search.trim().toLowerCase();

        if(searchKey && searchKey.length >0)
                { libData= trains.filter( i => {
                    return i.departure.toLowerCase().match(searchKey);
                })}
        /**switch(this.props
            )
        {
            case this.state.departure :
                if(searchKey && searchKey.length >0)
                { libData= trains.filter( i => {
                    return i.departure.toLowerCase().match(searchKey);
                })}
            case this.state.arrival : 
             if(searchKey && searchKey.length >0)
            { libData= trains.filter( i => {
                return i.arrival.toLowerCase().match(searchKey);
            })}
            case  this.state.date :  if(searchKey && searchKey.length >0)
            { libData= trains.filter( i => {
                return i.date.toLowerCase().match(searchKey);
            })}




        } **/
        
       
       

        
        return (
            
                <div>
            <input type="text" id="departure" name="dep" value= { this.state.search} onChange={(e) => this.handlechange(e)} />
            <input type="text" value= { this.arrival} onChange={(e) => this.handlechangeA(e)} />
            <input type="text" value= { this.state.search} onChange={(e) => this.handlechangeDa(e)} />
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
                        return <li key={index } > {i.departure }  </li>
                    })
                     }
                 </TableCell>
                <TableCell >
                     {
                    libData.map((i,index) => {
                        return <li key={index } > {i.arrival}  </li>
                    })
                    }
                </TableCell>
            <TableCell >
                 {
                    libData.map((i,index) => {
                        return <li key={index } >  {i.date} </li>
                    })
                }
            </TableCell>
            </TableRow>
        </TableBody>
                </Table> 
           
            </div>
        )
    }
}
export default SearchDeparture;