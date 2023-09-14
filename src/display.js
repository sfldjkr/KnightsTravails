let showAnswer = (finalList) => {
  console.log(finalList);
  if (finalList.length > 0) {
    let answer = `You've made it in ${
      finalList.length - 1
    } movies! Here's your path:`;
    for (let i = 0; i < finalList.length; i++) {
      answer += `
      [${finalList[i]}]`;
    }
    console.log(answer);
  }
};

export { showAnswer };
