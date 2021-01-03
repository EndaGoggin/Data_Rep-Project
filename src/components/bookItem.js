import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class BookItem extends React.Component {

    constructor() {
        super();

        this.DeleteBook = this.DeleteBook.bind(this);
    }

    // Delete Book function
    DeleteBook(e) {
        // Prevents calling without wanting it to
        e.preventDefault();
        console.log("Delete " + this.props.book._id);
        // Call delete with ID
        axios.delete("http://localhost:4000/api/books/" + this.props.book._id)
            .then(() => {
                this.props.RefreshData();
            })
            .catch();
    }

    // Display book data pased from books component
    // Used Card from Bootstrap
    render() {
        return (
            <div >
                <Card className="cardTiles">
                    <Card.Header>{this.props.book.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.book.Cover} width="200" height="200"></img>
                            <footer>
                                {"Author: " + this.props.book.Author}
                                <br></br> 
                                {"Genre: " + this.props.book.Genre}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/updateBook/" + this.props.book._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteBook} >Delete</Button>
                </Card>
            </div>
        );
    }
}