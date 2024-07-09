
import Welcome from './Components/Welcome';
import UserForm from './Components/USerForm';
import Loading from './Components/Loading.js';
import { CounterProvider } from './Components/counterContext.js';
import CounterIncrement from './Components/CounterIncrement.js';
import CounterDisplay from './Components/CounterDisplay.js';
import Header from './Components/Header.js';
import './App.css';


function App() {
  return (
    <>
    <Header/>


    <Welcome/>
   
    <Loading/>
   
    
    <UserForm/>
    

    
<h1>
    <CounterProvider>

      <CounterIncrement />
      
      <CounterDisplay />
    
    </CounterProvider>
    </h1>
   
    </>
  );
}

export default App;
