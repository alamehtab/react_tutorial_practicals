import { useState } from 'react'
import './App.css'
import Props_6 from './Components/Props_6'
import States_handeling_events_7 from './Components/States_handeling_events_7'
import About_10 from './Components/About_10'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Enhancing_State_12 from './Components/Enhancing_State_12'
import Alert_13 from './Components/Alert_13'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

function App() {

  // this is video numnber 12 cwh
  const [mode, setMode] = useState('light')
  const [toggleSwitchText, settoggleSwitchText] = useState('Enable darkMode')
  const toggleMode = (e) => {
    if (mode === 'dark') {
      setMode('light')
      settoggleSwitchText('Enable darkMode')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('light mode has been enabled', 'success')
      document.title = 'Learn React - Light Mode' // this will change the html title videoNo.15 cwh
    } else {
      setMode('dark')
      settoggleSwitchText('Enable lightMode')
      document.body.style.backgroundColor = '#212529'
      document.body.style.color = 'white'
      showAlert('dark mode has been enabled', 'dark')
      document.title = 'Learn React - Dark Mode' // this will change the html titile videoNo.15 cwh
    }
  }

  // this is video number 13
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    // now we will use settimeout to make alert go in some time of period;
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>

      {/* this is video number 6 cwh */}
      {/* <Props_6/> */}
      {/* <Props_6 name="MehtabEdits" abtus="Contact us" search="search something" /> */}


      {/* this is video number 12 cwh */}
      {/* <Enhancing_State_12 name="MehtabEdits" abtus="About Us" search="search something" mode={mode} toggleMode={toggleMode} toggleSwitchText={toggleSwitchText}/> */}

      {/* this is video number 13 cwh */}
      {/* <Alert_13 alert={alert}/> */}

      {/* this is video number 7 cwh */}
      {/* <div className="container my-3">
        <States_handeling_events_7 heading="Edit your text here..." showAlert={showAlert} mode={mode}/>
      </div> */}

      {/* this is video number 10 cwh */}
      {/* <div className="container my-3"> 
        <About_10 />
      </div> */}

      {/* this is video number 16 cwh */}
      <BrowserRouter>
        <Enhancing_State_12 name="MehtabEdits" abtus="About Us" search="search something" mode={mode} toggleMode={toggleMode} toggleSwitchText={toggleSwitchText} />
        <Routes>
          <Route exact path='/' element={<States_handeling_events_7 heading="Edit your text here..." showAlert={showAlert} mode={mode} />}></Route>

          <Route exact path='/About' element={<About_10 />}></Route>
        </Routes>
      </BrowserRouter>



      {/* <ToastContainer/> */}
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App
