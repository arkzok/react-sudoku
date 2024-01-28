import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Game = props => {
    const nav = useNavigate()

    useEffect(() => {
        if (props.mistakes >= props.maxMistakes) nav('/defeat')

        for (const tr of props.matrix) if (tr.includes(0)) return

        props.nextLevel()

        nav('/victory')
    }, [props, nav])

    return (
        <div className="container d-flex">
            <h1>Level {props.level + 1}</h1>
            <table className="sudoku">
                <tbody>
                    {
                        props.matrix.map((tr, trIndex) =>
                            <tr key={trIndex}>
                                {
                                    tr.map((td, tdIndex) =>
                                        <td key={tdIndex}
                                            onClick={() => props.changeCoords(trIndex, tdIndex)}
                                            className={
                                                trIndex === props.coords[0] && tdIndex === props.coords[1]
                                                    ? 'cell active-cell'
                                                    : 'cell'
                                            }>

                                            {td || ''}
                                        </td>
                                    )
                                }
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <ul className="d-flex">
                {
                    props.values.map(value =>
                        <li key={value} className="cell" onClick={() => props.changeValue(value)}>
                            {value}
                        </li>
                    )
                }
            </ul>
            <div className="mistakes">
                Mistakes: {props.mistakes} / {props.maxMistakes}
            </div>
        </div>
    )
}

export default Game