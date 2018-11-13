const defaultState = {
    focused: false
}

export default  (state = defaultState, action) =>{
    const type = action.type;
    switch (type) {
        case "handle_focus":
            console.log("handle_focus");
            return {focused:true}
        default:
            return defaultState
    }
}

