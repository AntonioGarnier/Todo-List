import {
    ADD_NEW_TASK,
} from '../../constants'


const addTaskToFirebase = store => next => action => {
    switch (action.type) {
        case ADD_NEW_TASK:
            return
        default
    }    
  }

export default addTaskToFirebase