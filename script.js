const menu = document.getElementById("menu")
const cadtBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItemsContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const checkoutBtn = document.getElementById("checkout-btn")
const closeMotalBtn = document.getElementById("close-modal-btn")
const cartCounter = dogument.getElementById("cart-cout")
const addressInput = document.getElementById("address")
const addressWarn = document.getElementById("address-warn")


// abrir modal carrinho
cartBtn.addEventListener("click", function(){
    cartModal.style.display = "flex"
})

//fechar modal ao clicar fora
cartModal.addEventListener("click", function(event){
    if(event.target === cartModal){
        cartModal.style.display = "none"
    }
})

closeMotalBtn.addEventListener("click", function(){
    cartModal.style.display = "none"
})


menu.addEventListener("click", function(event){
    let parentButton = event.target.closet(".add-to-cart-btn")
    if(parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))
    }
})