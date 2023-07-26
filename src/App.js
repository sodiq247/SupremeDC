import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
// import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      {/* <Home /> */}
      <Dashboard />
      </div>
  );
}

export default App;
