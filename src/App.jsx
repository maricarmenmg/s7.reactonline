import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Budget from './pages/Budget';
import PageNotFound from './pages/PageNotFound';

import './css/style.css';

function App() {

  return (
    <>
<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
