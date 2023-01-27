
import './App.css';
import { Store } from './containers/Store';

function App({products}) {
  return (
    <div className="App">
      <Store products={products}/>
    </div>
  );
}

export default App;
