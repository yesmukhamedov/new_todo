import React from "react";
import 'semantic-ui-css/semantic.min.css'

import TaskList from "../components/taskList";
import TaskForm from "../components/taskForm";

function Home(){
    return(
        <div>
            <h3>To Do List</h3>
            <div>
                <TaskList />
            </div>
            <div>
                <TaskForm />
            </div>
        </div>
    );
}

export default Home;