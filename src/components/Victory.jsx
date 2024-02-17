import { NavLink } from "react-router-dom"

const Victory = () =>
    <div className='container d-flex'>
        <p className="victory">Victory!</p>
        <NavLink to='/game' className='btn'>Play again</NavLink>
    </div>

export default Victory