import './App.css';
import Home from './Home'
import Procedures from './Procedures'
import Contact from './Contact'
import Procedure from './Procedure'
//! we get <Router /> component,  <Route /> components, <Link /> components
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function App() {
  return (
    <Router>

    <nav className='nav'>
      <Link to='/'>Home</Link>
      <Link to='/procedures'>Procedures</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/procedures/cavity'>Cavity</Link>
    </nav>
      
        <Route exact path='/' component={Home} />
        <Route exact path='/procedures' component={Procedures} />
        <Route path='/procedures/:type' render={(props) => {
            return <Procedure {...props} />
          }} />
        <Route path='/contact' component={Contact} />
    </Router>
      
  );
}

export default App;
