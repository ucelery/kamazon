var toggleCart = () => {
    let cartContainer = document.getElementById(`cart-container`);
    if(cartContainer.classList.contains('hide')) {
        cartContainer.classList.remove('hide');
    } else {
        cartContainer.classList.add('hide');
    }
};

var hideCart = () => {
    let cartContainer = document.getElementById(`cart`);
    if(cartContainer.classList.includes('hide')) {
        cartContainer.classList.add('hide');
    } else {
        cartContainer.classList.remove('hide');
    }
};

var log = (log) => {
    console.log(log);
}