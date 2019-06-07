// eslint-disable-next-line max-len
const numArray2 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', ' sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred', 'thousand'];
const stringToNum2 = (string: string): string | number => {
  const toNum = [];
  const strOutput = string.toLowerCase().split(/[- ]/);
  console.log(strOutput);
  if (strOutput.length === 1) {
    for (let i = 0; i < strOutput[i].length; i++) {
      // always said as one word
      if (strOutput[i] === numArray2[0]) {
        return 0;
      }
      else if (strOutput[i] === numArray2[1]) {
        return 1;
      }
      else if (strOutput[i] === numArray2[2]) {
        return 2;
      }
      else if (strOutput[i] === numArray2[3]) {
        return 3;
      }
      else if (strOutput[i] === numArray2[4]) {
        return 4;
      }
      else if (strOutput[i] === numArray2[5]) {
        return 5;
      }
      else if (strOutput[i] === numArray2[6]) {
        return 6;
      }
      else if (strOutput[i] === numArray2[7]) {
        return 7;
      }
      else if (strOutput[i] === numArray2[8]) {
        return 8;
      }
      else if (strOutput[i] === numArray2[9]) {
        return 9;
      }
      else if (strOutput[i] === numArray2[10]) {
        return 10;
      }
      else if (strOutput[i] === numArray2[11]) {
        return 11;
      }
      else if (strOutput[i] === numArray2[12]) {
        return 12;
      }
      else if (strOutput[i] === numArray2[13]) {
        return 13;
      }
      else if (strOutput[i] === numArray2[14]) {
        return 14;
      }
      else if (strOutput[i] === numArray2[15]) {
        return 15;
      }
      else if (strOutput[i] === numArray2[16]) {
        return 16;
      }
      else if (strOutput[i] === numArray2[17]) {
        return 17;
      }
      else if (strOutput[i] === numArray2[18]) {
        return 18;
      }
      else if (strOutput[i] === numArray2[19]) {
        return 19;
      }
      else if (strOutput[i] === numArray2[20]) {
        return 20;
      }
      else if (strOutput[i] === numArray2[21]) {
        return 30;
      }
      else if (strOutput[i] === numArray2[22]) {
        return 40;
      }
      else if (strOutput[i] === numArray2[23]) {
        return 50;
      }
      else if (strOutput[i] === numArray2[24]) {
        return 60;
      }
      else if (strOutput[i] === numArray2[25]) {
        return 70;
      }
      else if (strOutput[i] === numArray2[26]) {
        return 80;
      }
      else if (strOutput[i] === numArray2[27]) {
        return 90;
      }
    }
  }
  if (strOutput.length > 1) {
    for (let i = 0; i < strOutput.length; i++) {
      if (strOutput[i] === numArray2[28]) {
        toNum.push('00');
      }
      else if (strOutput[i] === numArray2[29]) {
        toNum.push('000');
      }
      else if (strOutput[i] === numArray2[1]) {
        toNum.push('1');
      }
      else if (strOutput[i] === numArray2[2]) {
        toNum.push('2');
      }
      else if (strOutput[i] === numArray2[3]) {
        toNum.push('3');
      }
      else if (strOutput[i] === numArray2[4]) {
        toNum.push('4');
      }
      else if (strOutput[i] === numArray2[5]) {
        toNum.push('5');
      }
      else if (strOutput[i] === numArray2[6]) {
        toNum.push('6');
      }
      else if (strOutput[i] === numArray2[7]) {
        toNum.push('7');
      }
      else if (strOutput[i] === numArray2[8]) {
        toNum.push('8');
      }
      else if (strOutput[i] === numArray2[9]) {
        toNum.push('9');
      }
      else if (strOutput[i] === numArray2[10]) {
        toNum.push('10');
      }
      else if (strOutput[i] === numArray2[11]) {
        toNum.push('11');
      }
      else if (strOutput[i] === numArray2[12]) {
        toNum.push('12');
      }
      else if (strOutput[i] === numArray2[13]) {
        toNum.push('13');
      }
      else if (strOutput[i] === numArray2[14]) {
        toNum.push('14');
      }
      else if (strOutput[i] === numArray2[15]) {
        toNum.push('15');
      }
      else if (strOutput[i] === numArray2[16]) {
        toNum.push('16');
      }
      else if (strOutput[i] === numArray2[17]) {
        toNum.push('17');
      }
      else if (strOutput[i] === numArray2[18]) {
        toNum.push('18');
      }
      else if (strOutput[i] === numArray2[19]) {
        toNum.push('19');
      }
      else if (strOutput[i] === numArray2[20]) {
        toNum.push('20');
      }
      else if (strOutput[i] === numArray2[21]) {
        toNum.push('30');
      }
      else if (strOutput[i] === numArray2[22]) {
        toNum.push('40');
      }
      else if (strOutput[i] === numArray2[23]) {
        toNum.push('50');
      }
      else if (strOutput[i] === numArray2[24]) {
        toNum.push('60');
      }
      else if (strOutput[i] === numArray2[25]) {
        toNum.push('70');
      }
      else if (strOutput[i] === numArray2[26]) {
        toNum.push('80');
      }
      else if (strOutput[i] === numArray2[27]) {
        toNum.push('90');
      }
    }
  }
  console.log(toNum.join(""));
  return Number(toNum.join(""));
};

console.log(stringToNum2("two thousand"));
