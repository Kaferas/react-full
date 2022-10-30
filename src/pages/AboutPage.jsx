import React from 'react'
import Card from "../shared/Card"
function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this Project </h1>
            <p>This is React app to Leave feedback for a product or Service</p>
            <p>Version 1.0.0</p>
            <p>
                <a href="/">Back to Home Page</a>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage