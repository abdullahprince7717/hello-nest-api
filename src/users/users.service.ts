import { Injectable } from '@nestjs/common';

 // The @Injectable() decorator is used to define a class as a provider.
 @Injectable() //  It tells Nest that this class can be injected as a dependency in other classes.
export class UsersService {
    private users = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@yopmail.com',
            type: 'admin'
        },
        {
            id: 2,
            name: 'Jane Doe',
            email: 'jane@yopmail.com',
            type: 'user'
        }
    ]

    getUsers(type?: string){
        if(type){
            return this.users.filter(user => user.type == type)
        }
        return this.users
    }
}
