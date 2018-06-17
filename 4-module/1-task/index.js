'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
    let ul = document.createElement('ul');
    ul.innerHTML = friends.map(item => {
        return `
          <li>
            <span class="firstName">${item.firstName}</span>
            <span class="lastName">${item.lastName}</span>
          </li>
        `;

    }).join('')

    return ul
}
