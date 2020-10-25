import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="top-bar">
                    <form className="example">
                        <input type="text" placeholder="Search by subject" name="search" />
                        <button type="submit">Search</button>
                    </form>
                </div>

                <div className="top-bar add-sub">
                    <Link to={"/add"} className="nav-link">Add New</Link>
                </div>

            </div>

        );
    }
}

export default NavBar;