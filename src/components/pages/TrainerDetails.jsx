import React, {useEffect, useState} from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useParams } from 'react-router-dom';
import TrainerList from '../TrainerList';


function TrainerDetails  () {
  
    let params = useParams();
    const [courses, setCourses] = useState();

    //fetch the course details

    useEffect(()=> {
        const getCourses = async() => {
            try{
                const url = `https://pre.bistrainer.com/v1/index.cfm?action=testapi.courses&id=${params.userId}`;
                const response = await fetch(url);
                const courseData = await response.json();
                setCourses(courseData);

            } catch(err){
                console.log(err);
            }
        } 
        getCourses()
    },[params])

    //render the courses table

  return (
      <div>
          <Navbar/>
          <h2 className="col-md-12 text-center mt-md-4">Course Details</h2>
          <hr />
          <TrainerList courses={courses}/>
          <Footer />
      </div>
  )
}

export default TrainerDetails;