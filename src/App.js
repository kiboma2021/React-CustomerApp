import { useEffect, useState } from 'react';
import { Routes,Route,Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './components/About';
import Contacts from './components/Contacts';
import AboutKe from './components/AboutKe';
import AboutTz from './components/AboutTz';

function App() {
  const [customers, setCustomers] = useState (JSON.parse(localStorage.getItem("customers")) || []);

  useEffect(() =>{
    localStorage.setItem("customers", JSON.stringify(customers));
  })


  return (
    <div className="App">
      <Header customers={customers} />
      <Routes>
        <Route path='/' element={<Main customers={customers} setCustomers={setCustomers}/>} ></Route>
        <Route path='contact' element={<Contacts />} ></Route>
        <Route path='about' element={<About />} >
          <Route path='ke' element={<AboutKe />} ></Route>
          <Route path='tz' element={<AboutTz />} ></Route>
          <Route path='*' element={<Navigate to='ke' />} ></Route>
        </Route>

        <Route path='*' element={<Navigate to='/' />} ></Route>
      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
