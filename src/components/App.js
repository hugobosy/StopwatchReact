import './App.css';
import {Component} from "react";
import {SwitchButton} from "./SwitchButton";
import {ResetButton} from "./ResetButton";

class App extends Component {
    state = {
        count: 0,
        active: false,
    }

    addSec = () => {
        this.setState({
            count: this.state.count + 0.014
        })
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
            count: 0,
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
                <p className="timer"><span>{this.state.count.toFixed(2)}</span></p>
                <SwitchButton click={this.handleClick} active={this.state.active}/>
                <ResetButton click={this.handleResetClick} active={this.state.count}/>
            </div>
        )
    }
}

export default App;

