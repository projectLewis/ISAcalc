/* eslint-disable max-len */
const ISAcompare = (salary) => {
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
        if (salary < 40000) {
            document.querySelector('.insertHere').textContent = `Good news/Bad news. This salary doesnt make enough money to incur payments from either. However, supporting yourself will be difficult on this salary. Good luck on a better offer!`;
        }
        else if (salary >= 40000 && salary < 50000) {
            document.querySelector('.insertHere').textContent = `At this salary you wont be making any payments with Lambda School. Thinkful however will cost you approximately ${Math.ceil(salary * thinkfulPercent / 12)} a month until your salary changes in which case we'll reevaluate.`;
        }
        else if (thinkfulMaxNew < lambdaMaxNew && thinkfulMaxNew === 28000) {
            document.querySelector('.insertHere').innerHTML = `<b>Thinkful</b> is the winner with a maximum payment of $${Math.round(thinkfulMaxNew)}. You would save a total of $${Math.round((lambdaMaxNew - thinkfulMaxNew))} by picking Thinkful. <br>
        This bootcamp will cost you approximately ${Math.ceil(salary * thinkfulPercent / 12)} a month before taxes. <br>
        At $${salary} annually, you'll hit the max of the Income Sharing Agreement in ${Math.ceil(thinkfulMaxPaidMos)} months. <br>
        If you choose <i>Lambda School</i> instead, it will cost you approximately ${Math.ceil(salary * lambdaPercent / 12)} a month before taxes.`;
        }
        else if (thinkfulMaxNew < lambdaMaxNew) {
            document.querySelector('.insertHere').innerHTML = `<b>Thinkful</b> is the winner with a maximum payment of $${Math.round(thinkfulMaxNew)}. You would save a total of $${Math.round((lambdaMaxNew - thinkfulMaxNew))} by picking Thinkful. <br>
        This bootcamp will cost you approximately ${Math.ceil(salary * thinkfulPercent / 12)} a month before taxes. <br>
        If you choose <i>Lambda School</i> instead, it will cost you approximately ${Math.ceil(salary * lambdaPercent / 12)} a month before taxes.`;
        }
        else if (lambdaMaxNew < thinkfulMaxNew) {
            document.querySelector('.insertHere').innerHTML = `<b>Lambda School</b> is the winner with a maximum payment of $${Math.round(lambdaMaxNew)}. You would save a total of $${Math.round((thinkfulMaxNew - lambdaMaxNew))} by choosing Lambda. <br>
        This bootcamp will cost you approximately ${Math.ceil(salary * lambdaPercent / 12)} a month before taxes. <br>
        At $${salary} annually, you'll hit the max of the Income Sharing Agreement in ${Math.ceil(lambdaMaxPaidMos)}. <br>
        If you choose <i>Thinkful</i> instead, it will cost you approximately ${Math.ceil(salary * thinkfulPercent / 12)} a month before taxes.`;
        }
        else if (lambdaMaxNew < thinkfulMaxNew) {
            document.querySelector('.insertHere').innerHTML = `<b>Lambda School</b> is the winner with a maximum payment of $${Math.round(lambdaMaxNew)}. You would save a total of $${Math.round((thinkfulMaxNew - lambdaMaxNew))} by choosing Lambda. <br>
        This bootcamp will cost you approximately ${Math.ceil(salary * lambdaPercent / 12)} a month before taxes. <br>
        If you choose <i>Thinkful</i> instead, it will cost you approximately ${Math.ceil(salary * thinkfulPercent / 12)} a month before taxes.`;
        }
    };
    // const lastSalaryEval = () => {
    //     if (salary >= 50000) {
    //         bigTest();
    //     }
    //     else if (salary >= 40000) {
    //         document.querySelector('.insertHere').textContent = `At this salary you wont be making any payments with Lambda School. Thinkful however will cost you approximately ${Math.ceil(salary * thinkfulPercent / 12)} a month until your salary changes in which case we'll reevaluate.`;
    //     }
    //     else {
    //         document.querySelector('.insertHere').textContent = `Good news/Bad news. This salary doesnt make enough money to incur payments from either. However, supporting yourself will be difficult on this salary. Good luck on a better offer!`;
    //     }
    // };
    thinkfulTest();
    lambdaTest();
    bigTest();
    // lastSalaryEval();
};

const submitter = document.querySelector('.submitter');
// const compareSchool = ISAcompare(money);
submitter.addEventListener('click', () => {
    const money = document.querySelector('.listener').value;
    ISAcompare(money);
});
document.querySelector('.listener').addEventListener('keypress', (e) => {
    const key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
        const money = document.querySelector('.listener').value;
        ISAcompare(money);
    }
});
