
var newsContainerEl = document.querySelector('#news-container');
var stockContainerEl = document.querySelector('#stock-container');

var key = 'pub_7874cc16e2ea274dc48fd543111cb5202f45';



const options = {
	method: 'POST',
	headers: {
		'content-type': 'text/plain',
		'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
		'X-RapidAPI-Key': '2ef78f1181msh445a4fbbb5e7e4dp177378jsn1fac22cb9fb9'
	},
	body: ''
};

var apiUrl = 'https://yh-finance.p.rapidapi.com/news/v2/list?snippetCount=10';
fetch(apiUrl, options)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
            var financeNews = data.data.main.stream;
            displayNews(financeNews);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to Yahoo');
    });




	const options1 = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
			'X-RapidAPI-Key': '2ef78f1181msh445a4fbbb5e7e4dp177378jsn1fac22cb9fb9'
		}
	};
	var apiUrl1 = 'https://yh-finance.p.rapidapi.com/market/get-trending-tickers?region=CA'
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


var displayNews = function (info) {
	if (info.length === 0) {
		newsContainerEl.textContent = 'No news/articles found.';
		return;
	}
	
	for (var i = 0; i < info.length; i++) {
		var news1 = info[i].content.title;
	
		var linkEl = document.createElement('a');
		linkEl.classList = 'list-item flex-row align-center';
		var check = info[i].content.clickThroughUrl;
		if(check !== null){
		linkEl.setAttribute('href', check);
		linkEl.setAttribute('target', '_blank');
		}
	
		var titleEl = document.createElement('h2');
		titleEl.textContent = news1;
		// titleEl.classList = 'align-center';
		linkEl.appendChild(titleEl);
	
		var check1 = info[i].content.thumbnail.resolutions;
		if(check1 !== null){
		var imgEl = document.createElement('img');
		imgEl.setAttribute('src', check1[0].url);
		linkEl.appendChild(imgEl);
		}
		
		newsContainerEl.appendChild(linkEl);
	}
	};


	
var displayTickers = function (stock) {
	if (stock.length === 0) {
		stockContainerEl.textContent = 'No tickers found.';
		return;
	}
	
	for (var i = 0; i < stock.length; i++) {
		
	
		var divEl = document.createElement('div');
		divEl.classList = 'list-item flex-row align-center';
	
		var titleEl = document.createElement('h2');
		titleEl.textContent = stock[i].shortName;
		// titleEl.classList = 'align-center';
		divEl.appendChild(titleEl);
	
		var titleEl = document.createElement('p');
		titleEl.textContent = stock[i].regularMarketPrice;
		divEl.appendChild(titleEl);

		var titleEl = document.createElement('p');
		titleEl.textContent = stock[i].regularMarketChangePercent + "%";
		divEl.appendChild(titleEl);
		
		stockContainerEl.appendChild(divEl);
	}
	};