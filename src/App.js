import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import { Login } from './Login';
import { Contact } from './Contact';
import {Provider} from 'react-redux'
import { store } from './Store';
import {Link , Route , BrowserRouter as Router , Routes} from "react-router-dom"


function App() {





  return (



    <div className="App">

      {/* redux */}



   <Provider store={store}>
    <Router>
      <Link to="/">home</Link> | 
      <Link to="/login">login</Link> | 
      <Link to="/contact">contact</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </Provider>
      


    </div>
  );
}

export default App;

