import React from 'react'
import {Link} from "react-router-dom"
import Card from "../shared/Card"
function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this Project </h1>
            <p>This is React app to Leave feedback for a product or Service</p>
            <p>Version 1.0.0</p>
            <p>
                <Link to="/">Back to Home Page</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage