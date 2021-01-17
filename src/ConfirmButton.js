import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ConfirmButton extends Component {

    static propTypes = {
        action: PropTypes.func.isRequired
    };

    state = {
        timesPressed: 0
    }

    onPress = () => {
        const { timesPressed } = this.state;
        const { action } = this.props;

        this.setState({
            timesPressed: timesPressed + 1
        }, () => {
            if (this.state.timesPressed === 3) {
                action();
            }
        })
    }

    render() {
        const { timesPressed } = this.state;
        const { dialog } = this.props;
        return (
            <button onClick={this.onPress}> {dialog[timesPressed]} </button>
        );
    }
}

export default ConfirmButton;