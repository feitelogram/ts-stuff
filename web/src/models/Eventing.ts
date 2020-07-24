type Callback = () => void;

interface Events {
  [key: string]: Callback[];
}

export class Eventing {
  events: Events = {};

  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];
    if (!handlers || !handlers.length) return;
    handlers.forEach((cb) => {
      cb();
    });
  };
}
