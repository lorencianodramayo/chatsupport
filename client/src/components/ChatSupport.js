import React, {Component} from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default class ChatSupport extends Component {
	render() {
		return (
		<div className="ChatSupport">
			<p>Hello World</p>

			<Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />

		</div>
 		 )
	}
}
