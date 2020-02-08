import React, { Component } from 'react';
import ListTasks from './ListTasks'


class EditWork extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            tasks: []

        }


        this.addTask = this.addTask.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.fetchTasks = this.fetchTasks.bind(this)
        this.deleteTask = this.deleteTask.bind(this)

    }

    //traigo todas las tareas
    fetchTasks() {
        fetch(`/api/tasks/`)
            .then(res => res.json())
            .then(data => {
                this.setState({ tasks: data })
                console.log(this.state.tasks)
            })
    }

    componentDidMount() {
        this.fetchTasks()
    }


    //cambia el valor del campo que corresponda y actualiza el state
    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })

    }

    //borro la tarea correspondiente
    deleteTask(id) {
        if (confirm('Are you sure you want to delete it?')) {
            fetch(`/api/tasks/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    M.toast({ html: 'Task deleted' })
                    this.fetchTasks()

                })

        }
    }



    //agrego la tarea 
    addTask(event) {

        if (this.state.title) {
            fetch(`api/tasks/`, {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    M.toast({ html: 'Task Save' })
                    this.setState({ title: '' })
                    this.fetchTasks()
                })
                .catch(err => console.error(err))


            document.getElementById("miForm").reset();
            event.preventDefault();
        }
        else {
            M.toast({ html: 'Campo vacio!' })
        }

    }






    render() {
        return (
            <div>

                <div className="container">
                    {/* navigate */}
                    <nav className="light-blue darken-4">
                        <div className="container">
                            <p className="brand-log" style={{ fontSize: '2em' }}>Sondeos</p>
                        </div>
                    </nav>

                    <div className="row">
                        <div className="col s12 m12 l5">
                            <div className="card" >
                                <h4 style={{ fontFamily: 'cursive', fontSize: '2em', textAlign: 'center', paddingTop: '40px' }}>Agregar Tarea</h4>
                                <div className="card-content">
                                    <form onSubmit={this.addTask} id="miForm" name="miForm" style={{ marginTop: '1em' }}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="title" type="text" placeholder="Add Task" onChange={this.handleChange} ></input>
                                                <button type="submit" className="btn light-blue darken-4">Agregar</button>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m12 l7" >

                            <ListTasks tasks={this.state.tasks} deleteTask={this.deleteTask} ></ListTasks>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default EditWork;
