import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Home />
      </div>
  );
}

export default App;
