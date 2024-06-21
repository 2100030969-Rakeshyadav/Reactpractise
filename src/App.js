

import './App.css';
import Header from './Header';
import Products from './Products';
import { useState } from 'react';










function App() {
  function doSomething(data)
  {
    console.log("hello iam a click"+data)
  }


return (
<div className="App">

 
 <h3>Name</h3>
 <input type='text' placeholder='Enter Name'/>


   <Header/>
   <Products/>

   <button className='btn' onClick={(event)=>{
    console.log(event)
doSomething("Rakesh")

   }}>Click</button> 
   </div>
  );
}

export default App;
