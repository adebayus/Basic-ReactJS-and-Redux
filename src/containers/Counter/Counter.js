import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux'
import * as actionCreators from '../../store/action/index'

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={ this.props.onIncrementCounter } />
                <CounterControl label="Decrement" clicked={ this.props.onDecrementCounter }  />
                <CounterControl label="Add 5" clicked={ this.props.onAddCounter }  />
                <CounterControl label="Subtract 5" clicked={ this.props.onSubtractCounter }  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}> Store Result </button>
                <ul>
                    {
                        this.props.storedResults.map( x => {
                            return <li key={x.id} onClick={() => this.props.onDeleteResult(x.id)}> { ` ${x.id} : ${ x.value }`  } </li>
                        })
                    }
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    // console.log(dispatch,"asdasdsad")
    return {
		onIncrementCounter: () => dispatch(actionCreators.increment()),
		onDecrementCounter: () => dispatch(actionCreators.decrement()),
		onAddCounter: () => dispatch(actionCreators.add(5)),
		onSubtractCounter: () => dispatch(actionCreators.subtract(5)),
		onStoreResult: (ctrObj) => dispatch(actionCreators.storeResult(ctrObj)),
		onDeleteResult: (idLi) => dispatch(actionCreators.deleteResult(idLi)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);