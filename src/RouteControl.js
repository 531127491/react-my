
/**
 * 路由控制
 */
import  { Component } from "react";
import { createBrowserHistory } from "history";
import MainComponent from './MainPage';
import {CarouseComponent} from './StoreManager/componentManager';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

  class RouterComponten extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "请登录,杨菊!"
        }
    }
    render(){
        return(
            <Router history={createBrowserHistory()}>
                <Switch>
                    <Route exact path="/" component={MainComponent}/>
                    <Route path="/home" component={CarouseComponent} />
                     
                </Switch>
            </Router>
        )
    }  
  }

  export default RouterComponten;