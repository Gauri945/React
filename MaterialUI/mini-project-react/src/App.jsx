
// import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import SearchBox from './SearchBox';
import "./App.css";
import WeatherApp from "./WeatherApp";

function App() {
 let handleclick= ()=>{
  console.log("Button Clicked");
 }

  return (
    <>
    {/* <h1>Material UI !!</h1>
      <Button variant="text" disabled sx={{ width: "30%" }}>Text</Button>
      <Button variant="contained" onClick={handleclick} sx={{ width: "30%" }}>CLick Me!</Button>
      <Button variant="outlined" color="success" size ="small" sx={{ width: "30%" }}>Outlined</Button>
       <Button aria-label="delete" disabled color="primary"> Delete
        <DeleteIcon />
      </Button>
      <Button color="secondary" aria-label="add an alarm"> ALARM
        <AlarmIcon />
      </Button> */}
         <WeatherApp />
    </>
  )
}

export default App
