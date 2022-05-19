import './App.css';
import {Component} from "react";
import {SwitchButton} from "./SwitchButton";
import {ResetButton} from "./ResetButton";

class App extends Component {
    state = {
        second: 0,
        minutes: 0,
        active: false,
    }

    addSec = () => {
        if(this.state.second >= 60.00) {
            console.log('minuta')

            this.setState({
                second: 0,
                minutes: this.state.minutes += 1
            })
        } else {
            this.setState({
                second: this.state.second + 0.01
            })
        }
    }

    handleClick = () => {
        if (this.state.active) {
            this.setState({
                active: !this.state.active
            })
            clearInterval(this.intervalId);
        } else {
            this.intervalId = setInterval(() => this.addSec(), 10)
        }

        this.setState({
            active: !this.state.active
        })
    }

    handleResetClick = () => {
        this.setState({
            second: 0,
            minutes: 0,
        })

        if(this.state.active) {
            this.setState({
                active: !this.state.active
            })
        } else {
            return
        }

        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div className="wrapper">
                <p className="timer"><span>{this.state.minutes} : {this.state.second.toFixed(2)}</span></p>
                <SwitchButton click={this.handleClick} active={this.state.active}/>
                <ResetButton click={this.handleResetClick} active={this.state.second}/>
            </div>
        )
    }
}

export default App;

