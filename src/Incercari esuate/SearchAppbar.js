
import React, { Component } from 'react';

//import SearchBar from './SearchBar'
import TableBody  from '../SearchComponents/TableBody'
import data from '../data.json'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import DateFnsUtils from '@date-io/date-fns';
  import TextField from '@material-ui/core/TextField';
  

export class SearchAppBar extends Component {
  constructor(props) {
    super(props);
    this.data = [];
    this.state =
    {
      departure : '',
      arrival : '',
      date : '',
      isLoading: false,
    }
    this.sstate=
    {
      search: ''
    }
  }
  handlechange (e) {
    this.setState({
        search: e.target.value
    })
}

handleOnChange = (e) => {
    this.props.handleSearchEvents(e.target.value, e.target.name);
  };
  componentDidMount() {        fetch(`http://localhost:3000/trains`)   
   .then(response => response.json())      
   .then(data =>  {             
     let array = []; 
        
     for (let i = 0; i < data.length; i++) {             
      let entry = {};      
      entry.departure = data[i].departure;          
      entry.arrival = data[i].arrival; 
      entry.date=data[i].date ;        
      
       array[i] = entry;       
     } 
     this.data = array;       
     this.setState({          
       isLoading: false,
     });      
   })    
   .catch(error => this.setState({ error, isLoading: false }));  
}

handleSearchEvents = (title, name) => {
  this.setState({ [name]: title });
}
render() {

  const trains = data.trains;
        const libData=[];  
        const searchKey= this.sstate.search.trim().toLowerCase();
        if(searchKey && searchKey.length >0)
        { libData= trains.filter( i => {
            return i.trainId.toLowerCase().match(searchKey);
        })}
      


  const filteredData = this.data.filter((dataObj)=>
  (dataObj.departure.indexOf(this.state.departure) !== -1)&&
  (dataObj.arrival.indexOf(this.state.arrival) !== -1)&&
  (dataObj.date.indexOf(this.state.date ) !== -1));


  let datta={filteredData}
    return (
      <div className="App">
        <TextField id="filled-search" 
          name='departure'
           type='text'
             variant="filled"
             value= { this.state.search} onChange={(e) => this.handlechange(e)}
             placeholder='departure..' />
              <TextField id="filled-search" 
          name='arrival'
           type='text'
             variant="filled"
             value= { this.state.search} onChange={(e) => this.handlechange(e)}
             placeholder='arrival..' />
             <TextField id="filled-search"
             name="date"
             type="text"
             variant="filled"
             value= { this.state.search} onChange={(e) => this.handlechange(e)}
             placeholder="DD/MM/YYYY" />
        
        
      
        {
          libData.map((i,index) => {
            return <li ley={index} > {i.departure }</li>
          })
        }
        
      </div>
    )
  }
}
export default SearchAppBar;
