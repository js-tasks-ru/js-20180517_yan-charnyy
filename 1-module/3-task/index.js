'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

//new commit
function getMinMax(str) {
    let numbers = [];
    numbers = findNumber(str);
    numbers.sort((a, b) => a - b);

    let answ = {
        min: numbers[0],
        max: numbers[numbers.length-1]
    }

    return answ;


    function findNumber(str) {
        let numbers = [],
            fnumber;
        while (str != '') {
            fnumber = parseFloat(str);

            if (str[0] === " " || str[0] === "+") {
                str = str.slice(1)

            } else if (!(isNaN(fnumber))) {
                numbers.push(fnumber);
                console.log(fnumber);
                str = str.slice(fnumber.toString().length);

            } else {
                str = str.slice(1);
            }

        }
        return numbers
    }

}