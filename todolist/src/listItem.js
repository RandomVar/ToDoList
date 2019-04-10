import React, { Component } from 'react';

class ListItem extends Component {
    constructor (props) {
        super(props);

        this.handleFinished = this.handleFinished.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    } 

    handleFinished () {
        var done = this.props.item.done;

        done = (done === false ? true : false);
        var obj=this.props.item;
        obj.done=done;
        // var obj = {
        //     id: this.props.item.id,
        //     name: this.props.item.name,
        //     done: done
        // }
        
        this.props.finishedChange(obj); //执行父组件传来的方法
    }

    handleDelete () {
        this.props.totalChange(this.props.item); //执行父组件传来的方法
    }
    handleUpdate () {
      //console.log('key',this.props.index)
      this.props.itemChange(this.props.index); //执行父组件传来的方法
  }
    render () {
        const item = this.props.item;

        const unfinish = {
            backgroundColor: '#DFFCB5',
            color: '#2EB872',
        };

        const finish = {
            backgroundColor: '#FFFA9D',
            color: '#FF9A3C',
            textDecoration: 'line-through'
        }

        var itemStyle = item.done === false ? unfinish : finish;
        
        return (
            <li key={item.id} style={itemStyle}>
                <span 
                    onClick={this.handleFinished} 
                    id={item.id}
                    className="check-btn"
                    style={{backgroundColor: item.done === 0 ? '#fff' : '#A1EAFB'}}
                ></span>
                <span>{ item.name }</span>
                <span onClick={this.handleDelete} className="delete-btn">删除</span>
                <span onClick={this.handleUpdate} className="update-btn">更新</span>
            </li>
        );
    }
}

export default ListItem;