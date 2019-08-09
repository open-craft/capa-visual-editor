import {SCORRING_TEMPTS_CHANGED, SCORRING_POINTS_CHANGED} from '../actions/action-types';
import { getScorringSettings } from '../../dataParser';


const {selectedAttemptsOption, selectedPointOption} = getScorringSettings();


let unknownAttempt, unknownPoint, initAttempt, initPoint;

const maxAttempts = 10;
const attemptsOptions = [...Array(maxAttempts).keys()].map(ind=>{
    // set selected value of attempts
    ind++;  // options will start from 1 and will end at 10
    if (+selectedAttemptsOption === ind ) {
        initAttempt = { id: ind, value: ind, label: ind };
    } else if (selectedAttemptsOption) {
        initAttempt = { 
            id: +selectedAttemptsOption, 
            value: +selectedAttemptsOption,
            label: selectedAttemptsOption 
        };
        if (+selectedAttemptsOption > maxAttempts) {
            unknownAttempt = initAttempt;
        }
    }

    return { id: ind, value: ind, label: ind};
});

const maxPoints = 10;
const pointsOptions = [...Array(maxPoints).keys()].map(ind=>{
    // set selected value of points
    ind++;  // options will start from 1 and will end at 10
    if (+selectedPointOption === ind ) {
        initPoint = { id: ind, value: ind, label: ind };
    } else if (selectedPointOption) {
        initPoint = {
            id: +selectedPointOption,
            value: +selectedPointOption,
            label: selectedPointOption
        };
        if (+selectedPointOption > maxPoints) {
            unknownPoint = initPoint;
        }
    }
    return { id: ind, value: ind, label: ind};
});

if (unknownAttempt) {
    attemptsOptions.push(unknownAttempt);
}

if (unknownPoint) {
    pointsOptions.push(unknownPoint);
}




const initialState = {
    attemptsOptions: attemptsOptions,
    pointsOptions: pointsOptions,
    selectedAttemptsOption: initAttempt,
    selectedPointOption: initPoint
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
                attemptsOptions: state.attemptsOptions.map(tempt => {
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
                selectedAttemptsOption: selectedTempt
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
