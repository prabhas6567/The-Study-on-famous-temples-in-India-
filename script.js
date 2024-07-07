// news.js
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const newsContainer = document.getElementById('news-container');

const temples = [
  {
    name: 'Tirupati Balaji Temple',
    url: 'https://news.tirumala.org/',
    description: 'One of the most famous temples in India, dedicated to Lord Venkateswara.'
  },
  {
    name: 'Golden Temple',
    url: 'https://www.indiatoday.in/india/story/golden-temple-blast-amritsar-explosion-suspect-detained-punjab-police-nia-2377559-2023-05-11',
    description: 'A beautiful gurudwara in Amritsar, Punjab, known for its stunning architecture.'
  },
  {
    name: 'Meenakshi Amman Temple',
    url: 'https://www.hindustantimes.com/india-news/unlock-4-madurai-s-meenakshi-amman-temple-opens-after-165-days/story-YJkWHBI9ikx9OcJTz2XCiK.html',
    description: 'A historic temple in Madurai, Tamil Nadu, dedicated to Goddess Meenakshi.'
  },
  {
    name: 'Vrindavan Temple',
    url: 'https://timesofindia.indiatimes.com/city/agra/after-two-deaths-vrindavan-temple-wary-of-year-end-rush/articleshow/106330950.cms',
    description: 'Vrindavan is considered to be a sacred place for Vaisnavism tradition of Hinduism.It is believed that Krishna spent part of his childhood inthis city.'
  },
  {
    name: 'Swarnagiri Temple',
    url: 'https://telanganatoday.com/swarnagiri-temple-an-architectural-marvel',
    description: 'The Swarnagiri Temple, a magnificent Hindu temple dedicated to Lord Venkateswara and located in Bhuvanagiri district, Telangana,'
  },
  {
    name: 'Kedarnath Temple',
    url: 'https://timesofindia.indiatimes.com/travel/travel-news/kedarnath-dham-update-over-75139-devotees-visited-the-temple-in-3-days-of-its-opening/articleshow/110085061.cms',
    description: 'The temple is located on the Garhwal Himalayan range near the Mandakini river, in the state of Uttarakhand, India.' },
  {
    name: 'Lotus Temple',
    url: 'https://www.hindustantimes.com/delhi/celebrations-at-lotus-temple/story-moGLNJtfVULsz4M5VQE6YK.html#:~:text=The%20architectural%20wonder%20of%20Delhi%2C%20the%20Bah%C3%A1%E2%80%99%C3%AD%20House,are%20spread%20across%20the%20globe%2C%20will%20be%20felicitated.',
    description: 'The Lotus Temple, located in New Delhi, India',
  }, 
  {
    name: 'Ram Mandir Temple',
    url: 'https://www.indiatoday.in/india/story/ayodhya-ram-mandir-live-updates-prana-pratishtha-ram-lalla-idol-pm-modi-havan-ceremony-2490613-2024-01-19',
    description: 'The Ram Mandir is a partially constructed Hindu temple complex in Ayodhya, Uttar Pradesh, India '},
    
    {
        name: 'Lotus Temple',
        url: 'https://www.hindustantimes.com/delhi/celebrations-at-lotus-temple/story-moGLNJtfVULsz4M5VQE6YK.html#:~:text=The%20architectural%20wonder%20of%20Delhi%2C%20the%20Bah%C3%A1%E2%80%99%C3%AD%20House,are%20spread%20across%20the%20globe%2C%20will%20be%20felicitated.',
        description: 'The Lotus Temple, located in New Delhi, India',
      },
  // Add more temples to the array
];

searchBtn.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredTemples = temples.filter(temple => temple.name.toLowerCase().includes(searchTerm));
  displayNews(filteredTemples);
});

// function to display news 

function displayNews(temples) {
  newsContainer.innerHTML = '';
  temples.forEach(temple => {
    const newsItem = document.createElement('div');
    newsItem.className = 'news-item';
    newsItem.innerHTML = `
      <h2>${temple.name}</h2>
      <p>${temple.description}</p>
      <a href="${temple.url}" target="_blank">Visit Website</a>
    `;
    newsContainer.appendChild(newsItem);
  });
}