import React from 'react';
import { BookItem } from './bookItem';

export class Books extends React.Component{

    // Pass books into bookItem component
    render(){
        return this.props.books.map((book)=>{
            return <BookItem book={book} RefreshData={this.props.RefreshData}></BookItem> // add reloadData
        })
    }
}