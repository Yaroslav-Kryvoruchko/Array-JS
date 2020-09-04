// Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива.

const methodsPush = [1, 2, 3, 4, 5, 6];

methodsPush.push(1);
console.log(methodsPush);

// Метод pop() удаляет последний элемент из массива и возвращает его значение.

const methodPop = [1, 2, 3, 4, 5, 6];

methodPop.pop();
console.log(methodPop);

// Метод unshift() добавляет один или более элементов в начало массива и возвращает новую длину массива.

const methodUnhift = [1, 2, 3, 4, 5, 6];

methodUnhift.unshift(2);
console.log(methodUnhift);

// Метод shift() удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива.

const methodShift = [1, 2, 3, 4, 5, 6];

methodShift.shift();
console.log(methodShift);

// Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.

const methodSplice = [1, 2, 3, 4, 5, 6];

methodSplice.splice(3, 1); // 3 - индекс,  1 - количество.
console.log(methodSplice);

// Метод slice() возвращает новый массив, содержащий копию части исходного массива.

const methodSlice = [1, 2, 3, 4, 5, 6];

// methodSlice.slice(1, 5); не работает
console.log(methodSlice.slice(1, 5));

// Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван, 
// соединённого с другими массивами и/или значениями, переданными в качестве аргументов.

const methodConcat = [1, 2, 3];
const methodConcat2 = [4, 5, 6];

const methodConcat3 = methodConcat.concat(methodConcat2);
console.log(methodConcat3);

// Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.

const methodIndexOf = [1, 2, 3, 4, 5, 6];

console.log(methodIndexOf.indexOf(5));

// Метод lastIndexOf() возвращает индекс последнего вхождения указанного значения в строковый объект String,
// на котором он был вызван, или -1, если ничего не было найдено. Поиск по строке ведётся от конца к началу.

const methodLastIndexOf = ['hi', 'hello', 3, 4, 5, 6];

console.log(methodLastIndexOf.lastIndexOf(3));

// Метод find() возвращает значение первого найденного в массиве элемента, 
// которое удовлетворяет условию переданному в callback функции.  В противном случае возвращается undefined.

const methodFind = [1, 2, 3, 4, 5, 6];

const methodFindResult = methodFind.find((person) => {
    console.log(person);
});

// Метод findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. 
// В противном случае возвращается -1.
 
function methodFindIndexResult(element, idx, array) {
    if(element === 7) {
        return true;
    } else {
        return false;
    }
}

console.log([1, 4, 7, 11, 45].findIndex(methodFindIndexResult));

// Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.

const methodForEach = ['a', 'b', 'c'];

methodForEach.forEach(element => console.log(element));

// Объект Map содержит пары ключ-значение и сохраняет порядок вставки. 
// Любое значение (как объекты, так и примитивы) могут быть использованы в качестве ключей.

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
        const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)}
        console.log(priceObj);
});

// Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив.

const methodSort = [1, 2, 4, 10, 22];

console.log(methodSort.sort());

const sortedPrices = methodSort.sort((a, b) => {
    if (a > b) {
        return 1;
    }else if (a === b) {
        return 0;
    }else {
        return -1;
    }
});

console.log(sortedPrices);
// console.log(sortedPrices.reverse());

//  Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);

// Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer));

// Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.

const data = 'new york;10.99;2000';

const transformedData = data.split(';');
console.log(transformedData);

// Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.

const nameFragments = ['Max', 'Schwarz'];

const name = nameFragments.join(' ');
console.log(name);

// operator ...

const copiedNameFragments = [...nameFragments];
nameFragments.push('Mr');
console.log(nameFragments, copiedNameFragments);

// Объекты Set позволяют вам сохранять уникальные значения любого типа, как примитивы, так и другие типы объектов.

const ids = new Set(['Hi', 'from', 'set!']);
ids.add(2);
if(ids.has('Hi')) {
    ids.delete('Hi');
}

for(const entry of ids.entries()) {
    console.log(entry[0]);
}

// WeakSet, WeakMap

let person = {name: 'Max'};
const persons = new WeakSet();
persons.add(person);

// ... some operations
// person = null;

console.log(persons);

const personData = new WeakMap();
personData.set(person, 'Extra info!')

person = null;

console.log(personData);




