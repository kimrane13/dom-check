  // like article      
const heart=document.querySelectorAll("svg");
for(let i=0;i<heart.length;i++){
  heart[i].addEventListener('click', ()=>{
  heart[i].classList.toggle("heart")

})
}
// supréssion d'articles
  var removeCartItemButtons = document.getElementsByClassName("delete-btn")
  for (let j= 0; j < removeCartItemButtons.length; j++) {
      let button = removeCartItemButtons[j]
      button.addEventListener('click', removeCartItem)
  }

  function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    
}
// quantité article

var quantityInputs = document.getElementsByClassName('plus-btn')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('click', quantityChanged)
    }
    function quantityChanged(event) {
      var input = event.target
      if (isNaN(input.value) || input.value <= 0) {
          input.value = 1
      }
      console.log(quantityInputs);
  }