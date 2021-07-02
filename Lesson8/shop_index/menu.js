'use strict';

let fitlerPopup = document.querySelector('.filter__left_menu');
let fitlerLabel = document.querySelector('.filter__left_title');
let filterIcon = document.querySelector('.filter__left_img');

fitlerLabel.addEventListener('click', function() {
    fitlerPopup.classList.toggle('filter__left_hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterLabelPink');

    if (filterIcon.getAttribute('src') === 'img/filter1.svg') {
        filterIcon.setAttribute('src', 'img/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'img/filter1.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filter__left_header');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('filter__left_hidden');
    })
});

let filterSizes = document.querySelector('.filter__ridth_sizes');
let filterSizeWrap = document.querySelector('.filter__ridth_size');
filterSizeWrap.addEventListener('click', function() {
    filterSizes.classList.toggle('filter__ridth_hidden');
});
