const add = (a: number, b: number) => a + b;

function main(name: string) {
  const sum = add(1, 2);
  console.log(`hello webpack ${name} - ${sum}`);
}

main('fujia');
