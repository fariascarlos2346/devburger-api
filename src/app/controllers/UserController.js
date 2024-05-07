import { v4 } from 'uuid';

import User from '../models/User';

class UserController {
    async store(request, response) {
        const user = await User.create({
            id: v4(),
            name: 'Carlos3',
            email: 'fariascarlos2386@gmail.com',
            password_hash: 'asdfçlkjasdfçlkh',
        });
        
        return response.status(201).json(user);
    }
}

export default UserController;
