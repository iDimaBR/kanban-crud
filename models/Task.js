class Task {
    constructor(name, categoryId, description, status) {
        this.categoryId = categoryId;
        this.name = name;
        this.description = description
        this.status = status;
    }

    getStatus(){
        return this.status;
    }

    getCategoryId(){
        return this.categoryId;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description
    }

    setName(name) {
        this.name = name;
    }

    setCategoryId(categoryId){
        this.categoryId = categoryId;
    }

    setDescription(description) {
        this.description = description;
    }

    setStatus(status){
        this.status = status;
    }
}

module.exports = Task;