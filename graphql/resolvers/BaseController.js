class BaseController {

    constructor() {
        if (this.constructor === Repository) {
           throw new Error('This is an abstract class.');
        }
    }

    // this will update existing record in database
    async index(filters) {
        try {
            const record = await this.model.find(filters).exec();

            return record.toJSON();
        } catch (e) {

        }      
    }
    
    async create(filters) {
        try {
            const record = await this.getModel().find(filters).exec();
            return record.toJSON();
        } catch (e) {

        }      
    }

    getModel() {
        throw new Error('You should implement this method in child class');
    }
};

module.exports = new BaseController();
