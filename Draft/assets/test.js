var userFormEl = document.querySelector('#user-form');
var keywordEl = document.querySelector('#keyword');
var newsContainerEl = document.querySelector('#news-container');
var newsSearchTerm = document.querySelector('#news-search-term');

var formSubmitHandler = function (event) {
  event.preventDefault();

  var topic = keywordEl.value.trim();

  if (topic) {
    getNews(topic);

    newsContainerEl.textContent = '';
    keywordEl.value = '';
  } else {
    alert('Please enter a keyword');
  }
};

var buttonClickHandler = function (event) {
  var category = event.target.getAttribute('data-category');

  if (category) {
    getFeaturedNews(category);

    newsContainerEl.textContent = '';
  }
};

var getNews = function (userInput) {
  var apiUrl = 'https://api.nytimes.com/svc/topstories/v2/' + userInput + '.json?api-key=A9uhuVjRSzQSlrxkGPPqma0ij4QtNrsO';

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
            console.log(data);
            var newssresults = data.results;
            displayNews(newssresults, userInput);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to New York Times');
    });
};

var getFeaturedNews = function (category) {
  var apiUrl = 'https://api.nytimes.com/svc/topstories/v2/' + category + '.json?api-key=A9uhuVjRSzQSlrxkGPPqma0ij4QtNrsO';

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        var newssresults = data.results;
        displayRepos(newssresults, category);
      });
    } else {
      alert('Error: ' + response.statusText);
    }
  });
};

var displayNews = function (news, searchTerm) {
  if (news.length === 0) {
    newsContainerEl.textContent = 'No news/articles found.';
    return;
  }

  newsSearchTerm.textContent = searchTerm;

  for (var i = 0; i < news.length; i++) {
    var news1 = news[i].title;
    var news2 = news[i].abstract;

    var linkEl = document.createElement('a');
    linkEl.classList = 'list-item flex-row align-center';
    linkEl.setAttribute('href', news[i].url);
    linkEl.setAttribute('target', '_blank');

    var titleEl = document.createElement('h2');
    titleEl.textContent = news1;
    // titleEl.classList = 'align-center';
    linkEl.appendChild(titleEl);

    var abstractEl = document.createElement('h4');
    // statusEl.classList = 'align-center';
    abstractEl.textContent = news2;
    linkEl.appendChild(abstractEl);

    var imgEl = document.createElement('img');
    imgEl.setAttribute('src', news[i].multimedia[2].url);
    linkEl.appendChild(imgEl);


    newsContainerEl.appendChild(linkEl);
  }
};

userFormEl.addEventListener('submit', formSubmitHandler);
