import React from 'react';
import '../App.css';
import { Books } from './books';
import axios from 'axios';

export class ViewBook extends React.Component {

    constructor() {
        super();

        this.RefreshData = this.RefreshData.bind(this);
    }

    // Books object
    state = {
        books: []
    };

    // Promise from server to get book data from server
    componentDidMount() {
        axios.get('http://localhost:4000/api/books')
            .then((response) => {
                this.setState({ books: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    // Refresh page
    RefreshData() {
        axios.get('http://localhost:4000/api/books')
            .then((response) => {
                this.setState({ books: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    // Passes book object into books component
    render() {
        return (
            <div className="cardBox">
                <h1>Book Library</h1>
                <Books books={this.state.books} RefreshData={this.RefreshData}></Books>
            </div>
        );
    }
}