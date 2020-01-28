import React from 'react';
import './App.css';

let timer;

class pomadoro extends React.Component {

    constructor(probs) {
        super(probs);
        this.state = {
            defaultHour: 0,
            defaultMin: 20,
            defaultSec: 0,
            displayModel: false,
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>First pomodoro timer</h1>
                    <hr/>

                    <span>
                {this.state.defaultHour}h:{this.state.defaultMin}m:{this.state.defaultSec}s
            </span>

                    <br/>
                    <button onClick={() => {
                        timer = setInterval(() => {

                            if (this.state.defaultSec === 0) {
                                this.setState({defaultSec: 59});
                                this.setState({defaultMin: this.state.defaultMin - 1})
                            } else {
                                this.setState({defaultSec: this.state.defaultSec - 1});
                                if (this.state.defaultSec === 0) {
                                    if (this.state.defaultMin === 0 && this.state.defaultHour === 0) {
                                        this.setState({displayModel: true});
                                        clearInterval(timer)
                                    }
                                }
                                if (this.state.defaultMin >= 0) {
                                    if (this.state.defaultHour >= 1) {
                                        this.setState({defaultHour: this.state.defaultHour - 1})
                                    }
                                }
                            }
                        }, 1000);

                    }}>
                        Start
                    </button>
                    <button onClick={() => {
                        clearInterval(timer);
                    }}>
                        Stop
                    </button>
                    <button onClick={() => {
                        this.setState({defaultSec: 0});
                        this.setState({defaultHour: 0});
                        this.setState({defaultMin: 20});
                    }}>
                        RESET
                    </button>
                    <br/>
                    <button onClick={() => {
                        this.setState({
                                defaultHour: this.state.defaultHour + 1
                            }
                        );
                    }}>
                        +1 Hour
                    </button>
                    <button onClick={() => {
                        if (this.state.defaultHour >= 1) {
                            this.setState({defaultHour: this.state.defaultHour - 1});
                        }
                    }}>
                        -1 Hour
                    </button>
                    <button onClick={() => {
                        if (this.state.defaultMin >= 60) {
                            this.setState({defaultHour: this.state.defaultHour + 1});
                            this.setState({defaultMin: 0});

                        } else {
                            this.setState({defaultMin: this.state.defaultMin + 1})
                        }
                    }
                    }>
                        +1 Min
                    </button>
                    <button onClick={() => {
                        if (this.state.defaultMin >= 1) {
                            this.setState({defaultMin: this.state.defaultMin - 1});
                            if(this.state.defaultSec <= 0) {
                                this.setState({defaultMin: this.state.defaultMin - 2});
                                this.setState({defaultSec: 60})
                            }
                        }
                        if (this.state.defaultMin === 0) {

                        }
                        if (this.state.defaultMin === 0) {
                            if (this.state.defaultHour >= 1) {
                                this.setState({defaultHour: this.state.defaultHour - 1})
                                this.setState({defaultMin: 60})
                            }
                        }
                    }}>
                        -1 Min
                    </button>
                    <button onClick={() => {
                        if (this.state.defaultMin >= 60 && this.state.defaultSec >= 60) {
                            this.setState({defaultHour: this.state.defaultHour + 1});
                            this.setState({defaultMin: 0});

                        }
                        if (this.state.defaultSec >= 60) {
                            this.setState({defaultMin: this.state.defaultMin + 1});
                            this.setState({defaultSec: 0});
                        } else {
                            this.setState({defaultSec: this.state.defaultSec + 1})
                        }
                    }
                    } className="plus">
                        +1 Sec
                    </button>
                    <button onClick={() => {
                        if (this.state.defaultSec >= 0) {
                            this.setState({defaultSec: this.state.defaultSec - 1})
                        }
                        if (this.state.defaultSec === 0) {
                            this.setState({defaultSec: 59});
                            this.setState({defaultMin: this.state.defaultMin - 1})
                        }
                        if (this.state.defaultMin >= 0) {
                            if (this.state.defaultHour >= 1) {
                                this.setState({defaultHour: this.state.defaultHour - 1})
                            }
                        }
                    }
                    } className="minus">
                        -1 Sec
                    </button>

                    <br/>
                    <div className="Model" style={{display: this.state.displayModel ? 'block' : 'none'}}>

                        <div className="body">
                            <h1>Break Time</h1>
                            <br/>
                            <button onClick={() => {
                                this.setState({defaultSec: 0});
                                this.setState({defaultHour: 0});
                                this.setState({defaultMin: 20});
                                this.setState({displayModel: false});
                                timer = setInterval(() => {

                                    if (this.state.defaultSec === 0) {
                                        this.setState({defaultSec: 59});
                                        this.setState({defaultMin: this.state.defaultMin - 1})
                                    } else {
                                        this.setState({defaultSec: this.state.defaultSec - 1})
                                        if (this.state.defaultSec === 0) {
                                            this.setState({defaultSec: 60});
                                            this.setState({defaultMin: this.state.defaultMin - 1})
                                        }
                                        if (this.state.defaultMin >= 0) {
                                            if (this.state.defaultHour >= 1) {
                                                this.setState({defaultHour: this.state.defaultHour - 1})
                                            }
                                        }
                                    }
                                    if (this.state.defaultMin === 0 && this.state.defaultHour === 0 && this.state.defaultSec === 0) {

                                    }
                                }, 1000)
                            }
                            }> Start from default time ? (20 Min timer)
                            </button>
                            <button onClick={() => {
                                this.setState({displayModel: false});
                            }}> Close Model Box
                            </button>
                        </div>
                    </div>
                </header>

            </div>
        )
    }
}

export default pomadoro;
