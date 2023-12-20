import { useEffect, useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

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
        {/* <Route path='/' element={} ></Route>
        <Route path='/' element={} ></Route>
        <Route path='/' element={} ></Route>
        <Route path='/' element={} ></Route>
        <Route path='/' element={} ></Route> */}
      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
