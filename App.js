import './App.css';
import About from './Components/About';
import Head2 from './Components/Head2';
import Heading from './Components/Heading';
import Intouch from './Components/Intouch';
import Join from './Components/Join';
import Navbar from './Components/Navbar';
import Service from './Components/Service';

function App() {
  return (
    <>
   <Navbar></Navbar>
   <Heading></Heading>
   <Head2></Head2>
   <Service></Service>
   <About></About>
   <Join></Join>
   <Intouch></Intouch>
   </>
  );
}

export default App;
