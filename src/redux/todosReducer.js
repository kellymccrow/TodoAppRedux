// var removeAction = {
//     type = 'REMOVE_TODO',
//     payload: 4
// }

var initialState = [
    {
        id:1,
        content: 'Ring Peter',
        priority: 'Important'
    },
    {
        id:2,
        content: 'Water plants',
        priority: 'Urgent'
    },
    {
        id:3,
        content: 'Get milk',
        priority: 'Can wait'
    }
]

//Create todosReducer - IMMUTABLE
function todosReducer(state = initialState,action){

    if(action.type == 'ADD_TODO'){
        return [...state, action.payload]
    }else if(action.type == 'REMOVE_TODO'){
        var id = action.payload
        return state.filter((todo) => {
            return todo.id !== id;
          })
    }else{
        return state
    }
}

export default todosReducer;