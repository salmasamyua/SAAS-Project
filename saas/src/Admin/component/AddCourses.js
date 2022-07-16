import React, {useState} from 'react';
import '../CSS/admin.css';

export default function AddCourses() {
  window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector("#name").style.display = "none";
      document.querySelector("#email").style.display = "none";
      document.querySelector("#profile").style.cssText = `
                padding: 10px;
                height: 100px;
                background-image: none;
                background-color: #064B68;
                z-index: 2;
                `;
      document.querySelector("#profilePhoto").style.cssText = `
                width: 70px;
                height: 70px; 
                `;
      document.querySelector("header").style.marginBottom = "150px";
      document.querySelector("#addNewCourses").style.marginTop = "-150px";
    }
  }; 

  const userjwt = localStorage['token'];
  
  const [courseId, setCourseId] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseNameArabic, setCourseNameArabic] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("1");
  const [totalHour, setTotalHour] = useState("");
  const [totalDegree, setTotalDegree] = useState("");
  const [lecturerId, setLecturerId] = useState("");

  const handleAddCourse = async (e) => {
    e.preventDefault();
    console.log(courseId, courseName, courseNameArabic, category, level, totalHour, totalDegree, lecturerId)
    try {
      let res = await fetch("http://saasproject-001-site1.itempurl.com/api/Courses/CreateNewCourse", {
        method: "POST",
        body: JSON.stringify({
          courseId: courseId,
          title: courseName,
          titleArb: courseNameArabic,
          grade: totalDegree,
          numOfHours: totalHour,
          categoryId: category,
          level: level,
          instructorId: lecturerId,
        }),
        headers:{
          Authorization : `Bearer ${userjwt}`,
           'Accept': 'application/json',
           'Content-Type': 'application/json'
        }
      });
      if (res.status === 200) {
        setCourseId("");
        setCourseName("");
        setCourseNameArabic("");
        setTotalDegree("");
        setTotalHour("");
        setCategory("");
        setLevel("");
        setLecturerId("")
        alert("Courses created successfully");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div>
        <header>
           <a href='/admin' id="profile">
               <div id="profilePhoto"></div>
               <h4 id="name">Mohamed Ahmed Ali</h4>
               <p id="email">MAA@ci.suez.edu.eg</p>
           </a>
       </header>
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
