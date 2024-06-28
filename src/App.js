import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Title from './components/Title.js';
import  Navbar  from './components/Navbar.js';
import  Footer  from './components/Footer.js';
import  Form  from './components/Form.js';


function App() {

  return (
      <div>
      <Navbar/> 
      <Title/>
      <Form/>
      <Footer/>  
      </div>
  );
}

export default App;


