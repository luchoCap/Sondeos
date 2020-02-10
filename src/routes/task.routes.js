const express = require('express')
const router = express.Router();

const Task = require('../models/task')


//ruta de obtencion de tareas
router.get('/api/tasks', async (req, res) => {
    const tasks = await Task.find()
    console.log(tasks)
    res.send(tasks)
})

//ruta para agregar tareas
router.post('/api/tasks', async (req, res) => {
    const { title } = req.body;
    const tasks = new Task({ title });
    await tasks.save();
    res.json({ status: 'Tarea guardada' })
})



//ruta para eliminar una tarea
router.delete('/api/tasks/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ status: 'Tarea eliminada' })
})


module.exports = router; 