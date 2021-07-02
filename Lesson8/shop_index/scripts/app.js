'use strict';

let fitlerPopup = document.querySelector('.filter__menuleft');
let fitlerLabel = document.querySelector('.filter__titleleft');
let filterIcon = document.querySelector('.filter__imgleft');

fitlerLabel.addEventListener('click', function() {
    fitlerPopup.classList.toggle('filter__hiddenleft');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterLabelPink');

    if (filterIcon.getAttribute('src') === 'img/filter1.svg') {
        filterIcon.setAttribute('src', 'img/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'img/filter1.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filter__headerleft');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('.filter__hiddenleft');
    })
});

let filterSizes = document.querySelector('.filter__sizesridth');
let filterSizeWrap = document.querySelector('.filter__sizeridth');
filterSizeWrap.addEventListener('click', function() {
    filterSizes.classList.toggle('filter__hiddenridth');
});