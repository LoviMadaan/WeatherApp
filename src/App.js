import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className='col-md-12'>
    <div className='bg'>
      <h1 className='heading' >Weather Forecast</h1>
      <div className='d-grid gap-3 col-4 mt-4'>
      <input type = 'text' className='form-c'/>
      <button className='btn btn-primary' type='button'>Search</button>
      </div>
    </div>
    <div className='col-md-12 text-center mt-5'>
      <div className='shadow rounded weatherResultBox'>
        
      </div>
    </div>
    </div>
  );    
}

export default App;
