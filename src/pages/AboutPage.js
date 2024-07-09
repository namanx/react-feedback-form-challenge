import { Card } from "../components/shared/Card"
import { Link } from "react-router-dom"
function AboutPage() {
  return (
<Card reverse={true}>
  <div className="container">
    <h1>This is the About Page</h1>

    <Card>
      This project is about getting user feedback and using react js to set states 
      This projects helps the developer understand the concepts of React.

      <h3>Here is the link to Home Page </h3>
      <Link to="/">Home</Link>
    </Card>
  </div>
</Card>
  )
}

export default AboutPage
