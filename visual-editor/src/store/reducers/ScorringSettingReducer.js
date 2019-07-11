import {SCORRING_TEMPTS_CHANGED, SCORRING_POINTS_CHANGED} from '../actions/action-types';

const initialState = {
    temptsOptions: [
        { id: 1, value: 'radio', label: '1' },
        { id: 2, value: 'select', label: '2' },
    ],
    pointsOptions: [
        { id: 1, value: 'radio', label: '1' },
        { id: 2, value: 'select', label: '2' },
    ],
    selectedTemptOption: { id: 1, value: 'radio', label: '1' },
    selectedPointOption: { id: 2, value: 'select', label: '2' }
};


const ScorringSettingReducer = function(state=initialState, action) {
    switch(action.type) {
        case SCORRING_TEMPTS_CHANGED:
            const selectedTempt = {
                id: action.id,
                value: action.value,
                label: action.label
            };
            return Object.assign({}, state, {
                temptsOptions: state.temptsOptions.map(tempt => {
                    if (tempt.id === action.id) {
                        return {
                            id: action.id,
                            value: action.value,
                            label: action.label
                        };
                    } else {
                        return tempt;
                    }
                }),
                selectedTemptOption: selectedTempt
            });
        case SCORRING_POINTS_CHANGED:
            const selectedPoint = {
                id: action.id,
                value: action.value,
                label: action.label
            };
            return Object.assign({}, state, {
                pointsOptions: state.pointsOptions.map(point => {
                    if (point.id === action.id) {
                        return {
                            id: action.id,
                            value: action.value,
                            label: action.label
                        };
                    } else {
                        return point;
                    }
                }),
                selectedPointOption: selectedPoint
            });
        default:
            return state;
    }
};

export default ScorringSettingReducer;
