import * as React from 'react';

const list = [
  {
    title: 'React',
    url: 'http://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'http://reduxjs.org',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const App = () =>{
  const handleChange = (event) => {
    console.log(event.target.value);
  }

return (
    <div>
      <h1>
        My hacker Stories
      </h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onchange={handleChange}/>

      <hr />

      <List />
    </div>
  );
};

const List = () =>{
  <ul>
    {list.map((item) => (
      <li key ={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>\
        <span>{item.points}</span>
      </li>
    ))}
  </ul>
};

export default App;

// list not displaying
// need to check soon
