const userService = require('../service/userService');
module.exports = function (app, express) {
    let user = express.Router();
    user.post('/login', async (req, res) => {
        let response = await userService.login(req.body);
        res.status(response.status).json(response.data);
    });
    user.post('/register', async (req, res) => {
        let response = await userService.register(req.body);
        res.status(response.status).json(response.data);
    });
    user.post('/update', async (req, res) => {
        let response = await userService.update(req.par,req.body);
        res.status(response.status).json(response.data);
    });
    user.post('/get-user', async (req, res) => {
        let response = await userService.user_details(req.body);
        res.status(response.status).json(response.data);
    });
    user.post('/search', async (req, res) => {
        let response = await userService.search(req.body);
        res.status(response.status).json(response.data);
    });
    user.post('/company-search', async (req, res) => {
        let response = await userService.register(req.body);
        res.status(response.status).json(response.data);
    });
    user.get('/company-list', async (req, res) => {
        let response = await userService.company_list();
        res.status(response.status).json(response.data);
    });
    return user;
}
