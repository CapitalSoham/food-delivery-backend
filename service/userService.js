const http_code = require('http-status-codes').StatusCodes;
const User = require('../db/models/user');
let userService = {
    login: async (data) => {
        try {
            let response = await User.findOne({ "email": data.email });
            if (response != null) {
                if (response.password == data.password) {
                    return {
                        status: http_code.OK, data: {
                            status: true,
                            message: 'Login Successfully',
                            data: response
                        }
                    };
                }
                else {
                    throw new Error('Wrong Password')
                }
            } else {
                throw new Error("Email does't exsist")
            }
        } catch (error) {
            return {
                status: http_code.INTERNAL_SERVER_ERROR, data: {
                    status: false,
                    message: error.message
                }
            };
        }
    },
    register: async (data) => {
        try {
            let response = await User.create(data);
            return {
                status: http_code.CREATED, data: {
                    status: true,
                    message: 'Register Successfully',
                    data: response
                }
            };
        } catch (error) {
            return {
                status: http_code.INTERNAL_SERVER_ERROR, data: {
                    status: false,
                    message: error.message
                }
            };
        }
    }
}
module.exports = userService;