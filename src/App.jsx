import Immutable from 'immutable';
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';

import shell from './Shell';
import delaerPost from './DealerPost';
export default class App extends Component {
    constructor(props) {
        super(props);

        const reducers = combineReducers({});
        const epics = combineEpics();

        this.store = createStore(
            reducers,
            Immutable.Map(),
            compose(
                applyMiddleware(createEpicMiddleware(epics)),
                process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : f => f
            )
        );
    }

    render() {
        return (
            <Provider store={this.store}>
                <LocaleProvider locale={zhCN}>
                    <Router>
                        <shell.Shell>
                            <Switch>
                                <Route path="/delaerpost" component={delaerPost.DealerPost} />
                                {/* <Redirect from="/" to="/" />*/}
                            </Switch>
                        </shell.Shell>
                    </Router>
                </LocaleProvider>
            </Provider>
        );
    }
}
