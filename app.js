// mobileCartMinus
// mobileCartPlus
// mobileOrderQuanity
// mobileOrderAmount

document.getElementById('mobileCartPlus').addEventListener('click', event => {
    setCartOrder('mobile', 120000, true)
})
document.getElementById('mobileCartMinus').addEventListener('click', event => {
    setCartOrder('mobile', 120000, false)
})
document.getElementById('caseCartPlus').addEventListener('click', event => {
    setCartOrder('case', 1000, true)
})
document.getElementById('caseCartMinus').addEventListener('click', event => {
    setCartOrder('case', 1000, false)
})


function setCartOrder(productType, unitePrice, isCartPlus) {
    const cartQuantityElement = document.getElementById(productType + 'OrderQuanity')
    let cartQuantity = parseInt(cartQuantityElement.value)
    if (isCartPlus)
        cartQuantity += 1
    else {
        cartQuantity -= 1
    }
    cartQuantity < 0 ? cartQuantityElement.value = 0 : cartQuantityElement.value = cartQuantity

    const totalAmount = document.getElementById(productType + 'OrderAmount')
    totalAmount.innerText = cartQuantityElement.value * unitePrice

    calculateTotal()
}

function calculateTotal() {
    const mobileQuantity = parseInt(document.getElementById('mobileOrderQuanity').value)
    const caseQuantity = parseInt(document.getElementById('caseOrderQuanity').value)
    const subTotal = mobileQuantity * 120000 + caseQuantity * 1000
    const tax = subTotal * .1
    const total = subTotal + tax

    document.getElementById('subTotal').innerText = subTotal
    document.getElementById('tax').innerText = tax
    document.getElementById('total').innerText = total
}
