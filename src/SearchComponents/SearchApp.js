
import React, { Component } from 'react';

import SearchBar from './SearchBar'
import TableBody  from './TableBody'


export class SearchApp extends Component {
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
  
  }
 
  componentDidMount() {        fetch(`/Trains`, {mode:'no-cors'})
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
       isLoading: false, array :data
     });      
   })    
   .catch(error => this.setState({ error, isLoading: false }));  
}

handleSearchEvents = (title, name) => {
  this.setState({ [name]: title });
}
render() {


      


  const filteredData = this.data.filter((dataObj)=>
  (dataObj.departure.indexOf(this.state.departure) !== -1)&&
  (dataObj.arrival.indexOf(this.state.arrival) !== -1)&&
  (dataObj.date.indexOf(this.state.date ) !== -1));


  let data={filteredData}
    return (
      <div className="App">
        
        <SearchBar  
        departure= {this.state.departure}
        arrival={this.state.arrival}
        date={this.state.date}
        handleSearchEvents={this.handleSearchEvents}/>
        <TableBody  
       
        data={filteredData}/>
    
        
      </div>
    )
  }
}
export default SearchApp;
