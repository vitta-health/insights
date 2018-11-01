const HttpConnector = require('../../models/HttpConnector');
const HttpConnectorController = require('./HttpConnectorController');

class JiraConnectorController extends BaseController {

    constructor() {
        this.model = HttpConnector;
    }

    // this will update existing record in database
    async index(filters) {
        try {
            const record = await this.model.find({ ...filters, name: 'JIRA' }).exec();

            return record.toJSON();
        } catch (e) {
            
        }         
    }

    async create() {
        try {

        } catch (e) {

        }

    }
};

module.exports = new JiraConnectorController();
