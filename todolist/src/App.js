import React, { Component } from 'react';
import $ from 'jquery'
import api from './api';
import './App.css';
import ListItem from './listItem';
import Dialog from './dialog';
import Update from './update';
class App extends Component {
  constructor (props) {
    super(props);
    
    //初始任务列表
    this.state = {
        list: [],
        finished: 0,
        update:-1
    };
    this.updateNumber = this.updateNumber.bind(this);
 }
 componentWillMount()
 {
    var res= api.getData();
    this.setState({
       list:res
    })
    this.updateNumber();
 }
updateNumber()
{
    var sum = 0;
    this.state.list.forEach( (item) => {
        if (item.done === true) {
            sum++;
        }
    });
    this.setState({
        finished: sum
    });
    console.log(sum);
}

//添加新任务，在组件中以props的形式传递给子组件
addTask (newitem) {
    var allTask = api.addTask(newitem);
    // console.log(allTask);
    this.setState({
        list: allTask
    });
    this.updateNumber()
}
//更新完成的任务，在组件中以props的形式传递给子组件
updateFinished (todoItem) {

   api.updateTask(todoItem);
   this.updateNumber()
}

//更新任务总数，在组件中以props的形式传递给子组件
updateTotal (todoItem) {
    
    var obj=api.deleteTask(todoItem);
    this.setState({
        list: obj,
    });
    this.updateNumber()
}

//更新按钮
prepareUpdate (pos) {
    this.setState({
        update:pos
    })
}

//更新任务内容
updateItem(pos,name)
{
    var obj=this.state.list;
     obj[pos].name=name;
    api.updateTask(obj[pos]);
   this.setState({
       list:obj,
       update:-1
   })
}

render () {
    return (
        <div className="App">
            <h1>TodoList</h1>
            <ul>
                { this.state.list.map ((item, index) =>
                    <ListItem 
                        item={item}  
                        finishedChange={this.updateFinished.bind(this)} 
                        totalChange={this.updateTotal.bind(this)}
                        itemChange={this.prepareUpdate.bind(this)}
                        index={index}
                    />
                )}
                <li>{this.state.finished}已完成 / {this.state.list.length}总数</li>
            </ul>
            {
              this.state.update!==-1&& <Update
              pos={this.state.update}
              itemUpdate={this.updateItem.bind(this)}
              itemChange={this.prepareUpdate.bind(this)}
            />
            }
            <Dialog addNewTask={this.addTask.bind(this)} nums={this.state.list.length}/>
        </div>
    );
}
}

export default App;

