import { NavLink } from "react-router-dom"

const Defeat = () =>
    <div className='container d-flex'>
        <h1>Defeat</h1>
        <NavLink to='/game' className='btn'>Play again</NavLink>
    </div>

export default Defeat