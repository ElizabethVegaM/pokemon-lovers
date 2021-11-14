import { filterData, reduceData, sortData } from "../src/data.js";

const exampleArr = [
  {
    num: "001",
    name: "bulbasaur",
    type: ["grass", "poison"],
  },
  {
    num: "057",
    name: "primeape",
    type: ["fighting"],
  },
  {
    num: "086",
    name: "seel",
    type: ["water"],
  },
  {
    num: "162",
    name: "furret",
    type: ["normal"],
  },
];

describe("reduceData", () => {
  const testArr = [0, 4, 3, 4, 1, 5, 2, 3];

  it("is a function", () => {
    expect(typeof reduceData).toBe("function");
  });

  it("returns an array with no duplicated elements", () => {
    expect(reduceData(testArr)).toEqual([0, 4, 3, 1, 5, 2]);
  });
});

describe("filterData", () => {
  it("is a function", () => {
    expect(typeof filterData).toBe("function");
  });

  it("returns the same array when 'all' condition is given", () => {
    expect(filterData(exampleArr, "all")).toEqual(exampleArr);
  });

  it("returns an array with only 'fighting' type pokemones", () => {
    expect(filterData(exampleArr, "fighting")).toEqual([
      {
        num: "057",
        name: "primeape",
        type: ["fighting"],
      },
    ]);
  });
});

describe("sortData", () => {
  it("is a function", () => {
    expect(typeof sortData).toBe("function");
  });

  it("returns the same array when 'num' and 'asc' conditions are given", () => {
    expect(sortData(exampleArr, "num", "asc")).toEqual(exampleArr);
  });

  it("returns an array with reversed elements when 'des' condition is given", () => {
    expect(sortData(exampleArr, "num", "des")).toEqual(exampleArr.reverse());
  });

  it("returns an array with ordered elements by name when 'name' and 'asc' conditions are given", () => {
    expect(sortData(exampleArr, "name", "asc")).toEqual([
      {
        num: "001",
        name: "bulbasaur",
        type: ["grass", "poison"],
      },
      {
        num: "162",
        name: "furret",
        type: ["normal"],
      },
      {
        num: "057",
        name: "primeape",
        type: ["fighting"],
      },
      {
        num: "086",
        name: "seel",
        type: ["water"],
      },
    ]);
  });
});
