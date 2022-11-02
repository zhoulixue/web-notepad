import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  QueryParams,
  QueryParam,
  HeaderParams,
  CookieParam,
  SessionParam,
  Session,
  UploadedFile,
  State,
  ContentType,
  Location,
  Redirect,
  HttpCode,
  OnUndefined,
  OnNull,
  HttpError,
  Header,
  Render,
  UseBefore,
} from 'routing-controllers';
import { IsPositive, IsAlpha, IsEnum, IsBoolean, IsArray, IsNumber  } from 'class-validator'
import compression from 'compression'

enum Roles {
  Admin = "admin",
  User = "user",
  Guest = "guest",
}

class GetUsersQuery {

  @IsPositive()
  limit: number;

  @IsAlpha()
  city: string;

  @IsEnum(Roles)
  role: Roles;

  @IsBoolean()
  isActive: boolean;

  @IsArray()
  @IsNumber(undefined, { each: true })
  ids: number[];
}
export class User {
  firstName: string;
  lastName: string;

  getName(): string {
    return this.lastName + ' ' + this.firstName;
  }
}

@JsonController()
@UseBefore(compression())
export class UserController {
  // http://localhost:1234/users?limit=2&city=shenzhen&role=admin&isActive=false&ids=[1,2,3]
  @Get('/users')
  getAll(@QueryParams() query: GetUsersQuery) {
    return 'This action returns all users';
  }

  @Get('/users/:id')
  getOne(@Param('id') id: number, @QueryParam("name", { type: String, required: true }) name: string) {
    return 'This action returns user #' + id + name;
  }

  @Post('/users')
  post(@Body() user: User) {
    console.log(user.getName())
    return 'Saving user...';
  }

  @Put('/users/:id')
  put(@Param('id') id: number, @Body() user: any) {
    console.log(user)
    return 'Updating a user...';
  }

  @Delete('/users/:id')
  remove(@Param('id') id: number) {
    console.log(id)
    return 'Removing user...';
  }
}
