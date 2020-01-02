import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route,Switch,Link, Router} from 'react-router-dom';
import HomePage from "./HomePage/homepage"
import PlayPage from "./PlayPage/playpage"
import UserPage from './UserPage/uaerpage';
import MoodPage from './MoodPage/moodpage';

class IndexPage extends React.Component{

    render(){
        return(
            <div>
                <BrowserRouter>
                    <Route path="/homepage" component={HomePage}></Route>
                    <Route path="/playpage" component={PlayPage}></Route>
                    <Route path="/userpage" component={UserPage}></Route>
                    <Route path="/moodpage" component={MoodPage}></Route>
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<IndexPage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
