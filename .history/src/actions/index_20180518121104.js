import firebase from '../firebase'
import {
    ADDING_NEW_TASK,
    GOT_NEW_TASK,
    MARK_TASK_AS_DONE,
    REMOVE_ALL_TASKS,
} from '../constants'


const db = firebase.firestore()

export function addNewTask(task) {
    return (dispatch) => {
        dispatch({
            type: ADDING_NEW_TASK,
            payload: {
                task: () => {
                    const newTaskRef = db.collection('tasks').doc()
                    newTaskRef.set({
                        task,
                        done: false,
                        id: newTaskRef.id,
                    }).then(() => {
                        dispatch(gotNewTask(task, newTaskRef.id))
                    }).catch(error => (
                        // eslint-disable-next-line no-console
                        console.log('Error saving task in database: ', error)
                    ))
                },
            },
        })
    }
}

export function gotNewTask(task, taskId) {
    return {
        type: GOT_NEW_TASK,
        payload: {
            task,
            taskId,
        },
    }
}

export function markTaskAsDone(taskId) {
    return {
        type: MARK_TASK_AS_DONE,
        payload: {
            taskId,
        },
    }
}

export function removeAllTasks() {
    return {
        type: REMOVE_ALL_TASKS,
    }
}
