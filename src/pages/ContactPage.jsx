import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function ContactPage() {
  return (
    <Card>
      <div className="about">
        <h1>Get in touch with us</h1>
        <p>
          For inquiries or collaboration, reach us using any of the links below.
        </p>
        <p>twitter</p>

        <p>
          <Link to="/">Back to home</Link>
        </p>
      </div>
    </Card>
  )
}

export default ContactPage
