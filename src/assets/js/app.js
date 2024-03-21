document.addEventListener("DOMContentLoaded", function() {

    /* Select time-frame */
    document.querySelectorAll('#configuration .btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove "active" class from all buttons
            console.log('hey')
            document.querySelectorAll('#configuration .btn').forEach(btn => {
                btn.classList.remove('selected');
            });
    
            // Add "active" class to the clicked button
            this.classList.add('selected');
            
            //modify time frames
        });
    });

    /* Create new card */
    const createCardBtn = document.getElementById('create-card-btn');
    createCardBtn.addEventListener('click', function() {
        const cardContainer = document.getElementById('card-container');
        const cardContainerChildrenCount = cardContainer.childElementCount;

        const card = createCard('Work', '32hrs', 'Last Week', '36hrs');
        const addCard = document.querySelector(".nb-card.new-card");

        cardContainer.removeChild(addCard)
        cardContainer.appendChild(card);
        if (cardContainerChildrenCount < 6) {
            cardContainer.appendChild(addCard)
        } 
    });
});