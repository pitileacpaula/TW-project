import React from 'react'
//import data from '../data.json'
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableRows from './TableRows'




class SearchArrival extends React.Component {
    state={
        search : '',
        trains: []
    }

    handlechange (e) {
        this.setState({
            search: e.target.value
        })
    }

        componentWillMount()
        {
            fetch('/Trains', {mode: 'no-cors'})
                .then(response => response.json())
                .then(data => {
                    for (let i = 0; i < data.length; i++) {
                        let entry = {};
                        entry.departure = data[i].departure;
                        entry.arrival = data[i].arrival;
                        entry.date = data[i].date;
                        this.state.trains[i] = entry;
                    }
                    this.data =this.state.trains;
                    this.setState({
                        trains: data
                    });
                })
        }
    render()
    {
        let libData=[];
        const searchKey= this.state.search.trim().toLowerCase();


        if(searchKey && searchKey.length >0)
        { libData= this.state.trains.filter( i => {
            if(i.inTransit!= false){
                return i.trainId.toLowerCase().match(searchKey);
            }


        })}

        let rows =[];
        libData.forEach((dataObj)=> {
            rows.push(
                <TableRows key={dataObj.id}
                           departure={dataObj.departure}
                           arrival={dataObj.arrival}
                           date={dataObj.date}
                />
            )
        })
        return (

            <div>

                <TextField  autoComplete="off" id="filled-search" label=" Train id" type="search" variant="filled" value= { this.state.search} onChange={(e) => this.handlechange(e)} />
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


            </div>
        )
    }
}
export default SearchArrival;