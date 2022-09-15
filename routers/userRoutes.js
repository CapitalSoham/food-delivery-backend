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
    return user;
}
