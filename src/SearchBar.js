import React, { Component } from 'react';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';


export class SearchBar extends Component {
  handleOnChange = (e) => {
  this.props.handleSearchEvents(e.target.value, e.target.name);
};
    render() {
      return (
        <form>
          <TextField id="filled-search" 
          name='departure'
           type='text'
             variant="filled"
             onChange={this.handleOnChange}
             value={this.props.departure}
             placeholder='departure..' />
              <TextField id="filled-search" 
          name='arrival'
           type='text'
             variant="filled"
             value={this.props.arrival}
             onChange={this.handleOnChange}
             placeholder='arrival..' />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                     disableToolbar
                     variant="inline"
                     format="MM/dd/yyyy"
                     margin="normal"
                     id="date-picker-inline"
                     name="date"
                     value={this.props.date}
                     onChange={this.handleOnChange}
                     
                     KeyboardButtonProps={{
                     'aria-label': 'change date',
                     }}/>
                </MuiPickersUtilsProvider>
        
      </form>
      )  
    }
  }
  export default SearchBar;