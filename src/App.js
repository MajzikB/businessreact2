import Login from './Login';
import MTable from './components/MTable';
import { Table } from './eTable';
import Calendar from './Calendar';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Route exact path="/" component={Login} />
      <Route exact path="/MTable" component={MTable} />
      <Route exact path="/eTable" component={Table} />
      <Route exact path="/calendar" component={Calendar} />
    </div>
  );
}

export default App;
