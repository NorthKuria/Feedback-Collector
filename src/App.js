import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import ContactIconLink from './components/shared/ContactIconLink'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
  const [feedback, setFeedback] = useState([])

  useEffect(() => {
    fetch('https://feedback-collector-api.herokuapp.com/FeedbackData')
      .then((res) => res.json())
      .then((data) => setFeedback(data))
  }, [])

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delee?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <div className="footer">
          <AboutIconLink />
          <ContactIconLink />
        </div>
      </div>
    </Router>
  )
}

export default App
