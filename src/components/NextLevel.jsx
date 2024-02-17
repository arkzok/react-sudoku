import { NavLink } from "react-router-dom"
import data from "../data"

const NextLevel = () =>
    <div className='container d-flex'>
        <h1>Level complete</h1>
        <NavLink to='/game' className='btn'>
            Level {data.level + 1}
        </NavLink>
    </div>

export default NextLevel