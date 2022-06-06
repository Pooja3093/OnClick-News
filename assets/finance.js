// Select DOM elements
var categorySearch = document.querySelector('.dropdown');
var input = document.getElementById("myInput");
var tickerContainerEl = document.querySelector('.ticker-display');


// Global variables
var c1 = ['.card1-img', '.card1-title', 'card1-link'];
var c2 = ['.card2-img', '.card2-title', 'card2-link'];
var c3 = ['.card3-img', '.card3-title', 'card3-link'];
var c4 = ['.card4-img', '.card4-title', 'card4-link'];
var c5 = ['.card5-img', '.card5-title', 'card5-link'];
var c6 = ['.card6-img', '.card6-title', 'card6-link'];
var c7 = ['.card7-img', '.card7-title', 'card7-link'];
var c8 = ['.card8-img', '.card8-title', 'card8-link'];
var c9 = ['.card9-img', '.card9-title', 'card9-link'];


var Info = [];
var cardIndex;
var j=8;

const options = {
	method: 'POST',
	headers: {
		'content-type': 'text/plain',
		'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
		'X-RapidAPI-Key': '2ef78f1181msh445a4fbbb5e7e4dp177378jsn1fac22cb9fb9'
	},
	body: ''
};

const options1 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
        'X-RapidAPI-Key': '2ef78f1181msh445a4fbbb5e7e4dp177378jsn1fac22cb9fb9'
    }
};

var apiUrl = 'https://yh-finance.p.rapidapi.com/news/v2/list?snippetCount=10';
var apiUrl1 = 'https://yh-finance.p.rapidapi.com/market/get-trending-tickers?region=CA'


// Function to fetch finance news
fetch(apiUrl, options)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
            var financeNews = data.data.main.stream;
            var k = 0;
            for(let i = 0; i<=j ; i++){
              
              if(financeNews[i].content.clickThroughUrl === null){
                j++;
                continue;
              }
              Info[0] = financeNews[i].content.thumbnail.resolutions[0].url;
              Info[1] = financeNews[i].content.title;
              Info[2] = financeNews[i].content.clickThroughUrl.url;
              cardIndex = k++;
              displayNews(Info, cardIndex); 
              }
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to Yahoo Finance');
    });



// Function to fetch stock data
fetch(apiUrl1, options1)
.then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
          var tickers = data.finance.result[0].quotes;
          displayTickers(tickers);
      });
    } else {
      alert('Error: ' + response.statusText);
    }
  })
  .catch(function (error) {
    alert('Unable to connect to Yahoo Finance');
  });


// Function to display news in results card
function displayNews(news, Index) {
  if (news.length === 0) {
    newsContainerEl.textContent = 'No news/articles found.';
    return;
  }
  if (Index == 0){
    document.querySelector(c1[0]).setAttribute('src', Info[0]);
    document.querySelector(c1[1]).textContent = Info[1];
    document.getElementById(c1[2]).setAttribute('href', Info[2]);
   } else if (Index == 1){
    document.querySelector(c2[0]).setAttribute('src', Info[0]);
    document.querySelector(c2[1]).textContent = Info[1];
    document.getElementById(c2[2]).href = Info[2];
  } else if (Index == 2){
    document.querySelector(c3[0]).setAttribute('src', Info[0]);
    document.querySelector(c3[1]).textContent = Info[1];
    document.getElementById(c3[2]).href = Info[2];
  } else if (Index == 3){
    document.querySelector(c4[0]).setAttribute('src', Info[0]);
    document.querySelector(c4[1]).textContent = Info[1];
    document.getElementById(c4[2]).href = Info[2];
  } else if (Index == 4){
    document.querySelector(c5[0]).setAttribute('src', Info[0]);
    document.querySelector(c5[1]).textContent = Info[1];
    document.getElementById(c5[2]).href = Info[2];
  } else if (Index == 5){
    document.querySelector(c6[0]).setAttribute('src', Info[0]);
    document.querySelector(c6[1]).textContent = Info[1];
    document.getElementById(c6[2]).href = Info[2];
  } else if (Index == 6){
    document.querySelector(c7[0]).setAttribute('src', Info[0]);
    document.querySelector(c7[1]).textContent = Info[1];
    // document.getElementById(c7[2]).href = Info[2];
  } else if (Index == 7){
    document.querySelector(c8[0]).setAttribute('src', Info[0]);
    document.querySelector(c8[1]).textContent = Info[1];
    document.getElementById(c8[2]).href = Info[2];
  } else if (Index == 8){
    document.querySelector(c9[0]).setAttribute('src', Info[0]);
    document.querySelector(c9[1]).textContent = Info[1];
    document.getElementById(c9[2]).href = Info[2];
  }
};


// Display Trending Tickers
function displayTickers(stock) {
	if (stock.length === 0) {
		tickerContainerEl.textContent = 'No tickers found.';
		return;
	}
	
	for (var i = 0; i < stock.length; i++) {
		
	
		var divEl = document.createElement('div');
		divEl.classList = 'cell1';
	
		var titleEl = document.createElement('p');
		titleEl.textContent = stock[i].shortName;
		divEl.appendChild(titleEl);
	
		var priceEl = document.createElement('p');
		priceEl.textContent = stock[i].regularMarketPrice;
		divEl.appendChild(priceEl);

		var changeEl = document.createElement('p');
		changeEl.textContent = stock[i].regularMarketChangePercent + " %";
        if(stock[i].regularMarketChangePercent >= 0){
            changeEl.classList = 'green';
        } else {
            changeEl.classList = 'red';
        }
		divEl.appendChild(changeEl);
		
		tickerContainerEl.appendChild(divEl);
    
	}
	};


