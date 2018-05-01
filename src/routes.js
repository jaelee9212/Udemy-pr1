import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './component/home';
import Layout from './hoc/Layout/layout';
import { getAll } from './Utility/server_api';
import SignIn from './component/SignIn/signIn';
import Update from './component/update';

class Routes extends Component {
    state = {
        items:[]
    }
    
    componentWillMount () {
        getAll()
        .then((items) => {
            console.log("item"+ items);
            this.setState({
                items 
            })
        })
    }

    render(){
        return(
                <Switch>
                    <Route path="/signIn" component={SignIn}/>
                    <Route path="/update" component={Update}/>
                    <Route path ="/" render={()=>(<Home items={this.state.items}/>)}/>
                </Switch>
        )
    }
}

export default Routes;