import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {GlobalProvider} from './context/GlobalState';
import PrivateRoute from './components/routing/PrivateRoute';
import PrivateScreen from './components/screens/PrivateScreen'; 
import LoginScreen from './components/screens/LoginScreen'; 
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen'; 
import ResetPasswordScreen from './components/screens/ResetPasswordScreen'; 
import RegisterScreen from './components/screens/RegisterScreen'; 
import TodoPage from './components/screens/TodoPage';
import TransPage from './components/screens/TransPage';
import PinPage from './components/screens/PinPage';
import FilePage from './components/screens/FilePage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <GlobalProvider>

    <Router>
  <div>
    <Switch>

      <PrivateRoute exact path="/" component={PrivateScreen}/>
      <PrivateRoute exact path="/todo" component={TodoPage}/>
      <PrivateRoute exact path="/trans" component={TransPage}/>
      <PrivateRoute exact path="/pins" component={PinPage}/>
      <PrivateRoute exact path="/files" component={FilePage}/>
      <Route exact path="/login" component={LoginScreen}/>

      <Route exact path="/register" component={RegisterScreen}/>
      <Route exact path="/forgotpassword" component={ForgotPasswordScreen}/>
      <Route path="/resetpassword/:resetToken" component={ResetPasswordScreen}/>

    </Switch>
  </div>
  </Router>
  </GlobalProvider>


  );
};


export default App;
