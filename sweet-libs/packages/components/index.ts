import hook from '@sweet/hooks'

interface Human {
  name: string;
  age: number;
}

const xiaoming: Human = {
  name: 'xiaoming',
  age: 12
}

console.info(hook)

console.info(xiaoming)