// Convert strings to numbers
// one = 1, thousand = 1000, million = 1000000, etc

// #TODO create array of numbers as strings
// eslint-disable-next-line max-len
const numArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', ' sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred', 'thousand'];
const stringToNum = (string: string): string | number => {
  // ## TODO add regex for '-'
  const strOutput = string.toLowerCase().split(/[- ]/);
  let toNum = 0;
  if (strOutput.length === 1) {
    for (let i = 0; i < strOutput[i].length; i++) {
      // always said as one word
      if (strOutput[i] === numArray[0]) {
        toNum = 0;
      }
      else if (strOutput[i] === numArray[1]) {
        toNum = 1;
      }
      else if (strOutput[i] === numArray[2]) {
        toNum = 2;
      }
      else if (strOutput[i] === numArray[3]) {
        toNum = 3;
      }
      else if (strOutput[i] === numArray[4]) {
        toNum = 4;
      }
      else if (strOutput[i] === numArray[5]) {
        toNum = 5;
      }
      else if (strOutput[i] === numArray[6]) {
        toNum = 6;
      }
      else if (strOutput[i] === numArray[7]) {
        toNum = 7;
      }
      else if (strOutput[i] === numArray[8]) {
        toNum = 8;
      }
      else if (strOutput[i] === numArray[9]) {
        toNum = 9;
      }
      else if (strOutput[i] === numArray[10]) {
        toNum = 10;
      }
      else if (strOutput[i] === numArray[11]) {
        toNum = 11;
      }
      else if (strOutput[i] === numArray[12]) {
        toNum = 12;
      }
      else if (strOutput[i] === numArray[13]) {
        toNum = 13;
      }
      else if (strOutput[i] === numArray[14]) {
        toNum = 14;
      }
      else if (strOutput[i] === numArray[15]) {
        toNum = 15;
      }
      else if (strOutput[i] === numArray[16]) {
        toNum = 16;
      }
      else if (strOutput[i] === numArray[17]) {
        toNum = 17;
      }
      else if (strOutput[i] === numArray[18]) {
        toNum = 18;
      }
      else if (strOutput[i] === numArray[19]) {
        toNum = 19;
      }
      else if (strOutput[i] === numArray[20]) {
        toNum = 20;
      }
      else if (strOutput[i] === numArray[21]) {
        toNum = 30;
      }
      else if (strOutput[i] === numArray[22]) {
        toNum = 40;
      }
      else if (strOutput[i] === numArray[23]) {
        toNum = 50;
      }
      else if (strOutput[i] === numArray[24]) {
        toNum = 60;
      }
      else if (strOutput[i] === numArray[25]) {
        toNum = 70;
      }
      else if (strOutput[i] === numArray[26]) {
        toNum = 80;
      }
      else if (strOutput[i] === numArray[27]) {
        toNum = 90;
      }
    }
  }
  // if (strOutput.includes('hundred')) { }
  // if (strOutput.includes('thousand')) { }
  // if (strOutput.length === 2) {
  //   for (let i = 0; i < strOutput.length; i++) {
  //     //always single words therefore plus equals
  //     if (strOutput[i] === numArray[1]) {
  //       toNum += 1;
  //     }
  //     else if (strOutput[i] === numArray[2]) {
  //       toNum += 2;
  //     }
  //     else if (strOutput[i] === numArray[3]) {
  //       toNum += 3;
  //     }
  //     else if (strOutput[i] === numArray[4]) {
  //       toNum += 4;
  //     }
  //     else if (strOutput[i] === numArray[5]) {
  //       toNum += 5;
  //     }
  //     else if (strOutput[i] === numArray[6]) {
  //       toNum += 6;
  //     }
  //     else if (strOutput[i] === numArray[7]) {
  //       toNum += 7;
  //     }
  //     else if (strOutput[i] === numArray[8]) {
  //       toNum += 8;
  //     }
  //     else if (strOutput[i] === numArray[9]) {
  //       toNum += 9;
  //     }
  //     else if (strOutput[i] === numArray[10]) {
  //       toNum += 10;
  //     }
  //     else if (strOutput[i] === numArray[11]) {
  //       toNum += 11;
  //     }
  //     else if (strOutput[i] === numArray[12]) {
  //       toNum += 12;
  //     }
  //     else if (strOutput[i] === numArray[13]) {
  //       toNum += 13;
  //     }
  //     else if (strOutput[i] === numArray[14]) {
  //       toNum += 14;
  //     }
  //     else if (strOutput[i] === numArray[15]) {
  //       toNum += 15;
  //     }
  //     else if (strOutput[i] === numArray[16]) {
  //       toNum += 16;
  //     }
  //     else if (strOutput[i] === numArray[17]) {
  //       toNum += 17;
  //     }
  //     else if (strOutput[i] === numArray[18]) {
  //       toNum += 18;
  //     }
  //     else if (strOutput[i] === numArray[19]) {
  //       toNum += 19;
  //     }
  //     else if (strOutput[i] === numArray[20]) {
  //       toNum += 20;
  //     }
  //     else if (strOutput[i] === numArray[21]) {
  //       toNum += 30;
  //     }
  //     else if (strOutput[i] === numArray[22]) {
  //       toNum += 40;
  //     }
  //     else if (strOutput[i] === numArray[23]) {
  //       toNum += 50;
  //     }
  //     else if (strOutput[i] === numArray[24]) {
  //       toNum += 60;
  //     }
  //     else if (strOutput[i] === numArray[25]) {
  //       toNum += 70;
  //     }
  //     else if (strOutput[i] === numArray[26]) {
  //       toNum += 80;
  //     }
  //     else if (strOutput[i] === numArray[27]) {
  //       toNum += 90;
  //     }
  //     else if (strOutput[i] === numArray[20]) {
  //       toNum = 20;
  //     }
  //     else if (strOutput[i] === numArray[21]) {
  //       toNum = 30;
  //     }
  //     else if (strOutput[i] === numArray[22]) {
  //       toNum = 40;
  //     }
  //     else if (strOutput[i] === numArray[23]) {
  //       toNum = 50;
  //     }
  //     else if (strOutput[i] === numArray[24]) {
  //       toNum = 60;
  //     }
  //     else if (strOutput[i] === numArray[25]) {
  //       toNum = 70;
  //     }
  //     else if (strOutput[i] === numArray[26]) {
  //       toNum = 80;
  //     }
  //     else if (strOutput[i] === numArray[27]) {
  //       toNum = 90;
  //     }
  //     else if (strOutput[i] === numArray[28]) {
  //       toNum = 100;
  //     }
  //     else if (strOutput[i] === numArray[29]) {
  //       toNum = 1_000;
  //     }
  //     else if (strOutput[i] === numArray[30]) {
  //       toNum = 1_000_000;
  //     }
  //     else if (strOutput[i] === numArray[31]) {
  //       toNum = 1_000_000_000;
  //     }
  //     else if (strOutput[i] === numArray[32]) {
  //       toNum = 1_000_000_000;
  //     }
  //   }
  // }
  return toNum;
};
console.log(stringToNum("hundred"));


