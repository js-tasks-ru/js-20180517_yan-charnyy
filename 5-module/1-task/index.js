'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {

    let allTr = table.querySelector('tbody').getElementsByTagName('tr');
    const GENDERCOLUMN = 3, AGECOLUMN = 2;

    for (let item of allTr) {
        if (item.querySelector('td:last-child').getAttribute('data-available') === 'true') {
            item.classList.add('available')
        }else if (item.querySelector('td:last-child').getAttribute('data-available') === 'false') {
            item.classList.add('unavailable')
        }else {item.hidden = true}

        item.querySelector(`td:nth-child(${GENDERCOLUMN})`).innerHTML === 'm' ? item.classList.add('male'):item.classList.add('female');
        item.querySelector(`td:nth-child(${AGECOLUMN})`).innerHTML < 19 ? item.style="text-decoration: line-through": null;

    }

}