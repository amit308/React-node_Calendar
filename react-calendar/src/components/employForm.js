import React, { useState, Fragment} from 'react';
import { Trash3 } from 'react-bootstrap-icons';

const EmployForm = (props) => {
    
    // const [newuserdata,setNewuserdata]=useState([])
    // let updateduser=[]
    const { users,postdatafcn,deleteData} = props
    // updateduser=users
   
    const [showForm, setShowForm] = useState(false);
    const [addEmployee, setAddEmployee] = useState({
        username: "",
        email: "",
        phone: "",
        wage: "",
        role: ""
    });

    const handleInput = (e) => {
        const { value, name } = e.target

        setAddEmployee({ ...addEmployee, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const setdata=()=>postdatafcn(addEmployee)
        setdata();
        setAddEmployee({
            username: "",
            email: "",
            phone: "",
            wage: "",
            role: ""
        });
    }
    //     fetch('api/Emdata/createEmployee')
    //         .then((response) => response.json())
    //     const postdatafcn = async () => {
    //         const response = await fetch(`http://localhost:5000/api/Empdata/createEmployee`, {
    //             method: "POST",

    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 username: addEmployee.username, email: addEmployee.email, phone: addEmployee.phone, wage: addEmployee.wage, role: addEmployee.role
    //             }),
    //         });
    //              updateduser=[...updateduser,{
    //             username: addEmployee.username, email: addEmployee.email, phone: addEmployee.phone, wage: addEmployee.wage, role: addEmployee.role
    //         }]
    //              setNewuserdata(updateduser)
    //         const json = await response.json();
    //         console.log(json)
    //     }

    //     postdatafcn()
    
        
    //     // function refreshPage() {
    //     //     window.location.reload(false);
    //     //   }
    //     //   refreshPage()
    // }
    // useEffect(() => {
    //     setNewuserdata(updateduser)
    // }, [updateduser])

    return (
        <>

            {!showForm && <button onClick={() => setShowForm(true)}>Add Employee</button>}
            {showForm && (
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Employee name</label>
                        <input type="text" autoComplete="off"
                            value={addEmployee.username}
                            onChange={handleInput}
                            name="username" id="username" />
                    </div>
                    <div>
                        <label htmlFor="email">email</label>
                        <input type="email" autoComplete="off"
                            value={addEmployee.email}
                            onChange={handleInput}
                            name="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="phone">phone</label>
                        <input type="number" autoComplete="off"
                            value={addEmployee.phone}
                            onChange={handleInput}
                            name="phone" id="phone" />
                    </div>
                    <div>
                        <label htmlFor="wage">Hourly Wage</label>
                        <input type="text" autoComplete="off"
                            value={addEmployee.wage}
                            onChange={handleInput}
                            name="wage" id="wage" />
                    </div>
                    <div>
                        <label htmlFor="role">Role</label>
                        <input type="text" autoComplete="off"
                            value={addEmployee.role}
                            onChange={handleInput}
                            name="role" id="role" />
                    </div>

                    <button type="submit" >Add employee</button>
                    <button type="submit" onClick={() => setShowForm(false)}>cancel</button>
                </form>
            )}
            <div>
                <table className="table mt-4">
                    <thead>

                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Wages</th>
                            <th scope="col">Role</th>
                            <th scope="col">Icon</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                         
                            <Fragment>
                        <tr>
                            <td key={user.id}>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                       
                            <td>{user.wage}</td>
                            <td>{user.role}</td>
                            <td><button onClick={() => deleteData(user._id)}><Trash3/></button></td>
                          
                        </tr>
                        </Fragment>
                        
                        ))}
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default EmployForm;

