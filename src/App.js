import { Routes, Route, BrowserRouter } from 'react-router-dom';

import MainPage from './views/pages/MainPage';
import LoginPage from './views/pages/LoginPage';
import Charts from './views/pages/Charts';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/home' element={<MainPage/>}/>
      <Route path='/charts' element={<Charts/>}/>    
    </Routes>
   </BrowserRouter>
  );
}

export default App;
