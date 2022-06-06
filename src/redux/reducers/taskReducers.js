export const taskReducer = (state, action) => {
    var list = JSON.parse(localStorage.getItem('tasks'))
    var compic = 1;
    switch (action.type) {
        case 'INSERT':
            list.push(action.payload)
            localStorage.setItem('tasks', JSON.stringify(list))
            return { list, currentIndex: -1 , compic}
        case 'UPDATE':
            list[state.currentIndex] = action.payload
            localStorage.setItem('tasks', JSON.stringify(list))
            return { list, currentIndex: -1 , compic}

        case 'UPDATE-INDEX':
            return { list, currentIndex: action.payload, compic}

        case 'UPDATE-STATUS':
            list[action.payload].status = !list[action.payload].status;
            localStorage.setItem('tasks', JSON.stringify(list))
            return { list, currentIndex: -1 , compic}

        case 'DELETE':
            list.splice(action.payload, 1)
            localStorage.setItem('tasks', JSON.stringify(list))
            return { list, currentIndex: -1 , compic}
        case 'COMPLETEDS':
            compic = 2;
            return { list, currentIndex: -1 , compic}
        case 'UNCOMPLETEDS':
            compic = 3;
            return { list, currentIndex: -1 , compic}
        case 'ALLS':
            compic = 1;
            return { list, currentIndex: -1 , compic}
        default:
            return state;
    }

}
export default taskReducer;