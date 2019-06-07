/* eslint-disable max-len */

const ISAcompare = (money: string) => {
  const salary = parseInt(money.replace(/\$|,/g, ''), 10);
  const thinkfulPercent = 0.15;
  const thinkfulMos = 3;
  const thinkfulMax = 28000;
  let thinkfulMaxNew = salary * thinkfulPercent * thinkfulMos;
  const thinkfulMaxPaidMos = (thinkfulMax / (salary / 12 * thinkfulPercent));

  const lambdaPercent = 0.17;
  const lambdaMos = 2;
  const lambdaMax = 30000;
  let lambdaMaxNew = salary * lambdaPercent * lambdaMos;
  const lambdaMaxPaidMos = (lambdaMax / (salary / 12 * lambdaPercent));


  const thinkfulTest = () => {
    if (thinkfulMaxNew < thinkfulMax) {
      console.log(`Thinkful max new -> ` + thinkfulMaxNew);
      return thinkfulMaxNew;
    }

    thinkfulMaxNew = thinkfulMax;
    console.log(`Thinkful max -> ` + thinkfulMax);
    return thinkfulMaxNew;
  };
  const lambdaTest = () => {
    if (lambdaMaxNew < lambdaMax) {
      console.log(`Lambda max new -> ` + lambdaMaxNew);
      return lambdaMaxNew;
    }

    lambdaMaxNew = lambdaMax;
    console.log(`Lambda max -> ` + lambdaMax);
    return lambdaMax;
  };
  const bigTest = () => {
    const insertHere = document.querySelector('.insertHere');
    if (isNaN(salary) && insertHere !== null) {
      // if (typeof 'salary' !== Number) {
      insertHere.innerHTML = `Please submit an integer. Example "1,000,000", "$100,000", or "1000" but not "one million" or "$100K".`;
    }
    else if (salary < 40000 && insertHere !== null) {
      insertHere.innerHTML = `Good news/Bad news. This salary doesnt make enough money to incur payments from either. However, supporting yourself will be difficult on this salary. Good luck on a better offer!<br>
            Feel free to submit another salary below.`;
    }
    else if (salary >= 40000 && salary < 50000 && insertHere !== null) {
      insertHere.innerHTML = `At this salary you wont be making any payments with Lambda School. Thinkful however will cost you approximately $${Math.ceil(salary * thinkfulPercent / 12).toLocaleString()} a month until your salary changes in which case we'll reevaluate.<br>
            Feel free to submit another salary below.`;
    }
    else if (thinkfulMaxNew < lambdaMaxNew && thinkfulMaxNew === 28000 && insertHere !== null) {
      insertHere.innerHTML = `<b>Thinkful</b> is the winner with a maximum payment of $${Math.round(thinkfulMaxNew).toLocaleString()}. You would save a total of $${Math.round((lambdaMaxNew - thinkfulMaxNew)).toLocaleString()} by picking Thinkful. <br>
        This bootcamp will cost you approximately $${Math.ceil(salary * thinkfulPercent / 12).toLocaleString()} a month before taxes. <br>
        At $${salary.toLocaleString()} annually, you'll hit the max of the Income Sharing Agreement in ${Math.ceil(thinkfulMaxPaidMos).toLocaleString()} months. <br>
        If you choose <i>Lambda School</i> instead, it will cost you approximately $${Math.ceil(salary * lambdaPercent / 12).toLocaleString()} a month before taxes.<br>
        Feel free to submit another salary below.`;
    }
    else if (thinkfulMaxNew < lambdaMaxNew && insertHere !== null) {
      insertHere.innerHTML = `<b>Thinkful</b> is the winner with a maximum payment of $${Math.round(thinkfulMaxNew).toLocaleString()}. You would save a total of $${Math.round((lambdaMaxNew - thinkfulMaxNew)).toLocaleString()} by picking Thinkful. <br>
        This bootcamp will cost you approximately $${Math.ceil(salary * thinkfulPercent / 12).toLocaleString()} a month before taxes. <br>
        If you choose <i>Lambda School</i> instead, it will cost you approximately $${Math.ceil(salary * lambdaPercent / 12).toLocaleString()} a month before taxes.<br>
        Feel free to submit another salary below.`;
    }
    else if (lambdaMaxNew < thinkfulMaxNew && insertHere !== null) {
      insertHere.innerHTML = `<b>Lambda School</b> is the winner with a maximum payment of $${Math.round(lambdaMaxNew).toLocaleString()}. You would save a total of $${Math.round((thinkfulMaxNew - lambdaMaxNew)).toLocaleString()} by choosing Lambda. <br>
        This bootcamp will cost you approximately ${Math.ceil(salary * lambdaPercent / 12)} a month before taxes. <br>
        At $${salary.toLocaleString()} annually, you'll hit the max of the Income Sharing Agreement in ${Math.ceil(lambdaMaxPaidMos)} months. <br>
        If you choose <i>Thinkful</i> instead, it will cost you approximately $${Math.ceil(salary * thinkfulPercent / 12)} a month before taxes.<br>
        Feel free to submit another salary below.`;
    }
    else if (lambdaMaxNew < thinkfulMaxNew && insertHere !== null) {
      insertHere.innerHTML = `<b>Lambda School</b> is the winner with a maximum payment of $${Math.round(lambdaMaxNew).toLocaleString()}. You would save a total of $${Math.round((thinkfulMaxNew - lambdaMaxNew)).toLocaleString()} by choosing Lambda. <br>
        This bootcamp will cost you approximately $${Math.ceil(salary * lambdaPercent / 12).toLocaleString()} a month before taxes. <br>
        If you choose <i>Thinkful</i> instead, it will cost you approximately ${Math.ceil(salary * thinkfulPercent / 12).toLocaleString()} a month before taxes.<br>
        Feel free to submit another salary below.`;
    }
  };
  thinkfulTest();
  lambdaTest();
  bigTest();
};

const submitter = document.querySelector('#submitter');
submitter.addEventListener('submit', (e) => {
  const listener = document.querySelector('.listener');
  if (listener !== null) {
    const money = listener.value;
    ISAcompare(money);
    listener.textContent = "";
    e.preventDefault();
  }
});
