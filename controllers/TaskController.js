
const Task = require('../models/Task');
const CategoryController = require('./CategoryController');
const connection = require('../connection');

const TaskController = {

    async getAllTasks(req, res) {
        try {
            const db = await connection();
            const tasks = await db.collection('tasks').find().toArray();
            return res.status(200).json({
                success: true, 
                list: tasks
            });
        } catch (error) {
            return res.status(500).json({
                success: false, 
                error: error, 
                message: 'Erro ao buscar tarefas' 
            });
        }
    },

    async findTask(req, res) {
        try {
            const { id } = req.params;
            const db = await connection();
            const task = await db.collection('tasks').find({'categoryId': id}).toArray();
    
            if (task.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'Nenhuma tarefa encontrada'
                });
            }
    
            return res.status(200).json({
                success: true,
                task: task
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error.message,
                message: 'Erro ao buscar tarefa'
            });
        }
    },
    

    async createTask(req, res) {
        try{
            const { name, categoryId, description, status } = req.body;
            
            const db = await connection();
            const task = new Task(name, categoryId, description, status);
            await db.collection('tasks').insertOne(task);

            return res.status(200).json({
                success: true, 
                task: task
            });
        } catch (error) {
            return res.status(500).json({
                success: false, 
                error: error.message, 
                message: 'Erro ao criar tarefa' 
            });
        }
    },

    async updateTask(req, res) {
        try {
            const { id } = req.params;
            const { name, categoryId, description, status } = req.body;
    
            const db = await connection();
            const task = new Task(name, categoryId, description, status);
            await db.collection('tasks').updateOne({ _id: id }, { $set: task });

            return res.status(200).json({
                success: true, 
                task: task
            });
        } catch (error) {
            return res.status(500).json({
                success: false, 
                error: error, 
                message: 'Erro ao atualizar tarefa' 
            });
        }
    },

    async deleteTask(req, res) {
        try {
            const { id } = req.params;

            const db = await connection();
            await db.collection('tasks').deleteOne({ _id: id });
                
            return res.status(200).json({
                success: true
            });
        } catch (error) {
            return res.status(500).json({
                success: false, 
                error: error, 
                message: 'Erro ao deletar tarefa' 
            });
        }
    },

    async deleteTasksByCategoryId(categoryId) {
        try {
            const db = await connection();
            const result = await db.collection('tasks').deleteMany({ categoryId: categoryId });
            
            return {
                success: result.deletedCount > 0
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }
}

module.exports = TaskController;