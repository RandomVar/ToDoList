import React, { Component } from 'react';

class Dialog extends Component {
	constructor (props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick () {
	
		var value = this.refs.myText.value;
		var priority=this.refs.priority.value;
		if (value !== '') {
			var obj = {
				priority:priority,
				name: value
			};
			this.refs.myText.value = '';
			this.props.addNewTask(obj);
		}
	}

	render () {
		return (
			
			<div className="dialog">
				<div>
					<h3>新建任务</h3>
					<label>优先级:</label>
					<input type="number" ref="priority"/> 
					<input type="text" ref="myText" placeholder="你想做点什么"/>
				</div>
				<div>
					<input type="button" value="Save Task" onClick={this.handleClick}/>
				</div>
			</div>
			
		);
	}
}

export default Dialog;