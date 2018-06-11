/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

// Как правильно избавиться от последнего обрезания \n ?

function showSalary(data, age) {
    dataNew = data.filter(function(item) {
        return item.age<=age
    });

    result = dataNew.reduce( function(string,item) {
        return string + item.name + ', ' + item.balance +'\n'
    }, '' )

    result = result.slice(0,-1);

    return result
}
