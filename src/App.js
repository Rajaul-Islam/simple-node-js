import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import NotFOund from './components/NotFound/NotFOund';
import ReviweItem from './components/ReviewItem/ReviweItem';
import OrderPlace from './components/OrderPlace/OrderPlace';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipping from './components/Shipping/Shipping';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          
          <Route exact path='/shop'>
            <Shop></Shop>
          </Route>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route exact path='/review'>
            <OrderReview>

            </OrderReview>
          </Route>
          <PrivateRoute exact path='/inventory'>
            <Inventory>

            </Inventory>
          </PrivateRoute>
          <PrivateRoute exact path='/placeOrder'>
            <OrderPlace></OrderPlace>
          </PrivateRoute>
          <PrivateRoute exact path='/shipping'>
          <Shipping></Shipping>
          </PrivateRoute>
          <Route exact path='/signin'>
         <SignIn></SignIn>
          </Route>
          <Route exact path='/register'>
          <Register></Register>
          </Route>
        
          <Route path='*'>
            <NotFOund></NotFOund>
          </Route>

        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
