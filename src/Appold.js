import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import Sidetitle from './Sidetitle';


import CoursesList from './CoursesList';


const courses = [
  {
    id: 1,
    //title: "Left Shopping Window",
    title: "Kid's Outlet",
    author: "12 Accessories",
    hours_video: 40.5,
    number_of_lectures: 490,
    rating:true,
    url: "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back06.jpg",
  },
  {
    id: 2,
    //title: "Right Shopping Window",
    title: "Food Court",
    author: "9 Accessories",
    hours_video: 47.5,
    number_of_lectures: 488,
    rating:true,
    url: "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg"
  },
  {
    id: 3,
    //title: "Front Entrance",
    title: "Groceries Outlet",
    author: "12 Accessories",
    hours_video: 39,
    number_of_lectures: 200,
    rating:true,
    url: "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back04.jpg"
  },
  {
    id: 3,
    title: "Shoe Outlet",
    author: "20 Accessories",
    hours_video: 39,
    number_of_lectures: 200,
    rating: false,
    url: "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back07.jpg"
  }
];

// function App() {
//   return (
//     <div>
//       <h1>List of Courses</h1>
//       <hr />
//       <CoursesList courses={courses} />
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        message: "Default Content"
    }
  } 

updateContent = () => {
    this.setState({ message: "Updated Content!"});
}
render() {
  return (
  
    <div>
    <div className="mainheader">
     
      <hr />
      <CoursesList />
    </div>
     <Sidetitle/>
    
    </div>
  );
}

//  Sidetitle(props) {
//   return <div className="sideheader" > <h1>Sideheader</h1> </div>;
// }

//  Onstatus(props) {
//   return <button type="button"  className="buttonliston" >ON</button>;
// }

//  Offstatus(props) {
//   return <button type="button"  className="buttonlistoff">OFF</button>;
// }

//  handleClick(msg) {
  
//   alert(msg);
  
// }

 
}

export default App;
