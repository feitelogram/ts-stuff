import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserShow extends View<User, UserProps> {
  template(): string {
    const age = this.model.get('age') || 100;

    return `
     <div>
     <h1>User Data</h1>
     <div>User Name: ${this.model.get('name')}</div> 
     <div>User Age: ${age}</div>
     </div>
     `;
  }
}
