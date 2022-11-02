// this shim is required
import 'reflect-metadata'
import { createExpressServer } from 'routing-controllers';
import { UserController } from './user-controller';
import { CustomErrorHandler } from './error.handler'

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
  cors: true,
  controllers: [UserController], // we specify controllers we want to use
  middlewares: [CustomErrorHandler],
  defaultErrorHandler: false,
  classTransformer: true
});

// run express application on port 3000
app.listen(1234);
