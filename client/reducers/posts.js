//reducers takes in 2 thing and returns the updated copy of the store with
//changes asked by the action
//1.action
//2.copy of current store

function posts(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            //returns a updtaed state
            const i = action.index;
            return [
                ...state.slice(0, i),
                { ...state[i], likes: state[i].likes + 1 },
                ...state.slice(i + 1)
            ]
        default:
            return state;
    }

}

export default posts;