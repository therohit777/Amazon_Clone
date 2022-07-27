import './App.css';
import { Header } from './Components/Js/Header';
import { Home } from './Components/Js/Home';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import { Checkoutpage } from './Components/Js/Checkoutpage';



function App() {
  return (
    <div className="App">
      <Router>
         <Header/>
         <Routes>
           <Route path="/checkout" element={<Checkoutpage/>}/>
           <Route path="/" element={<Home/>}/>
         </Routes>
       </Router>
    </div>
  );
}

export default App;
