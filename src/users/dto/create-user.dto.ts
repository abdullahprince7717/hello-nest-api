// Purpose: Data transfer object for creating a user.
// DTOs are used to define the shape of the data that will be sent to the server.

import { MinLength } from "class-validator";

export class CreateUserDto {
    @MinLength(3)
    name: string;
    age: number;
    email: string;
    password: string;
    readonly type?: string; // readonly  will make the property immutable, meaning it cannot be changed once it is set.
}
