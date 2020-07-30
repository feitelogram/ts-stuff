import { Request, Response, NextFunction } from 'express';
import { get, controller, post, bodyValidator } from './decorators';

interface RequestWithBody extends Request {
  body: { [key: string]: string };
}

@controller('/auth')
export class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
    <form method="post">
    <div>
    <label>Email</label>
    <input name="email" />
    </div>
    <div>
    <label>Password</label>
    <input type="password" name="password"/>
    </div>
    <input type="submit"/>
    </form>
    `);
  }
  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: RequestWithBody, res: Response) {
    const { email, password } = req.body;
    if (email && password && email === 'hi@hi.com' && password === 'pass') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid login credentials.');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = null;
    res.redirect('/');
  }
}
