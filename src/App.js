import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import AddSubject from "./components/add-subject.component";
import VoteList from "./components/vote-list.component";
import LanguageList from "./components/language-list.component";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="navbar-nav ml-auto ">
                        <li className="nav-item">
                            <Link to={"/subjects"} className="nav-link">
                                Subjects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/votes"} className="nav-link">
                                Voting
                            </Link>
                        </li>
                    </div>
                </nav>

                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/subjects"]} component={LanguageList} />
                        <Route exact path="/add" component={AddSubject} />
                        <Route exact path="/votes" component={VoteList} />
                    </Switch>
                </div>
                <ToastContainer
                    draggable={true}
                    transition={Zoom}
                    autoClose={5000}
                    position={"top-center"}
                    closeOnClick={true}
                    hideProgressBar={true}
                    pauseOnHover={true} />
            </div>
        );
    }
}

export default App;
