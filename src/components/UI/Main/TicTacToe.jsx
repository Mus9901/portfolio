import { Divider, Box, Typography, Alert } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { BoltIcon } from '../Icons';
import styles from './style.module.scss'


export default function TicTacToe() {
    const [square, setSquare] = useState()
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isRestart, setRestart] = useState(false)
    const [isAlert, setAlert] = useState(false)
    console.log("isAlert", isAlert);
    
    
    const winner = calculateWinner(squares)
    const nextValue = calculateNextValue(squares)

    const handleAlert = () => {
        setAlert(true)
        setTimeout(() => {setAlert(false)}, 3000)
    }

    useEffect(() => {
        if (winner) {
            handleAlert()
        }
    }, [winner])
    
    
    function selectSquare(square) {
        if (winner || squares[square]) {
            setRestart(true)
        } else {
            const squaresCopy = [...squares]
        
        squaresCopy[square] = nextValue
        setSquares(squaresCopy)
        }
    }

    function renderSquare(i) {
       return  <button className={styles.btn} onClick={() => selectSquare(i)}>{squares[i]}</button>
    }

    function reset() {
        const emptyArray = Array(9).fill(null)
        setSquares(emptyArray)
        setRestart(false)
    }

    return (
        <div className={styles.gameRoot} id='game'>
                <div className={styles.boltBox}><BoltIcon /><BoltIcon /></div>
                <div className={styles.wrapper}>
                    <span className={styles.gameTitle}>Tic Tac Toe</span>
                    <div className={styles.gameBox}>
                        <div className={styles.row}>
                            <Box className={styles.singleBtn}
                                sx={{
                                    borderBottom: '1px solid #607B96',
                                    borderRight: '1px solid #607B96'
                                }}>{renderSquare(0)}</Box>
                            <Box className={styles.singleBtn}
                                sx={{
                                    borderBottom: '1px solid #607B96',
                                    borderRight: '1px solid #607B96'
                                }}>
                                {renderSquare(1)}</Box>
                            <Box className={styles.singleBtn}
                                sx={{
                                    borderBottom: '1px solid #607B96'
                                }}>
                                {renderSquare(2)}</Box>
                        </div>
                        <div className={styles.row}>
                            <Box className={styles.singleBtn}
                                sx={{
                                    borderBottom: '1px solid #607B96',
                                    borderRight: '1px solid #607B96'
                                }}>{renderSquare(3)}</Box>
                            <Box className={styles.singleBtn}
                                sx={{
                                    borderBottom: '1px solid #607B96',
                                    borderRight: '1px solid #607B96'
                                }}>
                                {renderSquare(4)}</Box>
                            <Box className={styles.singleBtn}
                                sx={{
                                    borderBottom: '1px solid #607B96'
                                }}>
                                {renderSquare(5)}</Box>
                        </div>
                        <div className={styles.row}>
                            <Box className={styles.singleBtn}
                                sx={{
                                    borderRight: '1px solid #607B96'
                                }}>
                                {renderSquare(6)}</Box>
                            <Box className={styles.singleBtn}
                                sx={{
                                    borderRight: '1px solid #607B96'
                                }}>
                                {renderSquare(7)}</Box>
                            <Box className={styles.singleBtn}>{renderSquare(8)}</Box>
                        </div>
                    </div>
                    <div className={styles.bottomButtons}>
                        <button className={`${styles.resetBtn} ${isRestart && styles.shakeBtn}`} onClick={reset}>Reset</button>
                    </div>
                </div>
                <div className={styles.boltBox}><BoltIcon /><BoltIcon /></div>
            {isAlert &&
                <div className={styles.alertBox}><Alert severity='success' icon={false} sx={{fontFamily: 'inherit', fontWeight: 'bold'}}>{winner}</Alert>
            </div>}
            </div>
    )
}

function calculateWinner(squares, arr=[]) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

    ]

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (squares[a] === 'X' && squares[b] === 'X' && squares[c] === 'X') {
            return 'Winner is X'
        } else if (squares[a] === 'O' && squares[b] === 'O' && squares[c] === 'O') {
            return 'Winner is O'
        }
    }

}


function calculateNextValue(squares) {
    const xSquaresCount = squares.filter(r => r === 'X').length
    const oSquaresCount = squares.filter(r => r === 'O').length
    return xSquaresCount === oSquaresCount ? 'X' : 'O'
}

function calculateStatus(squares, winner, nextValue) {
    return winner ? `Winner ${winner}` : squares.every(Boolean) ? `Scratch: Cat's game`: `Next player: ${nextValue}`
}
