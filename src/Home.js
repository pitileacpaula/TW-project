//import React from 'react';
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

//Import all map related components
import React, { useState } from 'react';
import Map from "./map_components";
import { Layers, TileLayer, VectorLayer } from "./map_components";
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { osm, vector } from "./map_components";
import { fromLonLat, get } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import { Controls, FullScreenControl } from "./map_components";

//Import date picker components
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

//Map definitions

let styles = {
  'MultiLineString': new Style({
    stroke: new Stroke({
      color: 'blue',
      width: 3,
    }),
    fill: new Fill({
      color: 'rgba(0, 0, 255, 0.1)',
    }),
  }),
};
//Object for showing routes *right now just as an example so I don't forget the structure*
const geojsonObject = {
                      	"type": "FeatureCollection",
                      	"features": [
                      		{
                      			"type": "Feature",
                      			"properties": {
                      				"kind": "route",
                      				"from": "Timisoara",
                      				"to": "Oradea"
                      			},
                      			"geometry": {
                      				"type": "MultiLineString",
                      				"coordinates":
                      				[
                      				    [
                      				        [
                      						    21.21,
                      						    45.75
                      						],
                      						[
                      						    21.33,
                      						    46.19
                      						]
                      				    ],
                      				    [
                      				        [
                                                21.33,
                                                46.19
                                            ],
                                            [
                                                21.96,
                                                47.04
                                            ]
                      				    ]
                      				]
                      			}
                      		}
                      	]
                      };
const App = () => {
  const [center, setCenter] = useState([-94.9065, 38.9884]);
  const [zoom, setZoom] = useState(9);
  const [showLayer1, setShowLayer1] = useState(true);
  const [showLayer2, setShowLayer2] = useState(true);
  }

//End map definitions

//Default function that generates the home page
export default function ProminentAppBar() {
  const classes = useStyles();
  //Set default date picker date to be the current day
  const [selectedDate, setSelectedDate] = React.useState(new Date(Date.now()));
  //Handle the date change event
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  //Set default values for map
  const [center, setCenter] = useState([25.20, 	45.94]);
    const [zoom, setZoom] = useState(6.8);
    const [showLayer1, setShowLayer1] = useState(true);
    const [showLayer2, setShowLayer2] = useState(true);
  //Return the page
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
        
      {/*div that contains all components*/}
        <Typography component="div" style={{ position:'relative' }}>
            {/*The form that handles the search by Departure, Arrival and date*/}
            <form className = {classes.cautare}>
            <Typography component="div" style={{ backgroundColor: '#D9DBF1', top : '30px', height: '25vh', position:'relative' }}  >
                <Typography component="h1" style={{ top:'10%', fontWeight:'bold', fontSize:'30px'}}>Search for trains </Typography>
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
                <Typography component="button" style={{ backgroundColor: '#D6DBDF ', height: '5vh', width:'10vh', position:'relative', top:'20%', left:'5%'}}>
                Search
                </Typography>
            </Typography>
            </form>

            {/*The form that handles the search by train id*/}
            <form className = {classes.cautare}>
            <Typography component="div" style={{ backgroundColor: '#D9DBF1', top : '60px', height: '25vh', position:'relative' }}  >
                <Typography component="h1" style={{ fontWeight:'bold', fontSize:'30px', position:'relative'}}> Get information for train in transit </Typography>
                <TextField  id="filled-search" label=" Train id" type="search" variant="filled" />
                <Typography component="button" style={{ backgroundColor: '#D6DBDF ', height: '5vh', width:'10vh', top:'20%', position:'relative', left:'5%'}}>
                Search
                </Typography>
            </Typography>
            </form>

            {/*The form that handles the map display of train routes*/}
            <form className = {classes.cautare}>
            <Typography component="div" style={{ backgroundColor: '#D9DBF1', top : '90px', position:'relative' }}  >
                <Typography component="h1" style={{ fontWeight:'bold', fontSize:'30px', position:'relative'}}> See train route </Typography>
                <TextField  id="filled-search" label=" Train id" type="search" variant="filled" />
                <Typography component="button" style={{ backgroundColor: '#D6DBDF ', height: '5vh', width:'10vh', position:'relative', top:'20%', left:'5%'}}>
                Search
                </Typography>
            </Typography>
            </form>

            {/*div that contains the map*/}
            <Typography component="div" style={{ backgroundColor: '#D9DBF1', top : '90px', position:'relative' }}  >
                <Map center={fromLonLat(center)} zoom={zoom}>
                  <Layers>
                    <TileLayer
                      source={osm()}
                      zIndex={0}
                    />
                    <VectorLayer
                     source={vector({ features: new GeoJSON().readFeatures(geojsonObject, { featureProjection: get('EPSG:3857') }) })}
                     style={styles.MultiLineString}
                    />
                  </Layers>
                  <Controls>
                    <FullScreenControl />
                  </Controls>
                </Map>
                </Typography>
        </Typography>
      </Container>
    </div>
  );
}
