import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

class AddSubject extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            title: "",
            description: "",
            languages: []
        }
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

    /* get the title and description value onchnage  */
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    /* Add new subject to subjects array and save in localstorage*/
    handleSubmit(e) {
        e.preventDefault();
        const subject = {
            id: Date.now(),
            title: this.state.title,
            description: this.state.description,
            status: "inactive",
            count: 0
        };
        const check_subject = this.state.languages.some(subject => subject.title === this.state.title);
        if (check_subject) {
            e.preventDefault();
            toast.error("Duplicate entry! Title has already been taken.");
        } else {
            let new_ary = this.state.languages.push(subject) 
            this.setState({ languages: new_ary});
            localStorage.setItem("languages", JSON.stringify(this.state.languages));
            toast.success("Subject has been added successfully!")
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <div className="submit-form">
                <div>
                    <h4>Add new subject</h4>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                value={this.state.title}
                                onChange={this.handleChange}
                                name="title"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                required
                                value={this.state.description}
                                onChange={this.handleChange}
                                name="description" noValidate
                            />
                        </div>
                        <button className="btn btn-success">Submit</button>
                    </form>
                </div>

            </div>
        )
       
    }
}

export default AddSubject;