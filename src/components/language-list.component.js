import React, { Component } from 'react';
import NavBar from "./nav-bar.component";
import { faSort, faEye, faEdit, faTrash  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class LanguageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: "asc",
            languages: []
        }
    }
    /* local storage get items */
    componentDidMount() {
        {/* localStorage.removeItem("languages"); 
        */ }
        let itemsList = localStorage.getItem('languages')
        if (itemsList) {
            this.setState({
                languages: JSON.parse(itemsList)
            })
        }
    }

    /* local storage set items */
    componentDidUpdate() {
       
        /*  localStorage.clear(); localStorage.removeItem("languages"); */
        localStorage.setItem('languages', JSON.stringify(this.state.languages));
    }

    /* change status active and inactive */
    updateStatus(id, status) {
        const languages = this.state.languages
        alert(JSON.stringify(languages));
        languages.map(item => {
            if (item.id === id) {
                status == "inactive" ? item.status = "active" : item.status = "inactive"
            }
        })
        this.setState({ languages: languages });
    }

    sortTable(order) {
        const languages = this.state.languages
        order = 'asc' ? 'desc' : 'asc'
        languages.sort(function (a, b) {
            if (order = 'asc') {
                return -1;
            }

            if (order = 'desc') {
                return 1;
            }

        })
        this.setState({ languages: languages, order: order });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <NavBar />
                    <table className="fixed" >
                        <thead>
                            <tr>
                                <th className="col-1" >Subject
                                     <button onClick={() => { this.sortTable(this.state.order) }} >Sort</button> 
                                    <span className="sortableColumn">
                                        <FontAwesomeIcon icon={faSort} />
                                    </span>
                                </th>
                                <th className="col-2">Description</th>
                                <th className="col-3">Status</th>
                                <th className="col-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.languages.map((item, index) => (
                                <tr className="noBorder" key={index}>
                                    <td className="col-1">{item.title}</td>
                                    <td className="col-2" title={item.description}>{item.description}</td>
                                    <td className="col-3">
                                        <button className={item.status} onClick={() => { this.updateStatus(item.id, item.status) }}>{item.status}</button></td>
                                    <td className="col-4">
                                        <a href="#" className="view" title="View" data-toggle="tooltip"> <FontAwesomeIcon icon={faEye} />
                                        </a>
                                        <a href="#" className="edit" title="Edit" data-toggle="tooltip"> <FontAwesomeIcon icon={faEdit} /></a>
                                        <a href="#" className="delete" title="Delete" data-toggle="tooltip"> <FontAwesomeIcon icon={faTrash} /></a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default LanguageList;