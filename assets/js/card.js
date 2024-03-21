function createCard(title, time, lastTime, hours) {
    // Create elements
    const card = document.createElement('div');
    card.className = 'nb-card';

    const img = document.createElement('img');
    img.src = './images/icon-work.svg';
    img.className = 'card-bg-icon';
    img.alt = 'card icon';

    const innerCard = document.createElement('div');
    innerCard.className = 'inner-card bg-neutral-dark-blue';

    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header d-flex flex-row';

    const cardTitle = document.createElement('p');
    cardTitle.className = 'card-title d-flex mx-1';
    cardTitle.textContent = title;

    const ellipsisButton = document.createElement('button');
    ellipsisButton.className = 'btn card-btn d-flex';

    const ellipsisIcon = document.createElement('img');
    ellipsisIcon.src = './images/icon-ellipsis.svg';
    ellipsisIcon.alt = 'ellipsis icon';
    ellipsisIcon.style.width = '1rem';

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content d-flex';

    const cardTime = document.createElement('p');
    cardTime.className = 'card-time m-0 p-0';
    cardTime.textContent = time;

    const cardExtraInfo = document.createElement('p');
    cardExtraInfo.className = 'card-extra-info m-0 p-0';
    cardExtraInfo.innerHTML = `<span class="last-time mx-1">${lastTime}</span> - <span class="hours mx-1">${hours}</span>`;

    // Assemble the elements
    ellipsisButton.appendChild(ellipsisIcon);
    cardHeader.appendChild(cardTitle);
    cardHeader.appendChild(ellipsisButton);
    cardContent.appendChild(cardTime);
    cardContent.appendChild(cardExtraInfo);
    innerCard.appendChild(cardHeader);
    innerCard.appendChild(cardContent);
    card.appendChild(img);
    card.appendChild(innerCard);

    return card;
}

export default createCard;