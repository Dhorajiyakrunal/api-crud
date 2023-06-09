import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Addpost from './Pages/ADDpost';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/' element={<Addpost/>}/>
      </Routes>
    </div>
  );
}

export default App;
