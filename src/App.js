import { BrowserRouter as Router } from 'react-router-dom'
import MainPage from './pages/main'
import Nav from './components/nav'
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Nav/>
      <MainPage/>
    </div>
  );
}

export default App;