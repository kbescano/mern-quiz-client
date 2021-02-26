import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { quizCreateReducer, quizDeleteReducer, quizDetailsReducer, quizListReducer, quizUpdateReducer, saveScoreReducer } from './reducers/quizReducer'
import { userDeleteReducer, userDetailsReducer, userListReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer, userUpdateReducer } from './reducers/userReducer'


const reducer = combineReducers({
    quizList: quizListReducer,
    quizDetails: quizDetailsReducer,
    quizCreate: quizCreateReducer,
    quizDelete: quizDeleteReducer,
    quizUpdate: quizUpdateReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userUpdate: userUpdateReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    score: saveScoreReducer,
    
})


const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const scoreFromStorage = localStorage.getItem('score') ? JSON.parse(localStorage.getItem('score')) : []


const initialState = {
    score: { score: scoreFromStorage },
    userLogin: { userInfo: userInfoFromStorage }}

const middleware = [thunk]



const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store