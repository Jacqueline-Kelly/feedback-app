import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage () {
    return (
        <div className="about">
            <Card>
            <h1>About this projecct</h1>
            <p>hi ther</p>
            <p>version 1.1.0</p>

            <p>
                <Link to='/'>Back home bishes</Link>
            </p>
            </Card>
        </div>
    )
}

export default AboutPage