const headers = document.querySelectorAll('.block__item-title');

headers.forEach(function (item) {

    item.addEventListener('click', function () {

        this.nextElementSibling.classList.toggle('block__hidden');
    })
});