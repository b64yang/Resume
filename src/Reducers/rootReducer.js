import {combineReducers} from 'redux';
import experienceReducer from './experienceReducer';
import selectedExperienceReducer from './selectedExperienceReducer';
import projectsReducer from './projectsReducer';
import selectedProjectReducer from './selectedProjectReducer';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const rootReducers = combineReducers({
    selectedProject: selectedProjectReducer,
    projects: projectsReducer,
    selectedExperience: selectedExperienceReducer,
    experience: experienceReducer
    
});

export default rootReducers