import React from 'react'
import { connect } from "react-redux";
import {updateIndex, updateStatus, Delete} from '../../redux/actions/taskActions'

function TaskShow(props){
    
    const handleComplete = (index) => {
        props.updateStatus(index)
    }

    const handleEdit = (index) => {
        props.updateIndex(index)
    }

    const handleDelete = (index) => {
        props.Delete(index)
    }

    return(
        <div>
            {/* <input onClick={() => {handleComplete(props.index)}} type={'checkbox'} checked={!props.item.status}/> */}
            <button onClick={() => {handleComplete(props.index)}}>{props.item.status? 'completed':'uncompleted'}</button>
            {props.item.status? props.item.text: <strike> {props.item.text} </strike>}
            <button onClick={() => handleEdit(props.index)}>Edit</button>
            <button onClick={() => handleDelete(props.index)}>Delete</button>
        </div>
    );
}

const mapDispatchToProps = {
    updateStatus,
    updateIndex,
    Delete
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         updateTaskStatus: dispatch.updateStatus,
//         updateTaskIndex: dispatch.updateIndex,
//         deleteTask: dispatch.Delete
//     }
// }

export default connect(null, mapDispatchToProps)(TaskShow)