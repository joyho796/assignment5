function getNumbers() {
    //get input numbers
    var input = prompt("Enter your 5 numbers (1-48) seperated by spaces:");
    var nums = input.split(" ");
    for (i = 0; i < 5; i++) {
        nums[i] = parseInt(nums[i]);
    }
    lucky = parseInt(prompt("Enter your lucky number (1-18):"));

    document.getElementById("nums").innerHTML = nums.join(" ");
    document.getElementById("lucky").innerHTML = "&nbsp" + lucky;


    //sort and display numbers
    nums.sort(function(a, b){return a - b});
    document.getElementById("input").innerHTML = nums.join(" ");
    document.getElementById("inputLucky").innerHTML = "&nbsp" + lucky;

    //generate random numbers
    var lottoNums = [];
    for (i = 0; i < 5; i++) {
        lottoNums.push(Math.floor(Math.random() * 48) + 1);
    }
    var luckyLottoNum = Math.floor(Math.random() * 18) + 1;

    lottoNums.sort(function(a, b){return a - b});
    document.getElementById("lottery").innerHTML = lottoNums.join(" ");
    document.getElementById("lottoLucky").innerHTML = "&nbsp" + luckyLottoNum;

    //get number of matches
    var matches = 0;
    var luckyMatch = false;
    var luckyMessage = " + no lucky ball match";

    for (i = 0; i < 5; i++) {
        if(lottoNums.includes(nums[i])) {
            matches++;
            lottoNums.pop(i);
        }
    }

    if(lucky == luckyLottoNum) {
        luckyMatch = true;
        luckyMessage = " + lucky ball match!";
    }

    document.getElementById("matches").innerHTML = "Matches:&nbsp" + matches + luckyMessage;


    //calculate winnings
    var noLuckyWinnings = ["$0", "$0", "$3", "$20", "$200", "$25,000 a YEAR for LIFE"];
    var luckyWinnings = ["$4", "$6", "$25", "$150", "$5,000", "$7,000 a WEEK for LIFE"];
    var winnings = "";
    if(luckyMatch) {
        winnings = luckyWinnings[matches];
    } else {
        winnings = noLuckyWinnings[matches];
    }
    document.getElementById("winnings").innerHTML = "You won: " + winnings;

}

function getResults() {
    document.getElementById("summary").style.display = "block";
}

