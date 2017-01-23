import React, {
    Component
}
from 'react';
import {
    connect
}
from 'react-redux';
import {
    bindActionCreators
}
from 'redux';
import {}
from './style.less';
import MessageList from 'components/message-list';
import MessageEntryBox from 'components/message-entry-box';
import * as messageActionCreators from 'actions/message-actions';

class App extends Component {
    render() {
        return (
            <div>
                <MessageList messages={this.props.messages}/>
                <MessageEntryBox
                    value={this.props.currentMessage}
                    onChange={this.props.updateMessage}
                    onSubmit={this.props.addMessage}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages,
        currentMessage: state.currentMessage
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(messageActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
