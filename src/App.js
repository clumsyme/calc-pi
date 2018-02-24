import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'

class App extends Component {
    initState = {
        total: 0,
        hit: 0,
        pi: 0,
        calculating: false,
    }
    constructor(props) {
        super(props)
        this.state = this.initState
    }
    updatePi = () => {
        if (Date.now() < this.then) {
            let { total, hit } = this.state
            let newTotal = total + 1
            let x = Math.random()
            let y = Math.random()
            if (x * x + y * y <= 1) {
                let newHit = hit + 1
                let newPi = (4 * newHit / newTotal).toFixed(9)
                this.setState({
                    total: newTotal,
                    hit: newHit,
                    pi: newPi,
                })
            } else {
                let newPi = (4 * hit / newTotal).toFixed(9)
                this.setState({
                    total: newTotal,
                    pi: newPi,
                })
            }
            requestAnimationFrame(this.updatePi)
        } else {
            cancelAnimationFrame(this.animationframe)
        }
    }
    calcPi = () => {
        let now = Date.now()
        this.then = now + 3000
        this.setState(
            {
                total: 0,
                hit: 0,
                pi: 0,
                calculating: true,
            },
            () => {
                this.animationframe = requestAnimationFrame(this.updatePi)
                this.setState({
                    calculating: false,
                })
            },
        )
    }
    render() {
        return (
            <div className="App">
                <h1 id="pi-value">{this.state.pi}</h1>
                <button onClick={this.calcPi} disabled={this.state.calculating}>
                    计算
                </button>
            </div>
        )
    }
}

export default App
