import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const reader = new MatchReader('football.csv');
reader.read();
const matches = reader.data;

let manWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manWins++;
  }
}

console.log(`Manchester United had ${manWins} wins this season!`);
