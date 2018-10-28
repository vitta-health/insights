const HttpConnector = require('../../models/HttpConnector');

class HttpConnectorController {

    constructor() {
        this.model = HttpConnector;
    }

    // this will update existing record in database
    async index(filters) {
        try {
            const record = await this.model.find(filters).exec();

            return record.toJSON();
        } catch (e) {

        }
        

                
    }
};

module.exports = new HttpConnectorController();
