
const cryptocurrencies = [
    {number:'1 ', name: ' Bitcoin', symbol: 'BTC', cost:'$70 679'},
    {number:'2', name: ' Ethereum', symbol: 'ETH', cost:'$3 635'},
    {number:'3', name: 'Tether', symbol: 'XRP', cost:'$1'},
    {number:'4', name: 'BNB', symbol: 'BNB', cost:'$591,93'},
    {number:'5', name: 'Solana', symbol: 'SOL', cost:'$195,13'},
    {number:'6', name: 'XRP', symbol: 'XRP', cost:'$0,6443'},
    {number:'7', name: 'USD Coin', symbol: 'USDC', cost:'$0,9999'},
    {number:'8', name: 'Dogecoin', symbol: 'DOGE', cost:'$0,1851'},
    {number:'9', name: 'Cardano', symbol: 'ADA', cost:'$0,6788'},
    {number:'10', name: 'Acalanche', symbol: 'AVAX', cost:'$58,04'},
    {number:'11', name: 'Toncoin', symbol: 'TONCOIN', cost:'$5,24'},
    {number:'12', name: 'Shiba Inu', symbol: 'SHIB', cost:'$0,00003131'},
  ];
  
  
  function createCard(crypto) {
    const cardContainer = document.getElementById('cardContainer');
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <h1>${crypto.number}</h2>
      <h2>${crypto.name}</h2>
    <p>${crypto.symbol}</p>
    <h3>${crypto.cost}</h3>

    `;
    cardContainer.appendChild(card);
  }
  
  
  function displayCards() {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = ''; 
  
    cryptocurrencies.forEach(crypto => {
      createCard(crypto);
    });
  }
  
  
  function filterCards() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredCryptos = cryptocurrencies.filter(crypto =>
      crypto.name.toLowerCase().includes(searchTerm) || crypto.symbol.toLowerCase().includes(searchTerm) || crypto.number.toLowerCase().includes(searchTerm)
    );
    displayFilteredCards(filteredCryptos);
  }
  
 
  function displayFilteredCards(filteredCryptos) {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = ''; 
  
    filteredCryptos.forEach(crypto => {
      createCard(crypto);
    });
  }
  
  
  displayCards();
  
  
  document.getElementById('searchInput').addEventListener('input', filterCards);
  