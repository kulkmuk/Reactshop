import logo from './logo.svg';

//import logo from './images/logo.svg';
import './App.css';
// import CoursesList from './CoursesList';


const courses = [{
        id: 1,
        title: "Left Shopping Window",
        author: "12 Accessories",
        hours_video: 40.5,
        number_of_lectures: 490,
        rating: true,
        //url: "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back06.jpg",
    },
    {
        id: 2,
        title: "Right Shopping Window",
        author: "9 Accessories",
        hours_video: 47.5,
        number_of_lectures: 488,
        rating: true,
        //url: "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg"
    },
    {
        id: 3,
        title: "Front Entrance",
        author: "12 Accessories",
        hours_video: 39,
        number_of_lectures: 200,
        rating: true,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbAX--rk9POwSJGzEaFVTap3RMDq7BRg7sbQ&usqp=CAU"
    },
    {
        id: 4,
        title: "Shoe Wall",
        author: "20 Accessories",
        hours_video: 39,
        number_of_lectures: 200,
        rating: false,
        //url: "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back07.jpg"
    },
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


function App() {
    return ( <
        div >
        <
        div className = "mainheader" >

        <
        hr / >
        <
        CoursesList / >
        <
        /div> <
        Sidetitle / >

        <
        /div>
    );
}

function Sidetitle(props) {
    return <div className = "sideheader" > < /div>;
}

function Onstatus(props) {
    return <button type = "button"
    className = "buttonliston" > ON < /button>;
}

function Offstatus(props) {
    return <button type = "button"
    className = "buttonlistoff" > OFF < /button>;
}

function handleClick(msg) {

    alert(msg);

}

function CoursesList() {
    return courses.map(function(course) {
        return ( <
            div key = { course.id }
            className = "courselist"
            onClick = {
                () => handleClick(course.title)
            } >
            <
            div className = "courselist1" >
            <
            span >
            <
            h4 > { course.title } < /h4> < /
            span > <
            span className = "accessorieslist" > < strong > { course.author } < /strong></span >
            <
            br / >

            <
            br / > {
                course.rating ? ( <
                    Onstatus / >
                ) : ( <
                    Offstatus / >
                )
            } <
            br / > < br / > < br / >
            <
            img className = "courselist3"
            src = { course.url }
            /> < /
            div >



            <
            /div>



        );
    });
}

export default App;