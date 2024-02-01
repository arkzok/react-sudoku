import { NavLink } from "react-router-dom"

const Victory = () =>
    <div className='container d-flex'>
        <h1>Victory</h1>
        <NavLink to='/game' className='btn'>Next level</NavLink>
    </div>

export default Victory