
document.querySelector('.cart-photo').addEventListener('click', function() {
    document.querySelector('.cart').classList.toggle('active');
});


document.querySelector('.plus').addEventListener('click', function() {
    const numberElement = document.querySelector('.number');
    let current = parseInt(numberElement.textContent);
    numberElement.textContent = current-1;
});
document.querySelector('.minus').addEventListener('click', function() {
    const numberMinus = document.querySelector('.number');
    let minus = parseInt(numberMinus.textContent);
    numberMinus.textContent = minus+1;
});


// const cart = document.querySelector('.add-to-cart')
// document.querySelector('.add').addEventListener('click', function() {
//     let newCart = document.createElement('div');
//     let price = document.querySelector('.money').textContent;
//     let quantity = document.querySelector('.number').textContent;
//     newCart.innerHTML = `
//         <p class="parag">You choose Nike</p>
//         <p>${quantity}</p>
//         <p>Quantity: ${current}</p>`;
    
//         cart.appendChild(newCart)
// });

document.querySelector('.menu').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('active')
})


const smallSize = window.matchMedia("(max-width: 450px)");

function handleScreenChange(e) {
    if (e.matches) {
        document.querySelector('.menu').style.display = 'block';
        document.querySelector('.nav').style.display = 'none';
        document.querySelector('.main').style.display = 'flex'
        document.querySelector('.main').style.flexDirection = 'column'
        document.querySelector('.right-main').style.display = 'flex'
        document.querySelector('.right-main').style.flexDirection = 'column'
        document.querySelector('.right-main').style.width = '370px'
        document.querySelector('.aksha').style.display = 'flex'
        document.querySelector('.aksha').style.flexDirection = 'row'
        document.querySelector('.aksha').style.gap = '130px'
        document.querySelector('.aksha-line').style.marginTop = '25px'
        document.querySelector('.knopki').style.display = 'flex'
        document.querySelector('.knopki').style.flexDirection = 'column'
        document.querySelector('.numbers').style.width = '352px'
        document.querySelector('.add-to-cart').style.width = '370px'
        
    } 
    else {
        document.querySelector('.menu').style.display = 'none';
        document.querySelector('.nav').style.display = 'flex';
        document.querySelector('.main').style.display = 'flex'
        document.querySelector('.main').style.flexDirection = 'row'
        document.querySelector('.right-main').style.display = 'flex'
        document.querySelector('.right-main').style.flexDirection = 'column'
        document.querySelector('.right-main').style.width = '500px'

        document.querySelector('.aksha').style.display = 'flex'
        document.querySelector('.aksha').style.flexDirection = 'column'
        document.querySelector('.aksha').style.gap = '130px'
        document.querySelector('.aksha-line').style.marginTop = '-125px'
        document.querySelector('.knopki').style.display = 'flex'
        document.querySelector('.knopki').style.flexDirection = 'row'
        document.querySelector('.numbers').style.width = '202px'
        document.querySelector('.add-to-cart').style.width = '370px'
    }
}

handleScreenChange(smallSize);
smallSize.addEventListener('change', handleScreenChange);