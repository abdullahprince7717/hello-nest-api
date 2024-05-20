import { Body, Controller,Get, HttpCode, NotFoundException, Param, ParseIntPipe, Post, Put, Query, Redirect, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users') // 'users' will be used as a prefix/base path for all routes in this controller.

@UseGuards(AuthGuard) // UseGuards is a decorator that tells Nest to use the AuthGuard class to protect all routes in this controller.
export class UsersController {

    constructor(private userService: UsersService){}

    @Get()
    // @HttpCode(202)
    // @Redirect('https://www.google.com', 301)
    getUsers(@Req() request: Request, @Query('type') type: string){ // @Query('type') type: string is a parameter decorator that tells Nest to bind the value of the type query parameter from the request URL to the type argument of the getUsers method.
        try {
        // console.log("request", request.url);
            return  this.userService.getUsers(type);
        } catch (error) {
            return NotFoundException;
        }
       
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: string){  // @Param('id') id: string is a parameter decorator that tells Nest to bind the value of the id parameter from the request URL to the id argument of the getUser method.
        console.log("type of id", typeof id);
        return `User with id ${id}`;
    }

    @Post() // ValidationPipe is a pipe that uses the class-validator library to automatically validate the request body against the CreateUserDto class.
    @UseGuards(AuthGuard) // protecting this specific route with the AuthGuard class.
    createUser(@Body(new ValidationPipe()) createUserDto: CreateUserDto){ // @Body() createUser: CreateUserDto is a parameter decorator that tells Nest to bind the request body to the createUser argument of the createUser method.
        try {
            return `User ${createUserDto.name} created`;
        } catch (error) {
            return `error: ${error}`;
        }
    }

    @Put(':id')
        updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto ){
            return `User with id ${id} && ${updateUserDto.name} updated`;
        }
    
}
 

 