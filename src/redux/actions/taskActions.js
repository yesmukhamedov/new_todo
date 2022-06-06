export const insert = data => {
    return {
        type: 'INSERT',
        payload: data
    }
}

export const update = data => {
    return {
        type: 'UPDATE',
        payload: data
    }

}

export const Delete = id => {
    return {
        type: 'DELETE',
        payload: id
    }

}

export const updateIndex = index => {
    return {
        type: 'UPDATE-INDEX',
        payload: index
    }

}

export const updateStatus = index => {
    return {
        type: 'UPDATE-STATUS',
        payload: index
    }

}

export const completeds = compic => {
    return {
        type: 'COMPLETEDS',
        payload: compic
    }
}

export const uncompleteds = compic => {
    return {
        type: 'UNCOMPLETEDS',
        payload: compic
    }
}

export const alls = compic => {
    return {
        type: 'ALLS',
        payload: compic
    }
}