//if else statement to make sure html, css is done loading before JS
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded' , ready) // load page fully then run function 'ready'
} else {
    ready() //else use this function straight away
}

//make the ready function now and inside all the code to run after page is done loading
function ready() {
    // select all buttons with btn-danger class into a variable
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    console.log(removeCartItemButtons)
    // need to loop through these objects using a for loop (.length = number of remove buttons there is here)
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem) 
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove() // two parent elements to select entire parent element holding the cart. remove to delete items off cart.
    updateCartTotal() //call the function
}


//want to find the price and multiply by quantity of items for total cost 
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0] //we only want very first element inside array. because default returns array of elements but we only want one
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0 // make variable to update cart total
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0] // selected element but not item inside
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input') //selected element but not item inside
        [0]
        console.log('priceElement, quantityElement') //checks to see if our price element and quantity element is selected on console
        var price = parseFloat(priceElement.innerText.replace('$', '')) //grabs price of element. Use .replace to remove dollar sign. parsefloat returns value as number
        var quantity = quantityElement.value  // inputs dont have text inside them. ONly 'value'
        // console.log(price * quantity) //check to see if price is returned
        total = total + (price * quantity) //calculation into 'total' variable
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total //updates cart total price on website
}
 