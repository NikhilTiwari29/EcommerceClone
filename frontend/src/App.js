import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/homePage';
import About from './pages/about';
import Policy from './pages/policy';
import PageNotFound from './pages/pageNotFound';

function App() {
  return (
    <>
    <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/policy' element={<Policy/>}/>
       <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
