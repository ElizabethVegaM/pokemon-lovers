/* eslint-disable no-undef */

export const reduceData = (data) => {
  const dataArr = new Set(data);
  return [...dataArr];
};

export const filterData = (data, condition) => {
  if (condition === 'all') return data;
  return data.filter(element => element.type.includes(condition));
}

export const sortData = (data, sortBy, sortOrder) => {
  const result = data.sort((a, b) => a[sortBy] > b[sortBy] ? 1 :-1);
  
  return ['des', 'high'].includes(sortOrder) ? result.reverse() : result;
};