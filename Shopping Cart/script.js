const populator = [
    {
        color: [239, 68, 68], colorStatus: 'Primary Color', colorName: 'Red', itemPrice: 16.00, id: 1, itemCount: 1
    },
    {
        color: [59, 130, 246], colorStatus: 'Primary Color', colorName: 'Blue', itemPrice: 16.00, id: 2, itemCount: 1
    },
    {
        color: [34, 197, 94], colorStatus: 'Primary Color', colorName: 'Green', itemPrice: 16.00, id: 3, itemCount: 1
    },
    {
        color: [234, 179, 8], colorStatus: 'Secondary Color', colorName: 'Yellow', itemPrice: 16.00, id: 4, itemCount: 1
    },
    {
        color: [249, 115, 22], colorStatus: 'Secondary Color', colorName: 'Orange', itemPrice: 16.00, id: 5, itemCount: 1
    },
    {
        color: [168, 85, 247], colorStatus: 'Secondary Color', colorName: 'Purple', itemPrice: 16.00, id: 6, itemCount: 1
    },
]

const KEY_PREFIX = 'cart-item'
const STORAGE_KEY = `${KEY_PREFIX}-array`


const storeItemTemplate = document.querySelector("#store-items-container-template")

let cartItemArray = returnCartItemArray()

const globalCartItemContainerTemplate = document.querySelector("#global-cart-item-container-template")

const storeItemsContainer = document.querySelector("#store-items-container")

const logoCounter = document.querySelector('#cart-item-counter')

const globalCartLogo = document.querySelector('#global-cart-logo')

const globalCartItemContainer = document.querySelector('#global-cart-item-container')

globalCartLogo.addEventListener('click', () => {
    globalCartItemContainer.classList.toggle('hidden')
})

function addItemInContainer(item) {
    const templateClone = storeItemTemplate.content.cloneNode(true)
    const colorBox = templateClone.querySelector('[data-storeItem="colorBox"]')
    let red = item.color[0]
    let green = item.color[1]
    let blue = item.color[2]
    colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    const colorStatus = templateClone.querySelector('[data-storeItem="colorStatus"]')
    colorStatus.textContent = item.colorStatus
    const colorName = templateClone.querySelector('[data-storeItem="colorName"]')
    colorName.textContent = item.colorName
    const itemPrice = templateClone.querySelector('[data-storeItem="itemPrice"]')
    itemPrice.textContent = '$' + item.itemPrice + '.00'
    const eachItemBox = templateClone.querySelector('[data-store="item"]')
    eachItemBox.dataset.itemId = item.id
    storeItemsContainer.appendChild(templateClone)
}

populator.forEach(element => {
    addItemInContainer(element)
})

cartItemArray.forEach(item => {
    showItemInCart(item)
})

if (cartItemArray.length > 0) {
    globalCartLogo.classList.remove('hidden')
    logoCounter.textContent = cartItemArray.length
}

addEventListener('click', e => {
    if (e.target.dataset.storeItem === 'button') {
        globalCartLogo.classList.remove('hidden')
        addItemInCart(e.target, populator)
        globalCartItemContainer.textContent = ''
        logoCounter.textContent = cartItemArray.length
        cartItemArray.forEach(item => {
            showItemInCart(item)
        })
    }
})

function addItemInCart(button, array) {
    const parent = button.closest("[data-store='item']")
    const parentDataSetId = Number(parent.dataset.itemId)
    let selectedItemArray = array.find(item => item.id === parentDataSetId)
    let pushingItem = cartItemArray.find(item => item.id === selectedItemArray.id)
    if (pushingItem === undefined) {
        cartItemArray.push(selectedItemArray)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItemArray))
    }
    else {
        const increaseItem = cartItemArray.find(item => item.id === selectedItemArray.id)
        increaseItem.itemCount = increaseItem.itemCount + 1
        increaseItem.itemPrice = increaseItem.itemPrice + 16
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItemArray))
    }
}

function returnCartItemArray() {
    const stringifiedArray = localStorage.getItem(STORAGE_KEY)
    return JSON.parse(stringifiedArray) || []
}

function showItemInCart(itemArray) {
    const cartTemplateClone = globalCartItemContainerTemplate.content.cloneNode(true)
    const itemColor = cartTemplateClone.querySelector('[data-global-cart-item="color"]')
    const itemBox = cartTemplateClone.querySelector('#item')
    itemBox.dataset.itemId = itemArray.id
    let red = itemArray.color[0]
    let green = itemArray.color[1]
    let blue = itemArray.color[2]
    const decreaseButton = cartTemplateClone.querySelector('[data-global-cart-item="decreaseButton"]')
    const removeButton = cartTemplateClone.querySelector('[data-global-cart-item="removeButton"]')
    removeButton.addEventListener('click', e => {
        globalCartItemContainer.textContent = ''
        removeItemFromCart(e.target)
        logoCounter.textContent = cartItemArray.length
        cartItemArray.forEach(item => {
            showItemInCart(item)
        })
    })
    itemColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    const colorName = cartTemplateClone.querySelector('[data-global-cart-item="colorName"]')
    colorName.textContent = itemArray.colorName
    const itemCount = cartTemplateClone.querySelector('[data-global-cart-item="calculate"]')
    const itemPrice = cartTemplateClone.querySelector('[data-global-cart-item="amount"]')
    if (itemArray.itemCount > 1) {
        decreaseButton.classList.toggle('hidden')
        itemCount.textContent = 'x' + itemArray.itemCount
        decreaseButton.addEventListener('click', () => {
            globalCartItemContainer.textContent = ''
            const decreaseItem = cartItemArray.find(item => item.id === Number(itemBox.dataset.itemId))
            console.log(itemBox.dataset.itemId)
            decreaseItem.itemCount = decreaseItem.itemCount - 1
            decreaseItem.itemPrice = decreaseItem.itemPrice - 16
            localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItemArray))
            cartItemArray.forEach(item => {
                showItemInCart(item)
            })
        })
    } else {
        decreaseButton.classList.add('hidden')
    }
    itemPrice.textContent = '$' + itemArray.itemPrice + '.00'
    globalCartItemContainer.appendChild(cartTemplateClone)
}

function removeItemFromCart(button) {
    const parent = button.closest("#item")
    const itemToBeRemoved = cartItemArray.find(item => item.id === Number(parent.dataset.itemId))
    console.log(itemToBeRemoved)
    cartItemArray = cartItemArray.filter(item => item.id !== itemToBeRemoved.id)
    if (cartItemArray.length === 0) {
        globalCartLogo.classList.add('hidden')
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItemArray))
}