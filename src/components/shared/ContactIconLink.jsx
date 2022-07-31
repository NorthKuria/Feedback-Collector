import { FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function ContactIconLink() {
  return (
    <div className="about-link">
      <Link to="/contact">
        <FaEnvelope size={30} />
      </Link>
    </div>
  )
}

export default ContactIconLink
