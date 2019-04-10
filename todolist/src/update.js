import React, { Component } from 'react';

class Update extends Component {
	constructor (props) {
		super(props);
  	this.cancelUpdate = this.cancelUpdate.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
	}

	handleUpdate () {
		var value = this.refs.myText.value;
		this.refs.myText.value = '';
		this.props.itemUpdate(this.props.pos,value);
		}
    cancelUpdate()
    {
      this.props.itemChange(-1);
    }
	render () {
		return (
			
			<div className="update">
				<div>
					<h3>Update</h3>
          <label>优先级:</label>
					<input type="number" ref="priority"/> 
					<input type="text" ref="myText" placeholder="你想做点什么"/>
				</div>
				<div>
        <input type="button" value="Cancel" onClick={this.cancelUpdate}/>
					<input type="button" value="Save Task" onClick={this.handleUpdate}/>
				</div>
			</div>
			
		);
	}
}

export default Update;