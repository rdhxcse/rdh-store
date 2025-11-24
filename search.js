const searchInput = document.getElementById('searchInput');
    const cards = document.getElementsByClassName('product-card');

    searchInput.addEventListener('keyup', () => {
        let filter = searchInput.value.toLowerCase();
        for (let i = 0; i < cards.length; i++) {
            let item = cards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
            cards[i].style.display = item.includes(filter) ? '' : 'none';
        }
    });
