import {FaQuestion} from 'react-icons/fa';
import { Link } from 'react-router-dom';
function AboutIconLink() {
  return (
    <div className>
        <Link to='/about'>
        <FaQuestion size={30}>About</FaQuestion>
        </Link>
    
        
    </div>
  )
}

export default AboutIconLink
