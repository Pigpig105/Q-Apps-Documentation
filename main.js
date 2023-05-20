// Open the popup when the button is clicked
document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("myPopup").style.display = "block";
});
  
  // Close the popup when the user clicks outside of it
  window.addEventListener("click", function(event) {
    var popup = document.getElementById("myPopup");
    if (event.target == popup) {
      popup.style.display = "none";
    }
});

document.getElementById("SEND_QORT_Submit").onclick = function(){
    SEND_COIN_destinationAddress = document.getElementById("SEND_COIN_destinationAddress").value;
    SEND_COIN_amount = document.getElementById("SEND_COIN_amount").value;
    SEND_COIN_amount = Number(SEND_COIN_amount);
    sendCoin();
}

async function sendCoin() {
    let res = await qortalRequest({
      action: "SEND_COIN",
      coin: "QORT",
      destinationAddress: SEND_COIN_destinationAddress,
      amount: SEND_COIN_amount
    });
  }
  
  setTimeout(sendCoin, 0);
