import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from "../../redux/actions/taskActions"
import { bindActionCreators } from "redux";

class TaskForm extends Component {

    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if (this.props.currentIndex == -1)
            return {
                text: '',
                status: false
            }
        else
            return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length) {
            this.setState({ ...this.returnStateObject() })
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.props.currentIndex == -1)
            this.props.insertTask(this.state)
        else
            this.props.updateTask(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} autoComplete="off">
{/*  */}
                        < input name="text" placeholder="Write task" onChange={this.handleInputChange} value={this.state.text} />
                        <button type="submit" disabled={this.state.text? false:true}>Submit</button>
                   
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        insertTask: actions.insert,
        updateTask: actions.update
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)