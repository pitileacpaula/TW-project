import React from 'react'
import data from '../data.json'
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
        const trains = data.trains;
        let libData=[];  
        const searchKey= this.state.search.trim().toLowerCase();
        if(searchKey && searchKey.length >0)
        { libData= trains.filter( i => {
            return i.arrival.toLowerCase().match(searchKey);
        })}
        return (
            
                <div>
            <input type="text" value= { this.state.search} onChange={(e) => this.handlechange(e)} /> 
            <ul>
                {
                    libData.map((i,index) => {
                        return <li key={index } > {i.departure } {i.arrival} {i.date} </li>
                    })
                }
            </ul>
            </div>
        )
    }
}
export default SearchArrival;