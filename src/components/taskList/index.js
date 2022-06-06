import React, { Component } from 'react'
import { connect } from "react-redux";

import TaskShow from '../taskShow'

import {completeds, uncompleteds, alls} from '../../redux/actions/taskActions'

//compic = 1;

function TaskList(props){

    console.log('compic', props.compic);

    // const [isCompic, setIsCompic] = React.useState(compic);

    // function completedTasks(){
    //     setIsCompic(2);
    // }
    const completedTasks = () => {
        props.completeds(props.compic)
    }
    const uncompletedTasks = () => {
        props.uncompleteds(props.compic)
    }
    const allTasks = () => {
        props.alls(props.compic)
    }

    return(
        <div>
            <button onClick={()=>{completedTasks()}}>{'Completed Tasks'}</button>
            <button onClick={()=>{uncompletedTasks()}}>{'Uncompleted Tasks'}</button>
            <button onClick={()=>{allTasks()}}>{'All Tasks'}</button>
            
            {/* for(let i=0; i<props.list.length; i++){
                props.compic===3 && !item.status
                ? <a key={index}><TaskShow item={item} index = {index}/></a>
                : props.compic===2 && item.status
                    ?<a key={index}><TaskShow item={item} index = {index}/></a>
                    :<a key={index}><TaskShow item={item} index = {index}/></a>
            } */}

            {props.list.map((item, index)=>{
                return(
                props.compic==3 && !item.status
                ? console.log('compic 3: ',item)//<a key={index}><TaskShow item={item} index = {index}/></a>
                : props.compic==2 && item.status
                    ?console.log('compic 2: ',item)//<a key={index}><TaskShow item={item} index = {index}/></a> 
                    :<a key={index}><TaskShow item={item} index = {index}/></a> 
                )
                
            })}
        </div>
    );
}

const mapDispatchToProps = {
    completeds,
    uncompleteds,
    alls
}

const mapStateToProps = (state) => {
    return {
        list: state.list,
        compic: state.compic
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
// class TaskList extends Component {

//     complic = 1;

//     completedTasks() {
//         this.complic = 2;
//         this.render();
//     }

//     uncompletedTasks() {
//         this.complic = 3;
//         this.render();
//     }
//     allTasks(){
//         this.compic = 1;
//         this.render();
//     }
//     render() {
//         return (
//             <div>
//                 {/* <table>
//                     <thead>
//                         <tr> */}
//                             <td><button onClick='completedTasks'>{'Completed Tasks'}</button></td>
//                             <td><button onClick='uncompletedTasks'>{'Uncompleted Tasks'}</button></td>
//                             <td><button onClick='allTasks'>{'All Tasks'}</button></td>
//                         {/* </tr>
//                     </thead>
//                     <tbody> */}
//                         {this.props.list.map((item, index) => {
                            
//                             return <tr key={index}>
//                                 <TaskShow 
//                                     item={item}
//                                 />
//                             </tr>
//                         })}
//                     {/* </tbody>
//                 </table> */}
//             </div>
//         )
//     }
// }