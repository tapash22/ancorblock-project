import './App.css';
import AppRouter from './router/router';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      {/* using store into the provider */}
      <Provider>
        <AppRouter />
      </Provider>

    </div>
  );
}

export default App;
