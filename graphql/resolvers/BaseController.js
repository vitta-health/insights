class BaseController {

    constructor() {
        if (this.constructor === Repository) {
           throw new Error('This is an abstract class.');
        }
    }

    async index(filters) {
        try {
            const record = await this.model.find(filters);

            return record.toJSON();
        } catch (e) {
            console.error(e);
            throw new Error(`Error listing ${this.getModelName()}`);
        }      
    }

    async show(filters) {
        try {
            const record = await this.getModel().findOne(filters);

            return record.toJSON();
        } catch (e) {
            console.error(e);
            throw new Error(`Error showing ${this.getModelName()}`);
        }      
    }

    async create(attributes) {
        try {
            const record = new (this.getModel())(attributes);
            const result = record.save();
            return result.toJSON();
        } catch (e) {
            console.error(e);
            throw new Error(`Error creating ${this.getModelName()}`);
        }      
    }

    async delete(_id) {
        try {
            const record = await this.getModel().findOne({ _id });
            
            if (!record) {
                throw new Error(`There is no ${this.getModelName()} with the informed _id`);
            }
            const result = record.remove();
            return result.toJSON();
        } catch (e) {
            console.error(e);
            throw new Error(`Error removing ${this.getModelName()}`);
        }      
    }

    getModelName() {
        throw new Error('You should implement this method in child class');
    }

    getModel() {
        throw new Error('You should implement this method in child class');
    }
};

module.exports = new BaseController();
