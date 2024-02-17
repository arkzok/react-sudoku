import { NavLink } from "react-router-dom"

const Play = () =>
    <div className='container d-flex'>
        <h1>Sudoku</h1>
        <NavLink to='/game' className='btn'>Play</NavLink>
    </div>

export default Play