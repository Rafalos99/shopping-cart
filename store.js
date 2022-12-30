//! Load page before js
//if else statement to make sure html, css is done loading before JS
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded' , ready) // load page fully then run function 'ready'
} else {
    ready() //else use this function straight away
}

//make the ready function now and inside all the code to run after page is done loading
function ready() {
    // select all buttons with btn-danger class into a variable
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    console.log(removeCartItemButtons)

    //! Remove cart item (1)
    // need to loop through these objects using a for loop (.length = number of remove buttons there is here)
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem) 
    }

    //! Quantity value (1)
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged) //'change' for anytime the input changes its value. Then run function 'quantityChanged' 
    }
}



//! Remove cart item (2)

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove() // two parent elements to select entire parent element holding the cart. remove to delete items off cart.
    updateCartTotal() //call the function
}

//! Quantity value (2)

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) { //if input is nothing or >= 0 then
        input.value = 1 //lowest quantity value set at 1
    }
    updateCartTotal() //call the function
}

//! Adding items to cart START

var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) { 
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked) 
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText //query for shop item name
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText //query for the price of shop item
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src //query for item image
    console.log(title, price, imageSrc) //now pressing 'add to cart' buttons will console log the names of item
    addItemToCart(title, price, imageSrc)
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    cartItems.append(cartRow)
}


//! Adding items to cart END


//! Update cart FINAL
//want to find the price and multiply by quantity of items for total cost 
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0] //we only want very first element inside array. because default returns array of elements but we only want one
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0 // make variable to update cart total
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0] // selected element but not item inside
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input') //selected element but not item inside
        [0]
        console.log('priceElement, quantityElement') //checks to see if our price element and quantity element is selected on console
        var price = parseFloat(priceElement.innerText.replace('$', '')) //grabs price of element. Use .replace to remove dollar sign. parsefloat returns value as number
        var quantity = quantityElement.value  // inputs dont have text inside them. ONly 'value'
        console.log(price * quantity) //check to see if price is returned
        total = total + (price * quantity) //calculation into 'total' variable
    }
    total = Math.round(total * 100) / 100 //round to 2 d.p for total cost
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total //updates cart total price on website
}
 