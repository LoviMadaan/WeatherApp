import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useState } from 'react';

function App() {

const apiKey = '9bc378572f7c0f1aa69232bca3efb70d'
const [data, setData] = useState({})
const [inputCity, setInputCity] = useState('')

const getWeatherDetail = (cityName) => {
  if(!cityName) return
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" +cityName+"&appid="+apiKey
  axios.get(apiURL).then((res)=>{
     setData(res.data)
  })
}
const handleChangeInput = (e) => {
  setInputCity(e.target.value)
}

const handleSearch = () =>{
  getWeatherDetail(inputCity)
}  

  return (
    <div className='col-md-12'>
    <div className='bg'>
      <h1 className='heading' >Weather Forecast</h1>
      <div className='d-grid gap-3 col-4 mt-4'>
      <input type = 'text' className='form-c' 
      value={inputCity}
      onChange={handleChangeInput}/>
      <button className='btn btn-primary' type='button'
      onClick={handleSearch}
      >Search</button>
      </div>
    </div>

    {Object.keys(data).length> 0 &&
    <div className='col-md-12 text-center mt-5'>

      <div className='shadow rounded weatherResultBox'>
        <img className='icon' src='https://lh4.ggpht.com/9xr9zdR2YtEp_y8pW1MUJNBlSL2tNdrziFtmLMMQyf4S21O_EjT21jAB3LwbYjemBU4=w300' alt='icon'></img>
        <h5 className='city'>
          {data?.name}
        </h5>
        <h6 className='temp'>{((data?.main?.temp) - 273.15).toFixed(2) }℃</h6> 
      </div>
    </div>
}
    </div>
  );    
}

export default App;
