import { FASTElement, customElement, attr, html, observable } from '@microsoft/fast-element';

const template = html`
  <button type="button" @click=${x => x.increment()}>+</button>
  <strong>${x => x.greeting}</strong> = <span>${x => x.total}</span>
`;

@customElement({
  name: 'name-tag',
  template,
})
export class NameTag extends FASTElement {
  @attr greeting: string = 'Hello';
  @observable total: number = 0;

  increment() {
    this.total++;
  }
}