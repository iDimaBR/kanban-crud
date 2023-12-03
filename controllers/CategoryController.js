
const Category = require('../models/Category');
const connection = require('../connection');
const TaskController = require('./TaskController');

const CategoryController = {

    async getAllCategories(req, res) {
        try {
            const db = await connection();
            const categories = await db.collection('categories').find().toArray();
            return res.status(200).json({
                success: true, 
                list: categories
            });
        } catch (error) {
            return res.status(500).json({
                success: false, 
                error: error.message, 
                message: 'Erro ao buscar categorias' 
            });
        }
    },

    async findCategoryById(req, res) {
        try {
            const { id } = req.params;
            const db = await connection();
            const category = await db.collection('categories').findOne({ _id: id });
            return res.status(200).json({
                success: true, 
                category: category
            });
        } catch (error) {
            return res.status(500).json({
                success: false, 
                error: error.message, 
                message: 'Erro ao buscar categoria' 
            });
        }
    },

    async findCategoryByName(req, res) {
        try {
            const { name } = req.params;
            const db = await connection();
            const category = await db.collection('categories').findOne({ name: name });
            return res.status(200).json({
                success: true, 
                category: category
            });
        } catch (error) {
            return res.status(500).json({
                success: false, 
                error: error.message, 
                message: 'Erro ao buscar categoria' 
            });
        }
    },

    async createCategory(req, res) {
        try{
            const { name } = req.body;
            
            const db = await connection();
            const category = new Category(name);
            await db.collection('categories').insertOne(category);

            return res.status(200).json({
                success: true, 
                category: category
            });
        } catch (error) {
            return res.status(500).json({
                success: false, 
                error: error.message, 
                message: 'Erro ao criar categoria' 
            });
        }
    },

    async updateCategory(req, res) {
        try {
            const { id } = req.params;
            const { name } = req.body;
    
            const db = await connection();
            const category = new Category(name);
            const result = await db.collection('categories')
                .updateOne({ _id: id }, { $set: category });

            return res.status(200).json({
                success: true, 
                category: result.ops[0]
            });
        } catch (error) {
            return res.status(500).json({
                success: false, 
                error: error.message, 
                message: 'Erro ao atualizar categoria' 
            });
        }
    },

    async deleteCategory(req, res) {
        try {
            const { id } = req.params;
    
            const db = await connection();
            await db.collection('categories').deleteOne({ _id: id });
    
            const cleaning = await TaskController.deleteTasksByCategoryId(id);
            if (!cleaning.success) {
                return res.status(500).json(cleaning);
            }
    
            return res.status(200).json({
                success: true
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error.message,
                message: 'Erro ao deletar categoria'
            });
        }
    }
}

module.exports = CategoryController;