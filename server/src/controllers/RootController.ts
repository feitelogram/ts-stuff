import { controller, get, use } from './decorators';
import { Request, Response, NextFunction } from 'express';

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session?.loggedIn) {
    next();
    return;
  }
  res.status(403).send('Forbidden');
}

@controller('')
export class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session?.loggedIn) {
      res.send(`
    <div>
    <h1>You are logged in.</h1>
    <a href="/auth/logout">Logout</a>
    </div>
    `);
    } else {
      res.send(`
      <div>
      <h1>You are not logged in.</h1>
      <a href="/auth/login">Login</a>
      </div>
      `);
    }
  }
  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('<p>Welcome to the protected page, logged-in user.</p>');
  }
}
