import React, { useState, useRef } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

const TicTacToe = () => {
    const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const titleRef = useRef(null);

    const toggle = (index) => {
        if (lock || data[index] !== "") {
            return;
        }

        const newData = data.slice();
        newData[index] = count % 2 === 0 ? "x" : "o";
        setData(newData);
        setCount(count + 1);

        checkWin(newData);
    };

    const checkWin = (currentData) => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6]             // diagonals
        ];

        for (const [a, b, c] of winningCombinations) {
            if (currentData[a] && currentData[a] === currentData[b] && currentData[a] === currentData[c]) {
                won(currentData[a]);
                return;
            }
        }

        if (count === 8) {
            titleRef.current.textContent = "It's a draw!";
            setLock(true);
        }
    };

    const won = (winner) => {
        setLock(true);
        titleRef.current.innerHTML = `Congrats! <img src=${winner === "x" ? cross_icon : circle_icon} /> won the match`;
    };

    const reset = () => {
        setLock(false);
        setData(["", "", "", "", "", "", "", "", ""]);
        setCount(0);
        titleRef.current.innerHTML = "Tic Tac Toe Game with <span>React</span>";
    };

    return (
        <div className="container">
            <h1 className="title" ref={titleRef}>Tic Tac Toe Game with <span>React</span></h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes" onClick={() => toggle(0)}>
                        {data[0] && <img src={data[0] === "x" ? cross_icon : circle_icon} alt={data[0]} />}
                    </div>
                    <div className="boxes" onClick={() => toggle(1)}>
                        {data[1] && <img src={data[1] === "x" ? cross_icon : circle_icon} alt={data[1]} />}
                    </div>
                    <div className="boxes" onClick={() => toggle(2)}>
                        {data[2] && <img src={data[2] === "x" ? cross_icon : circle_icon} alt={data[2]} />}
                    </div>
                </div>
                <div className="row2">
                    <div className="boxes" onClick={() => toggle(3)}>
                        {data[3] && <img src={data[3] === "x" ? cross_icon : circle_icon} alt={data[3]} />}
                    </div>
                    <div className="boxes" onClick={() => toggle(4)}>
                        {data[4] && <img src={data[4] === "x" ? cross_icon : circle_icon} alt={data[4]} />}
                    </div>
                    <div className="boxes" onClick={() => toggle(5)}>
                        {data[5] && <img src={data[5] === "x" ? cross_icon : circle_icon} alt={data[5]} />}
                    </div>
                </div>
                <div className="row2">
                    <div className="boxes" onClick={() => toggle(6)}>
                        {data[6] && <img src={data[6] === "x" ? cross_icon : circle_icon} alt={data[6]} />}
                    </div>
                    <div className="boxes" onClick={() => toggle(7)}>
                        {data[7] && <img src={data[7] === "x" ? cross_icon : circle_icon} alt={data[7]} />}
                    </div>
                    <div className="boxes" onClick={() => toggle(8)}>
                        {data[8] && <img src={data[8] === "x" ? cross_icon : circle_icon} alt={data[8]} />}
                    </div>
                </div>
            </div>
            <button className="reset" onClick={reset}>Reset</button>
        </div>
    );
};

export default TicTacToe;
