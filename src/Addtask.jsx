import React, { useState } from "react";
import "./Todo.css";

function AddTask({ additem }) {
    const [value, setvalue] = useState("");

    const addtask = () => {
        additem(value);
        setvalue("");
    };
    return (
        <div className="input-container"> 
            <input
                type="text"
                className="input"
                placeholder="NEW TASK"
                onChange={(e) => {
                    setvalue(e.target.value);
                }}
                value={value}
            />
            <button className="add-btn" onClick={addtask}>
                {" "}
                ADD
            </button>
        </div>
    );
}

export default AddTask;
