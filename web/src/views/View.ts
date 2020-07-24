import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  regionsMap(): { [key: string]: string } {
    return {};
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  bindModel = () => {
    this.model.on('change', () => this.render());
  };

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    for (let key in eventsMap) {
      let [eventName, selector] = key.split(':');
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[key]);
      });
    }
  }

  onRender(): void {}

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();
    for (let key in regionsMap) {
      const selector = regionsMap[key];
      let element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    }
  }

  render(): void {
    this.parent.innerHTML = '';
    const template = document.createElement('template');
    template.innerHTML = this.template();
    this.bindEvents(template.content);
    this.mapRegions(template.content);
    this.onRender();
    this.parent.append(template.content);
  }
}
