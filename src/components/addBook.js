import React from 'react';
import '../App.css';
import axios from 'axios';

export class AddBook extends React.Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onChangeCover = this.onChangeCover.bind(this);
        this.state = {
            Title: '',
            Author: '',
            Genre: '',
            Cover: ''
        }
    }

    // Update state when value changes for Title
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    // Update state when value changes for Author
    onChangeAuthor(e) {
        this.setState({
            Author: e.target.value
        });
    }

    // Update state when value changes for Genre
    onChangeGenre(e) {
        this.setState({
            Genre: e.target.value
        });
    }

    // Update state when value changes for Cover
    onChangeCover(e) {
        this.setState({
            Cover: e.target.value
        });
    }

    // Stops button calling multiple times
    onSubmit(e) {
        e.preventDefault();
        alert("Book: " + this.state.Title + ", " + this.state.Author + ", " + this.state.Genre + ", " + this.state.Cover)

        // Passing to server
        const newBook = {
            Title: this.state.Title,
            Author: this.state.Author,
            Genre: this.state.Genre,
            Cover: this.state.Cover
        }
        axios.post('http://localhost:4000/api/books', newBook)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    // Output with styling for user 
    render() {
        return (
            <div className="bookCover">
                <div className='addBooksCard'>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Add Book Title</label>
                            <input type='text'
                                className='form-control'
                                value={this.state.Title}
                                onChange={this.onChangeTitle}></input>
                        </div>
                        <div className="form-group">
                            <label>Add Book Author</label>
                            <input type='text'
                                className='form-control'
                                value={this.state.Author}
                                onChange={this.onChangeAuthor}></input>
                        </div>
                        <div className='form-group'>
                            <label>Book Genre: </label>
                            <textarea type='text'
                                className='form-control'
                                value={this.state.Genre}
                                onChange={this.onChangeGenre}>
                            </textarea>
                        </div>
                        <div className='form-group'>
                            <label>Book Cover: </label>
                            <textarea type='text'
                                className='form-control'
                                value={this.state.Cover}
                                onChange={this.onChangeCover}>
                            </textarea>
                        </div>
                        <div className='form-group'>
                            <input type='submit'
                                value='Add Book to Library'
                                className="btn btn-primary">
                            </input>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}