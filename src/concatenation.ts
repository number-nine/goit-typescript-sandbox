function concatenation(firstWord: string, secondWord: string) {
  console.log(`${firstWord} ${secondWord}`);
}

export { concatenation };

type User = {
  name: string;
  age: number;
};



type a = [1, 2, 3]

type b = keyof a;

// console.log(b.toString());

