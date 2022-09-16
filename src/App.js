import './App.css';
import Jobs from './data.json';
import JobListing from './JobListing';

function App() {
  return (
    <div className="App">
      <JobListing jobs={Jobs} />
   </div>
  );
}

export default App;
