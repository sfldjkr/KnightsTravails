let getTheShortestArray = (list) => {
  if (list.length === 1) return list[0];
  let countOfEachArray = [];
  list.forEach((subArr) => {
    countOfEachArray.push(subArr.length);
  });
  let sorted = [...countOfEachArray].sort((a, b) => a - b);
  let indexOfSmallestArr = countOfEachArray.indexOf(sorted[0]);
  return list[indexOfSmallestArr];
};

export { getTheShortestArray };
