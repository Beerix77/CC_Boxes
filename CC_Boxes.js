
//Safety Deposit Boxes Challenge -- JAVASCRIPT
var boxes = prompt("Input items string: ");
var box = prompt("Enter required box: ");

var individualBoxes = boxes.split(",");
var check = false;
var numberOfBoxes = individualBoxes.length;
var time = 5;
var j = 0;



for (i = 0; i <= numberOfBoxes; i++){               //check if item exists
    if (individualBoxes[i] == box){
        check = true;
        }
    }

if (check == true ? BoxesTime() : console.log("Item does not exist")); 

    function BoxesTime() {
            for (k = 0; k <= numberOfBoxes; k++){
                if (individualBoxes[j] != box){
                j = j + 1;
                time = time + 5;
            }
        }

        console.log(time);
    }
//END