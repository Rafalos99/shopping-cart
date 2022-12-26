// select all buttons with btn-danger class into a variable
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
// need to loop through these objects using a for loop (.length = number of remove buttons there is here)
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event) {
        console.log('clicked') //now when we click the remove buttons it logs that on the console
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove() // two parent elements to select entire parent element holding the cart. remove to delete items off cart.
    })
}

//want to find the price and multiply by quantity of items for total cost 
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i]
}