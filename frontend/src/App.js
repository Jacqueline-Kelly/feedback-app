// import { propsToClassKey } from "@mui/styles"
import Header from "./components/Header"
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AbouticonLink'
import { FeedbackProvider } from './components/context/FeedbackContext'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"


const App = () => {

    return (
        <FeedbackProvider>
        <Router>
            <div>
            <Header />
          
            <Routes>
            <Route exact path='/' element={
                <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />    
                </>
            }>
            </Route>
            <Route path='/About' element={<AboutPage />} />  
            </Routes>
            <AboutIconLink/>
            </div>
        </Router>
        </FeedbackProvider>
    )
}
  

export default App 