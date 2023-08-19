import logo from './logo.svg';
import './App.css';
import CounterComponent from './components/counter'
import ConditionalComponent from './components/conditionalcomponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bunnu hi hai tunnu
        </p>
       < CounterComponent/>
       <ConditionalComponent/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
