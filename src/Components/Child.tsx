import React from "react";

const Child = (props) => {
    return (
        <div className="header">
            <h1>This is my Child Component</h1>
            <h2>Book ID: {props.book.id}</h2>
            <h2>Book Name: {props.book.name}</h2>
        </div>
    );
};

export default Child;
