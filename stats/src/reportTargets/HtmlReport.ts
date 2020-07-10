import { OutputTarget } from '../Summary';
import fs from 'fs';

export class HtmlReport implements OutputTarget {
  constructor(public reportName: string) {}
  print(output: string): void {
    const html = `
    <div>
    <h1>Analysis Output</h1>
    <div>${output}</div>
    </div>
    `;

    fs.writeFileSync(`${this.reportName}.html`, html);
  }
}
