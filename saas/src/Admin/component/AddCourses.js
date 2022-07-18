import axios from 'axios';
import React, {useState} from 'react';
import "../CSS/component.css";

export default function AddCourses() {

  const userjwt = localStorage['token'];
  
  const [courseId, setCourseId] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseNameArabic, setCourseNameArabic] = useState("");
  const [category, setCategory] = useState("SEN");
  const [level, setLevel] = useState("1");
  const [totalHour, setTotalHour] = useState("");
  const [totalDegree, setTotalDegree] = useState("");
  const [lecturerId, setLecturerId] = useState("");

  const handleAddCourse = async (e) => {
    e.preventDefault();
    //console.log(courseId, courseName, courseNameArabic, category, level, totalHour, totalDegree, lecturerId)
    axios({
      method: "POST",
      url: "http://saasproject-001-site1.itempurl.com/api/Courses/CreateNewCourse",
      data: {
          courseId: courseId,
          title: courseName,
          titleArb: courseNameArabic,
          grade: totalDegree,
          numOfHours: totalHour,
          categoryId: category,
          level: level,
          instructorId: lecturerId,
      },headers: {
          Authorization : `Bearer ${userjwt}`,
           'Accept': 'application/json',
           'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.status === 200) {
        alert("Courses created successfully");
      } else {
        console.log("Some error occured");
      }
    }).catch((err) => alert(err.response.data));
  };

  return (
    <div>
        <a href='/admin' id="profileHeader">
          <div id="profile"></div>
        </a>
       <section id="addNewCourses">
        <div className='container'>
            <a href='/admin'><i className="bi bi-arrow-left"></i> Add Course</a>
          <form action="" method="post">
            <label htmlFor="code">Enter course code:</label>
            <input value={courseId} onChange={(e) => setCourseId(e.target.value)} type="text" id="code" name="code" required />
            <label htmlFor="courseEnglish">Enter course name (English):</label>
            <input value={courseName} onChange={(e) => setCourseName(e.target.value)} type="text" id="courseEnglish" name="courseEnglish" required />
            <label htmlFor="nameArabic">Enter course name (Arabic):</label>
            <input value={courseNameArabic} onChange={(e) => setCourseNameArabic(e.target.value)} type="text" id="nameArabic" name="nameArabic" required />
            <label htmlFor="catCourse">choose the category of the course:</label>
            <select name="catCourse" id="catCourse" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="SEN">SEN</option>
              <option value="CSC">CSC</option>
              <option value="ISC">ISC</option>
              <option value="MAT">MAT</option>
              <option value="GEN">GEN</option>
              <option value="UNI">UNI</option>
            </select>
            <label htmlFor="levelCourse">choose the level of the course:</label>
            <select name="levelCourse" id="levelCourse" value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="1">Level 1</option>
              <option value="2">Level 2</option>
              <option value="3">Level 3</option>
              <option value="4">Level 4</option>
            </select>
            <label htmlFor="totalHour">Enter total hours of the course:</label>
            <input value={totalHour} onChange={(e) => setTotalHour(e.target.value)} type="number" id="totalHour" name="totalHour" />
            <label htmlFor="totalDegree">Enter total degree of the course:</label>
            <input value={totalDegree} onChange={(e) => setTotalDegree(e.target.value)} type="number" id="totalDegree" name="totalDegree" required />
            <label htmlFor="lecturerId">Enter lecturer ID:</label>
            <input value={lecturerId} onChange={(e) => setLecturerId(e.target.value)} type="text" id="lecturerId" name="lecturerId" required />
            <button type="button" id="addcourses" onClick={handleAddCourse}>Add</button>
          </form>
          </div>
       </section>
    </div>
  )
}
