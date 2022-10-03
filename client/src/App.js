import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import {Chat} from './pages/Chat'
import {Join} from './pages/Join'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Join/>}/>
        <Route path="/chat/:username" element={<Chat/>}/>
      </Routes>
    </Router>
  )
}

export default App;