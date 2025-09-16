
  //Exercise 1: Hash Triangle

  hashes = "#";
  for(let x = 0; x < 7; x ++){
    console.log(hashes);
    hashes += "#";
  }

  //Exercise 2: FizzBuzz

  for(let x = 1; x < 101; x ++){
    theThing = x;
    if (theThing % 3 == 0){
      if (theThing % 5 == 0){
        theThing = "FizzBuzz";
      } else
      theThing = "Fizz";
    } else if (theThing % 5 == 0){
      theThing = "Buzz";
    }
    console.log(theThing);
  }

  //Exercise 3: Chessboard

  size = 8;
  twoRows = " # # # #\n# # # # ";
  for(let x = 0; x < size/2 - 1; x ++){
    twoRows = twoRows + "\n" + " # # # #\n# # # # ";
  }
  console.log(twoRows);



