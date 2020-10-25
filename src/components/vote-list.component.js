import React, { Component } from 'react';
import NavBar from "./nav-bar.component";

class VoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: []
        }
    }

    /*count increment*/
    updateCount(id, count) {
        const languages = this.state.languages;
        languages.map(item => {
            if (item.id === id) {
                item.count = item.count + 1;
            }
        })
        this.setState({ languages: languages });
    }

    /* local storage get items */
    componentDidMount() {
        let itemsList = localStorage.getItem('languages')
        if (itemsList) {
            this.setState({
                languages: JSON.parse(localStorage.getItem('languages'))
            })
        }
    }

    /* local storage set items */
    componentDidUpdate() {
        {/* localStorage.removeItem("languages"); 
        */ }
        localStorage.setItem('languages', JSON.stringify(this.state.languages));
    }

    render() {
        return (
            <div>
                <div className="container">
                    <NavBar />
                    <table className="fixed" >
                        <thead>
                            <tr>
                                <th className="col-2" >Language</th>
                                <th className="col-2">Count</th>
                                <th className="col-5">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.languages.filter(x => x.status === "active").map((item, index) => (
                                <tr className="noBorder" key={index}>
                                    <td className="col-2">{item.title}</td>
                                    <td className="col-2">{item.count}</td>
                                    <td className="col-5">
                                        <button className="voteBtn" onClick={() => { this.updateCount(item.id, item.count) }}>Click here to vote</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default VoteList;