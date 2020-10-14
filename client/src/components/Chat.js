import React, {Component} from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default class Chat extends Component {
	render() {
		return (
		<div className="Chat">
			<p>Hello World</p>

			<Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />

		</div>
 		 )
	}
}
