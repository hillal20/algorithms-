class Queue {
  constructor() {
    this.storage = [];
    this.size = 0;
  }

  add(value) {
    this.storage.push(value);
    this.size++;
  }
  pop() {
    this.storage.pop();
    this.size--;
  }
  shift() {
    this.storage.shift();
    this.size--;
  }
  unshift(value) {
    this.storage.unshift(value);
  }
  size() {
    return this.storage.length;
  }
  storage() {
    return this.storage;
  }
}

const queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);
//queue.pop();
queue.shift();
queue.unshift(10);
console.log(queue.size);
console.log(queue.storage);
