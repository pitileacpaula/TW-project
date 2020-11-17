import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline'; 
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import 'date-fns';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cautare : {
    '& .MuiTextField-root': {
      margin: theme.spacing(4),
      width: '25ch',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
      backgroundColor : "#6268A4" ,
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
  container : {
    paddingTop : 50 ,
  }
}));

export default function ProminentAppBar() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date(Date.now()));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h5" noWrap>
            Material-UI
          </Typography>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton aria-label="display more actions" edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <CssBaseline />
      <Container fixed className = {classes.container}>
        
        <form className = {classes.cautare}>
        <h1> Search for trains </h1>
        <Typography component="div" style={{ backgroundColor: '#D9DBF1', top : '30px', height: '25vh', position:'relative' }}  >
        <TextField  id="filled-search" label=" Departure" type="search" variant="filled" />
        <TextField  id="filled-search" label=" Arrival" type="search" variant="filled" />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Departure date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}/>
        </MuiPickersUtilsProvider>
        <Typography component="button" style={{ backgroundColor: '#D6DBDF ', height: '5vh', width:'10vh', top:'50%', position:'relative', top:'20%', left:'5%'}}>
        Search
        </Typography>
        </Typography>
       
        </form>
      </Container>
    </div>
  );

}
