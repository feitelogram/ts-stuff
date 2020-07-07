// import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const nums = new NumbersCollection([5, 3, -1, 2]);
const chars = new CharactersCollection('avocado');
const ll = new LinkedList();
ll.add(5);
ll.add(-1);
ll.add(2000);
ll.add(-25);
nums.sort();
chars.sort();
ll.sort();
console.log(nums.data);
console.log(chars.data);
ll.print();
