const vendor = document.querySelector('#vendor')
const media = document.querySelector('#media')
const corp = document.querySelector('#corp')
const project = document.querySelector('#project')
const unlimited = document.querySelector('#unlimited')
const lifeTime = document.querySelector('#lifeTime')
const brand = document.querySelector('#brand')
const brandName = document.querySelector('#brandName')
const brandElements = document.querySelector('.brandElements')
const brandLine = document.querySelector('#brandLine')
const unlimitedLine = document.querySelector('#unlimitedLine')
const lifeTimeLine = document.querySelector('#lifeTimeLine')


document.getElementById("brex").addEventListener("click", (e) =>{
    e.preventDefault()
    const sum = vendor.value + media.value + corp.value + project.value
    const brex = sum* 0.3 
    const unlimitedRewards = sum * 1.1 
    const lifetimeRewards = sum *1.2
    brand.style.display= "block"
    brandName.style.display= "block"
    brandLine.style.display= "block"
    brandName.innerHTML = 'Brex'
    brand.innerHTML = '$'+brex
    unlimited.innerHTML = '$'+unlimitedRewards
    lifeTime.innerHTML = '$'+lifetimeRewards
    brandLine.outerHTML= "<hr class='lessHr' id='brandLine'>"
    unlimitedLine.outerHTML= "<hr class='midHr' id='unlimitedLine'>"
    lifeTimeLine.outerHTML= "<hr class='topHr' id='lifeTimeLine'>"
});

document.getElementById("stripe").addEventListener("click", (e) =>{
    e.preventDefault()
    const sum = vendor.value + media.value + corp.value + project.value
    const stripe = sum* 2.9 
    const unlimitedRewards = sum * 1.1 
    const lifetimeRewards = sum *1.2
    brand.style.display= "block"
    brandName.style.display= "block"
    brandLine.style.display= "block"
    brandName.innerHTML = 'Stripe'
    brand.innerHTML = '$'+stripe
    unlimited.innerHTML = '$'+unlimitedRewards
    lifeTime.innerHTML = '$'+lifetimeRewards
    brandLine.outerHTML= "<hr class='topHr' id='brandLine'>"
    unlimitedLine.outerHTML= "<hr class='lessHr' id='unlimitedLine'>"
    lifeTimeLine.outerHTML= "<hr class='midHr' id='lifeTimeLine'>"
});

document.getElementById("amex").addEventListener("click", (e) =>{
    e.preventDefault()
    const sum = vendor.value + media.value + corp.value + project.value
    const amex = sum* 0.3 
    const unlimitedRewards = sum * 1.1 
    const lifetimeRewards = sum *1.2
    brand.style.display= "block"
    brandName.style.display= "block"
    brandLine.style.display= "block"
    brandName.innerHTML = 'Amex'
    brand.innerHTML = '$'+amex
    unlimited.innerHTML = '$'+unlimitedRewards
    lifeTime.innerHTML = '$'+lifetimeRewards
    brandLine.outerHTML= "<hr class='topHr' id='brandLine'>"
    unlimitedLine.outerHTML= "<hr class='lessHr' id='unlimitedLine'>"
    lifeTimeLine.outerHTML= "<hr class='midHr' id='lifeTimeLine'>"
});