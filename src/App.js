import { BrowserRouter as Router, Route} from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import LoginScreen from './pages/LoginScreen'
import RegisterScreen from './pages/RegisterScreen'
import Quiz from './pages/Quiz'
import Scores from './pages/Scores'
import './styles/main.css'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import EndScreen from './pages/EndScreen'
import CreateQuiz from './pages/CreateQuiz'
import Quizlist from './pages/Quizlist'
import Footer from './components/Footer'
import UpdateQuiz from './pages/UpdateQuiz'
import Userlist from './pages/Userlist'
import UserEdit from './pages/UserEdit'

const App = () => {

  toast.configure()

  return (
    <Router>
      <Route path='/' component={HomeScreen} exact/>
      <Route path='/quiz' component={Quiz} exact/>
      <Route path='/scores' component={Scores}/>
      <Route path='/end' component={EndScreen}/>
      <Route path='/login' component={LoginScreen}/>
      <Route path='/register' component={RegisterScreen}/>
      <Route path='/admin/create' component={CreateQuiz} exact/>
      <Route path='/admin/quizlist' component={Quizlist} exact/>
      <Route path='/admin/quiz/:id/edit' component={UpdateQuiz}/>
      <Route path='/admin/userlist' component={Userlist}/>
      <Route path='/admin/user/:id/edit' component={UserEdit} />
      <Footer/>
    </Router>
  )
}

export default App;
