import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Budget from './pages/Budget';
import Form from './pages/Form';

import './css/style.css';


function App() {

  return (
    <>
<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
