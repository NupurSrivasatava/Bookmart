import React from "react"; // Capital 'R' required
import Child from "./Child";

const Parent = () => {
    function BooksData() {
        return {
            id: 1,
            name: "Titanic",
            author: "James Cameron"
        };
    }

    const data = BooksData();

    return (
        <div className="header">
            <h1>This is my Parent Component</h1>
            <Child book={data} />
        </div>
    );
};

export default Parent;
