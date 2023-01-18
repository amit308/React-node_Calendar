import React, { Fragment, useState,useEffect } from 'react';
import './App.css';
import EmployForm from './components/employForm';
import Calendar from './components/calendar';
import ShiftScheduler from './components/shiftscheduler';


function App() {
  const [users, setUsers] = useState([])

// Get employee list 
  const fetchData = () => {
      fetch("http://localhost:5000/api/Empdata/employees")
          .then(response => {
              return response.json()
          })
          .then(data => {
              setUsers(data)
          })
  }

  useEffect(() => {
      fetchData()
  }, [])

  // Post employee
  const postdatafcn = async(addEmployee)=> {
    console.log(addEmployee)

           await fetch(`http://localhost:5000/api/Empdata/createEmployee`, {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: addEmployee.username, email: addEmployee.email, phone: addEmployee.phone, wage: addEmployee.wage, role: addEmployee.role
                }),
            }
            );

            fetchData()
    }

    // delete employ
    const deleteData = async(id) => {
    
      await fetch(`http://localhost:5000/api/Empdata/employee/${id}`, {
        method: "DELETE",

    }
    );

    fetchData()
    }

  return (
    <Fragment>
      <section >
        <div>
          <div className='heading'>
            <h1 >Calender</h1>
          </div>
        </div>
      </section>
      <div>
        <Calendar />
        <EmployForm  users={users} postdatafcn={postdatafcn} deleteData={deleteData}/>
        <ShiftScheduler users={users}/>
      </div>
    </Fragment>
    
  );
}

export default App;