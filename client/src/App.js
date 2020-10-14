import React from 'react';
import { Chat } from './components/Chat'

import './App.less';
export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Chat/>
			</div>
		);
	}
}
