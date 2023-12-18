import { useEffect, useState } from 'react';
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
      <>
      <Header customers={customers} />
      <Main customers={customers} setCustomers={setCustomers}/>
      <Footer />
      
      </>

    </div>
  );
}

export default App;
