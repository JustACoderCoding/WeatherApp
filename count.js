const decreaseBtn = document.getElementById("decreaseBtn")
const increaseBtn = document.getElementById("increaseBtn")
const resetBtn = document.getElementById("resetBtn")

const countLabel = document.getElementById("countlabel");
function check(){
    let count = 0;

    increaseBtn.onclick = function(){
        count++;
        countLabel.textContent = count;
    }

    decreaseBtn.onclick = function(){
        count--;
        countLabel.textContent = count;

        if (count < 0){
            count = 0
            countLabel.textContent = count;
        }
    }

    resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}

} 


check()