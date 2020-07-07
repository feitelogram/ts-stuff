import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const nums = new NumbersCollection([5, 0, -1, 32, 15]);
// const sorter = new Sorter(nums);
// sorter.sort();
// console.log(sorter.collection);
// const str = new CharactersCollection('XaVeWc');
// const sorter2 = new Sorter(str);
// sorter2.sort();
// console.log(str.data);

const ll = new LinkedList();
ll.add(500);
ll.add(-1);
ll.add(2);
ll.add(25);
const sorter = new Sorter(ll);
sorter.sort();
ll.print();
