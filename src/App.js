import './App.css';
import { Header } from './Components/Js/Header';
import { Home } from './Components/Js/Home';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import { Checkoutpage1 } from './Components/Js/Checkoutpage1';



function App() {
  return (
    <div className="App">
      <Router>
         <Header/>
         <Routes>
           <Route path="/checkout" element={<Checkoutpage1/> }/>
           <Route path="/" element={<Home/>}/>
         </Routes>
       </Router>
    </div>
  );
}

export default App;