// ##TODO if needed use below for function

//   if (string === "zero") {
//     toNum = 0;
//   }
//   else if (string === 'one') {
//     toNum = 1;
//   }
//   else if (string === 'two') {
//     toNum = 2;
//   }
//   else if (string === 'three') {
//     toNum = 3;
//   }
//   else if (string === 'four') {
//     toNum = 4;
//   }
//   else if (string === 'five') {
//     toNum = 5;
//   }
//   else if (string === 'six') {
//     toNum = 6;
//   }
//   else if (string === 'seven') {
//     toNum = 7;
//   }
//   else if (string === 'eight') {
//     toNum = 8;
//   }
//   else if (string === 'nine') {
//     toNum = 9;
//   }
//   else if (string === 'ten') {
//     toNum = 10;
//   }
//   else if (string === 'eleven') {
//     toNum = 11;
//   }
//   else if (string === 'twelve') {
//     toNum = 12;
//   }
//   else if (string === 'thirteen') {
//     toNum = 13;
//   }
//   else if (string === 'fourteen') {
//     toNum = 14;
//   }
//   else if (string === 'fifteen') {
//     toNum = 15;
//   }
//   else if (string === 'sixteen') {
//     toNum = 16;
//   }
//   else if (string === 'seventeen') {
//     toNum = 17;
//   }
//   else if (string === 'eighteen') {
//     toNum = 18;
//   }
//   else if (string === 'nineteen') {
//     toNum = 19;
//   }
//   else if (string === 'twenty') {
//     toNum = 20;
//   }
//   else if (string === 'thirty') {
//     toNum = 30;
//   }
//   else if (string === 'fourty') {
//     toNum = 40;
//   }
//   else if (string === 'fifty') {
//     toNum = 50;
//   }
//   else if (string === 'sixty') {
//     toNum = 60;
//   }
//   else if (string === 'sixty') {
//     toNum = 70;
//   }
//   else if (string === 'eighty') {
//     toNum = 80;
//   }
//   else if (string === 'ninety') {
//     toNum = 90;
//   }
//   else if (string === 'hundred') {
//     toNum = 100;
//   }
//   else if (string === 'thousand') {
//     toNum = 1_000;
//   }
//   else if (string === 'million') {
//     toNum = 1_000_000;
//   }
//   else if (string === 'billion') {
//     toNum = 1_000_000_000;
//   }
//   else if (string === 'trillion') {
//     toNum = 1000000000000;
//   }
// return toNum;
