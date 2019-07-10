const initialState = {
    multiAdvancedSettings: ""
};

const multiAdvancedSettings = function(state=initialState, action) {
    if (action.value !== undefined) {
        return {
            multiAdvancedSettings: action.value
        };
    }
    return state;
}

export default multiAdvancedSettings;
