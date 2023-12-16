import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [customers, setCustomers] = useState ([
    {id: 1234, name: 'James Atoti', age: 26, employed: false},
    {id : 1245, name: 'Abraham Lincolin', age: 44, employed: true},
    {id: 6985, name: 'Jane Adongo', age:31, employed: true},
    {id: 6987, name: 'Fatma Mburu', age:19, employed: false},
]);


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
