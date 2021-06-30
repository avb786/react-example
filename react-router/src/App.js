import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
        <Route path="/welcome" component={Welcome} />
        <Route  path="/products" exact component={Products} />
        <Route  path="/products/:productId" component={ProductDetail} />

        </Switch>

      </main>

    </div>
  );
}

export default App;
