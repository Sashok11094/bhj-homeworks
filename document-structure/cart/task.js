const products = document.querySelectorAll('.product')
// console.log(products)
const cartProduct = document.querySelector('.cart__products')
// console.log(cartProduct)
products.forEach(product => {
   const decBtn = product.querySelector('.product__quantity-control_dec')
   const incBtn = product.querySelector('.product__quantity-control_inc')
   const quantityValue = product.querySelector('.product__quantity-value')
   const addProduct = product.querySelector('.product__add')

   decBtn.addEventListener('click', () =>{
  
    const currentValue = parseInt(quantityValue.textContent)
    if(currentValue > 1) {
        quantityValue.textContent = currentValue - 1
    }
   })

   incBtn.addEventListener('click', () => {
  
    const currentValue = parseInt(quantityValue.textContent)
    quantityValue.textContent = currentValue + 1
   }) 
   
   addProduct.addEventListener('click', ( )=> {
        const productId = product.dataset.id
        const quantity = parseInt(quantityValue.textContent)
        const imgProduct = product.querySelector('.product__image').src

        const  existingProduct = cartProduct.querySelector(`[data-id="${productId}"]`)

        if (existingProduct) {
            const existingCount = parseInt(existingProduct.querySelector
            ('.cart__product-count').textContent)
            existingProduct.querySelector('.cart__product-count')
            .textContent = existingCount + quantity
        } else {
           const cartProducts = document.createElement('div')
           cartProducts.className = 'cart__product'
           cartProducts.dataset.id = productId

           const cartImg = document.createElement('img')
           cartImg.className = 'cart__product-image'
           cartImg.src = imgProduct

           const countProduct = document.createElement('div')
           countProduct.className = 'cart__product-count'
           countProduct.textContent = quantity

           cartProducts.appendChild(cartImg)
           cartProducts.appendChild(countProduct)
           cartProduct.appendChild(cartProducts) 
        }
    })
})