import { OutputTarget } from '../Summary';

export class ConsoleReport implements OutputTarget {
  print(output: string): void {
    console.log(output);
  }
}
