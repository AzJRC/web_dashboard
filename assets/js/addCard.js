function createAddCardComponent() {
    // Create elements
    const addCardDiv = document.createElement('div');
    addCardDiv.className = 'nb-card new-card d-flex flex-column';

    const innerCardDiv = document.createElement('div');
    innerCardDiv.className = 'inner-card bg-neutral-dark-blue';

    const cardHeaderDiv = document.createElement('div');
    cardHeaderDiv.className = 'card-header';

    const cardTitleP = document.createElement('p');
    cardTitleP.className = 'card-title';
    cardTitleP.textContent = 'New entry';

    const cardContentDiv = document.createElement('div');
    cardContentDiv.className = 'card-content';

    const createCardBtn = document.createElement('button');
    createCardBtn.id = 'create-card-btn';
    createCardBtn.className = 'btn d-flex';
    createCardBtn.textContent = '+';

    // Assemble the elements
    cardHeaderDiv.appendChild(cardTitleP);
    cardContentDiv.appendChild(createCardBtn);
    innerCardDiv.appendChild(cardHeaderDiv);
    innerCardDiv.appendChild(cardContentDiv);
    addCardDiv.appendChild(innerCardDiv);

    return addCardDiv;
}

export default createAddCardComponent;