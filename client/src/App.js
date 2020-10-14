import React, {Component} from 'react';
import { ChatSupport } from './components/ChatSupport'

import './App.less';
export default class App extends Component {
	render() {
		return (
			<div className="App">
				<ChatSupport/>
			</div>
		);
	}
}
