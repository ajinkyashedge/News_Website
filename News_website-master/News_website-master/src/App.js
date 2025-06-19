import { useContext } from 'react';
import { AppContext } from './context/Appcontext';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Signin from './component/Signin';
import Liked from './component/Liked';
import { ToastContainer } from 'react-toastify';
import './App.css'
import Notfound from './component/Notfound';

function App() {
  const { iserror } = useContext(AppContext);

  // Define the background style

  // const [darkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <div className={`App`}>
      <ToastContainer />
      {/* <div className="dark-mode-toggle">
        <input
          type="checkbox"
          id="dark-mode-checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="dark-mode-checkbox"></label>
      </div> */}
      {
        iserror ? <Notfound/> : (
          <div>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='signin' element={<Signin />} />
              <Route path='liked' element={<Liked />} />
            </Routes>
          </div>
        )
      }

    </div>
  );
}

export default App;
