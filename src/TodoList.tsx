import React from 'react';
import './App.css';
import TodoListTitle from './TodoListTitle';
import AddNewItemForm from './AddNewItemForm'
import TodoListTasks from './TodoListTasks';
import TodoListFooter from './TodoListFooter';
import { connect } from 'react-redux';
import { getTasksTC, addTaskTC, changeTaskTC, deleteTodolistTC, deleteTaskTC, changeHeaderTC } from './redux/reducer';

interface IProps {
    id: string
    title: string
    tasks: any[]
    getTasksTC: (id: string) => void
    addTaskTC: (id: string, title: string) => void
    changeTaskTC: (taskId: string, obj: any, id: string) => void
    changeHeaderTC: (id: string, title: string) => void
    deleteTodolistTC: (id: string) => void
    deleteTaskTC: (taskId: string, id: string) => void
}
class TodoList extends React.Component<IProps> {

    componentDidMount() {
        this.props.getTasksTC(this.props.id)
    }

    state = {
        filterValue: 'All'
    };

    addItem = (title: string) => {
        this.props.addTaskTC(this.props.id, title)
    }

    changeFilter = (newFilterValue: string) => {
        this.setState({
            filterValue: newFilterValue
        })
    }

    changeTaskTC = (taskId: string, obj: string | number) => {
        this.props.changeTaskTC(taskId, obj, this.props.id)
    }

    changeStatus = (taskId: string, status: number) => {
        this.changeTaskTC(taskId, { status });
    }

    changeTitle = (taskId: string, title: string) => {
        this.changeTaskTC(taskId, { title });
    }

    changeHeaderTitleTC = (title: string) => {
        this.props.changeHeaderTC(this.props.id, title)
    }

    deleteTodolist = () => {
        this.props.deleteTodolistTC(this.props.id)
    }

    deleteTaskTC = (taskId: string) => {
        this.props.deleteTaskTC(taskId, this.props.id)
    }

    render = () => {
        let { tasks = [] } = this.props
        return (
            <div className="App">
                <div className="todoList">
                    <div className='todoList-header'>
                        <TodoListTitle title={this.props.title}
                            deleteTodolist={this.deleteTodolist} changeHeaderTitleTC={this.changeHeaderTitleTC}
                            id={this.props.id} />
                        <AddNewItemForm addItem={this.addItem} />
                    </div>
                    <TodoListTasks changeStatus={this.changeStatus}
                        changeTitle={this.changeTitle}
                        deleteTask={this.deleteTaskTC}
                        tasks={tasks.filter(t => {
                            if (this.state.filterValue === "All") {
                                return true;
                            }
                            if (this.state.filterValue === "Active") {
                                return t.status === 0;
                            }
                            if (this.state.filterValue === "Completed") {
                                return t.status === 2;
                            }
                        })} />
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue} />
                </div>
            </div>
        );
    }
}

const connectedTodolist = connect(null, { getTasksTC, addTaskTC, changeTaskTC, deleteTodolistTC, deleteTaskTC, changeHeaderTC })(TodoList);
export default connectedTodolist;