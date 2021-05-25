import React from 'react';

function CoursesList(props) {
    return props.courses.map(function(course) {
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
            h4 > { course.title } < /h4>  {} < /
            span > <
            span className = "accessorieslist" > < strong > { course.author } < /strong></span >
            <
            br / >

            <
            br / > {
                /* {course.rating ? (
                        //  <Onstatus />
                      ) : (
                        // <Offstatus />
                      )} */
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

// CoursesList() {
//   return courses.map(function(course) {
//     return (
//       <div key={course.id} className="courselist"   onClick={() => handleClick(course.title)}>
//         <div className="courselist1" >
//         <span>
//           <h4>{course.title}</h4>
//         </span>
//         <span className="accessorieslist"> <strong>{course.author}</strong></span>
//         <br/>

//         <br/>
//         {course.rating ? (
//          <Onstatus />
//       ) : (
//         <Offstatus />
//       )}
//       <br/><br/><br/>
//        <img className="courselist3" src={course.url} />
//       </div>




//       </div>



//     );
//   }); 
// }

function handleClick(msg) {

    alert(msg);

}



}

export default CoursesList;