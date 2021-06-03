import { Route } from 'react-router-dom';
import Products from './components/Products';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;

// domain.com/welcome => Welcome JS
// domain.com/products => Products JS