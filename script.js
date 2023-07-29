let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=6f0187fcaef443bcb877d1956d88eba8"
let response=fetch(url)
response.then((v)=>{
  return v.json()
}).then((articles)=>{
//   console.log(articles)
   let ihtml=""
   for (const article of articles.articles) {
    if (article.urlToImage && article.content) {
    console.log(article.author);
    ihtml += ` <div class="card">
                                <div class='card-body'>
                                <a href='${article.url}'>
                                        <h5 class="card-title">${article.source.name}</h5>
                                        <img src = ${article.urlToImage} ></img>
                                        </a>
                                        <p class="card-text"> ${article.title}</p>
                                        <p class='date'>${article.publishedAt}</p>
                                        <p class='Content'>  ${article.content}</p>
                                </div>  
                        </div>`
    }
   }
  let Container=document.querySelector('.container');
  console.log(Container)
Container.innerHTML=ihtml
})
// /* <p><b>Description:</b> ${article.description}<br></br> */


// Your existing code to fetch and display news articles goes here

// Function to fetch and display news articles based on category
function fetchNewsByCategory(category) {
    const API_KEY = "6f0187fcaef443bcb877d1956d88eba8";
    const CATEGORY_URL = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`;
  
    fetch(CATEGORY_URL)
      .then((response) => response.json())
      .then((articles) => {
        let ihtml = "";
        for (const article of articles.articles) {
            if (article.urlToImage && article.content) {
          ihtml += `
            <div class="card">
              <div class='card-body'>
                <a href='${article.url}'>
                  <h5 class="card-title">${article.source.name}</h5>
                  <img src="${article.urlToImage}" alt="News Image">
                </a>
                <p class="card-text">${article.title}</p>
                <p class='date'>${article.publishedAt}</p>
                <p class='Content'>${article.content}</p>
              </div>
            </div>`;
        }
    }
        let Container = document.querySelector('.container');
        Container.innerHTML = ihtml;
      });
  }
  
  // Event listener functions for each category button
  function handleGeneralClick() {
    fetchNewsByCategory('general');
  }
  
  function handleBusinessClick() {
    fetchNewsByCategory('business');
  }
  
  function handleSportsClick() {
    fetchNewsByCategory('sports');
  }
  
  function handleTechnologyClick() {
    fetchNewsByCategory('technology');
  }
  
  function handleEntertainmentClick() {
    fetchNewsByCategory('entertainment');
  }
  
  // Add event listeners to the category buttons
  let generalButton = document.getElementById('general');
  let businessButton = document.getElementById('business');
  let sportsButton = document.getElementById('sports');
  let technologyButton = document.getElementById('technology');
  let entertainmentButton = document.getElementById('entertainment');
  
  generalButton.addEventListener('click', handleGeneralClick);
  businessButton.addEventListener('click', handleBusinessClick);
  sportsButton.addEventListener('click', handleSportsClick);
  technologyButton.addEventListener('click', handleTechnologyClick);
  entertainmentButton.addEventListener('click', handleEntertainmentClick);
  


  // Function to fetch and display news articles based on the user's search query
function fetchSearchNews() {
    const API_KEY = "6f0187fcaef443bcb877d1956d88eba8";
    const searchQuery = document.getElementById('search').value;
    const SEARCH_NEWS_URL = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${API_KEY}`;
  
    fetch(SEARCH_NEWS_URL)
      .then((response) => response.json())
      .then((articles) => {
        let ihtml = "";
        for (const article of articles.articles) {
            if (article.urlToImage && article.content) {
          ihtml += `
            <div class="card">
              <div class='card-body'>
                <a href='${article.url}'>
                  <h5 class="card-title">${article.source.name}</h5>
                  <img src="${article.urlToImage}" alt="News Image">
                </a>
                <p class="card-text">${article.title}</p>
                <p class='date'>${article.publishedAt}</p>
                <p class='Content'>${article.content}</p>
              </div>
            </div>`;
            }
        }
        let Container = document.querySelector('.container');
        Container.innerHTML = ihtml;
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  }
  
  // Add event listener to the search button
  let searchButton = document.getElementById('searchbtn');
  searchButton.addEventListener('click', fetchSearchNews);
  