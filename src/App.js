import React, { useState } from "react";
import "./styles.css";

var booksDatabase = {
  javascript: [
    {
      name: "Eloquent JavaScript",
      rating: "4.6/5"
    },
    {
      name: "You Don't Know JS",
      rating: "4.6/5"
    },
    {
      name: "Speaking JavaScript",
      rating: "4.7/5"
    },
    {
      name: "Professional JavaScript for Web Developers",
      rating: "4.5/5"
    },
    {
      name: "Learn JavaScript VISUALLY",
      rating: "4.2/5"
    },
    {
      name: " JavaScript and JQuery: Interactive Front-End Web Development",
      rating: "4.6/5"
    },
    {
      name: "The Principles of Object-Oriented JavaScript",
      rating: "4.6/5"
    },
    {
      name: " A Smarter Way to Learn JavaScript",
      rating: "4.6/5"
    },
    {
      name: "Javascript for Beginners",
      rating: "4.1/5"
    }
  ],
  python: [
    {
      name: "Fluent Python",
      rating: "4.6/5"
    },
    {
      name: "Python Crash Course",
      rating: "4.3/5"
    },
    {
      name: "Automate the Boring Stuff With Python",
      rating: "4.2/5"
    },
    {
      name: "Introduction to Machine Learning With Python",
      rating: "4.3/5"
    },
    {
      name: "Python Cookbook by David Beazley, Brian K. Jones",
      rating: "4.1/5"
    },
  ],
  business: [
    {
      name: "Never Split the Difference",
      rating: "4.3/5"
    },
    {
      name: "Loonshots",
      rating: "4/5"
    },
    {
      name: "Think and Grow Rich",
      rating: "4.1/5"
    },{
      name: "	How to Win Friends and Influence People",
      rating: "4.2/5"
    },{
      name: "The 7 Habits of Highly Effective People",
      rating: "4.1/5"
    },{
      name: "	Good to Great",
      rating: "4.1/5"
    }
  ]
};
var allbooks = Object.keys(booksDatabase);

export default function App() {
  var [bookList, setbookList] = useState("business");

  function bookclickHandler(item) {
    setbookList(item);
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="">
          📚
        </span>{" "}
        Good Books
      </h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite books. Select a genre to get started
      </p>
      <div>
        {allbooks.map((item) => {
          return <button onClick={() => bookclickHandler(item)}>{item}</button>;
        })}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {booksDatabase[bookList].map((obj) => (
            <li key={obj.name}>
              <div  style={{ fontSize: "larger", marginBottom: "0.2rem" }}>
                {obj.name}
              </div>
              <div style={{ fontSize: "smaller" }}>{obj.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
