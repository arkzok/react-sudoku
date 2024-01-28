import { Route, Routes } from "react-router-dom"
import Menu from "./components/Menu"
import Victory from "./components/Victory"
import Defeat from "./components/Defeat"
import GameHOC from "./GameHOC"

const BaseRouter = () =>
    <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/game" element={<GameHOC />} />
        <Route path="/victory" element={<Victory />} />
        <Route path="/defeat" element={<Defeat />} />
    </Routes>

export default BaseRouter