import { Route, Routes } from "react-router-dom"
import Play from "./components/Play"
import NextLevel from "./components/NextLevel"
import Defeat from "./components/Defeat"
import GameHOC from "./GameHOC"
import Victory from "./components/Victory"

const BaseRouter = () =>
    <Routes>
        <Route path="/" element={<Play />} />
        <Route path="/game" element={<GameHOC />} />
        <Route path="/nextlevel" element={<NextLevel />} />
        <Route path="/defeat" element={<Defeat />} />
        <Route path="/victory" element={<Victory />} />
    </Routes>

export default BaseRouter