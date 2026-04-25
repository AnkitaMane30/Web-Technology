import { useState } from "react";
function AddStudent({addStudent}){

    const [student, setStudent] = useState({
        name:"",
        age:"",
        email:"",
        course:""
    });

    const handleChanges = (e) =>{
        setStudent({...student, [e.target.name]:[e.target.value]})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!student.name || !student.age || !student.email || !student.course){
            alert("All Fields are required !!");
            return;
        }

        if(student.age <= 0){
            alert("Age must be Valid");
            return;
        }

        addStudent(student);
        alert("Student Added Successfully!");

        setStudent({
            name:"",
            age:"",
            email:"",
            course:""
        });
    };

    return(
        <>
            <div style={styles.container}>
                <div style={styles.formBox}>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Enter Name" value={student.name} onChange={handleChanges} style={styles.input}/>
                        <br/>

                        <input type="text" name="age" placeholder="Enter Age" value={student.age} onChange={handleChanges} style={styles.input}/>    
                        <br/>

                        <input type="text" name="email" placeholder="Enter Email" value={student.email} onChange={handleChanges} style={styles.input}/>
                        <br/>

                        <input type="text" name="course" placeholder="Enter course" value={student.course} onChange={handleChanges} style={styles.input}/>
                        <br/>

                        <button type="submit" style={styles.button}>Add Student</button>
                    </form>
                </div>
            </div>
        </>
    )
}

const styles = {
  container: {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e6f2ff",
    
  },
  formBox: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    width: "300px",
    textAlign: "center"
  },
  input: {
    width: "100%",
    padding: "5px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default AddStudent;