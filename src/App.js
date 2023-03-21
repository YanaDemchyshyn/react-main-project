import './App.css';
import Weather from './Weather';


export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <Weather defaultCity="Kyiv"/>
        <footer>
          This project was coded by <a href='https://github.com/YanaDemchyshyn/react-main-project' target="blank">Yana Demchyshyn</a> and is open-sourced on GitHub
        </footer>
      </div>
    </div>
  );
}


