import React, { Component } from 'react';


class ListTasks extends Component {



    render() {
        return (
            <div className="card" >
                <h4 style={{ fontFamily: 'cursive', fontSize: '2em', textAlign: 'center', paddingTop: '40px' }}>Tareas</h4>
                <div className="card-content">

                    <table className="striped">
                        <thead>
                            <tr>
                                <th style={{ fontFamily: 'auto', fontSize: '1.2em' }}> Descripción Tareas</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.tasks.map(task => {
                                    return (
                                        <tr key={task._id}>
                                            <td>
                                                {task.title}
                                            </td>

                                            <td style={{ textAlign: 'end' }}>
                                                <button className="btn light-blue darken-4" onClick={() => this.props.deleteTask(task._id)}><i className="material-icons">delete</i></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>


                </div>
            </div>
        )
    }

}

export default ListTasks;