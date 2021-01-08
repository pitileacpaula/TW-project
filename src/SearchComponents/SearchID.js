import React from 'react'
//import data from '../data.json'
import db from '../db.json'
import TextField from '@material-ui/core/TextField';


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

      
        if(searchKey && searchKey.length >0)
        { libData= trains.filter( i => {
            if(i.inTransit!= false){
                return i.trainId.toLowerCase().match(searchKey);
            }
            
            
        })}
        return (
            
                <div>
                  
                  <TextField  id="filled-search" label=" Train id" type="search" variant="filled" value= { this.state.search} onChange={(e) => this.handlechange(e)} />


            <ul>
                {
                    libData.map((i,index) => {
                        return <li key={index } > {i.departure } {i.arrival} {i.date} {i.trainId}</li>
                    })
                }
            </ul>
            </div>
        )
    }
}
export default SearchArrival;