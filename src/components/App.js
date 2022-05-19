import './App.css';
import {Component} from "react";
import {SwitchButton} from "./SwitchButton";

class App extends Component {
    state = {
        count: 0,
        active: false,
    }

    addSec = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleClick = () => {
        if(this.state.active){
            this.setState({
                active: !this.state.active
            })
            clearInterval(this.intervalId);
        } else {
            this.intervalId = setInterval(()=>this.addSec(), 1000)
        }

        this.setState({
            active: !this.state.active
        })
    }

    render() {
        return(
            <>
                <p>{this.state.count}</p>
                <SwitchButton click={this.handleClick} active={this.state.active}/>
            </>
        )
    }
}

export default App;

