import { Link } from 'react-router-dom'
const Procedures = () => {
    const procedures = [
        "Deep Cleaning",
        "Filling",
        "Crown",
        "Root Canal",
        "Oral Surgery"
    ]

    const proceduresList = procedures.map((procedure, index) => {
        return <li key={index}><Link to={`/procedure/${procedure}`}>{procedure}</Link></li>
    })

    return(
        <div>
            <h1>Procedures</h1>
            <ul>
                {proceduresList}
            </ul>
        </div>
    )

}

export default Procedures
