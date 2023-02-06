import { sum, subtract, division, multiply } from "../src/helpers/math-helper";

describe("Testando Math helper", () => {
  it("Testando a função sum", () => {
    // const n1 = 1;
    // const n2 = 2;
    // const soma = sum(n1, n2);

    //refactor:
    const soma = sum(1, 2);

    expect(soma).toBe(3);
  });

  it("Testando a função subtract", () => {
    const n1 = 3;
    const n2 = 2;
    const soma = subtract(n1, n2);

    expect(soma).toBe(1);
  });

  it("Testando a função division", () => {
    const n1 = 10;
    const n2 = 2;
    const soma = division(n1, n2);

    expect(soma).toBe(5);
  });

  it("Testando a função multiply", () => {
    const n1 = 333;
    const n2 = 2;
    const soma = multiply(n1, n2);

    expect(soma).toBe(666);
  });
});
