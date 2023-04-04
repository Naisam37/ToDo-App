import React from "react";

function ListTask({ task, index, removeTask }) {
    return (
        <div className="list-class">
            {task.title}
            <button
                className="dlt-btn"
                onClick={() => {
                    removeTask(index);
                }}
            >
                DELETE
            </button>   
        </div>
    );
}

export default ListTask;
