const buttonMnu = document.querySelector('.open-mnu');

buttonMnu.addEventListener('click', function() {
    const hiddenMnu = document.querySelector('.hidden-nav');
    hiddenMnu.classList.add('open-nav')
    hiddenMnu.addEventListener('click', function() {
        hiddenMnu.classList.remove('open-nav')
    })
})
