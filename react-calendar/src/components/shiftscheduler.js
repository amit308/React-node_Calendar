import React, { useState } from 'react';

function ShiftScheduler(props) {
    console.log("hii")
    const {users} =props;
    const [selectedEmployee, setSelectedEmployee] = useState('');
    const [selectedShift, setSelectedShift] = useState('');

   
    //const employees = records
    const shifts = ['Morning shift (8am - 2pm)', 'Afternoon shift (2pm - 8pm', 'Evening shift (8pm - 8am)'];


    const handleEmployeeSelect = event => {
        setSelectedEmployee(event.target.value);
    };

    const handleShiftSelect = event => {
        setSelectedShift(event.target.value);
    };

    const handleSave = () => {
        
        alert(`Assigned ${selectedShift} to ${selectedEmployee}`);
        setSelectedEmployee('Select Employe');
        setSelectedShift('none')
    };

    return (
        <div>

            <label>
                Select Employee:

                {<select value={selectedEmployee} onChange={handleEmployeeSelect}>
                    <option> Select Employee </option>

                    {users.map((user, i) => (
                        <option key={user+i} value={user.username}>
                            {user.username}
                        </option>
                    ))}
                </select>}
            </label>

            <br />
            <label>
                Select Shift:
                {shifts.map((shift, index) => (
                    <div key={index}>
                        <input
                            type="radio"
                            id={shift}
                            value={shift}
                            checked={selectedShift === shift}
                            onChange={handleShiftSelect}
                        />
                        <label htmlFor={shift}>{shift}</label>
                    </div>
                ))}
            </label>
            <br />
            <button disabled={!selectedEmployee || !selectedShift} onClick={handleSave}>
                Save
            </button>
        </div>



    );
}
export default ShiftScheduler;


