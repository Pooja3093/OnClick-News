// Select DOM elements
var categorySearch = document.querySelector('.dropdown');
var input = document.getElementById("myInput");

// Global variables
var c1 = ['.card1-img', '.card1-title', '.card1-abs', '#card1-link'];
var c2 = ['.card2-img', '.card2-title', '.card2-abs', '#card2-link'];
var c3 = ['.card3-img', '.card3-title', '.card3-abs', '#card3-link'];
var c4 = ['.card4-img', '.card4-title', '.card4-abs', '#card4-link'];
var c5 = ['.card5-img', '.card5-title', '.card5-abs', '#card5-link'];
var c6 = ['.card6-img', '.card6-title', '.card6-abs', '#card6-link'];
var c7 = ['.card7-img', '.card7-title', '.card7-abs', '#card7-link'];
var c8 = ['.card8-img', '.card8-title', '.card8-abs', '#card8-link'];
var c9 = ['.card9-img', '.card9-title', '.card9-abs', '#card9-link'];
var car1 = ['.car1-img', '.car1-text'];
var car2 = ['.car2-img', '.car2-text'];
var car3 = ['.car3-img', '.car3-text'];
var car4 = ['.car4-img', '.car4-text'];
var car5 = ['.car5-img', '.car5-text'];
var car6 = ['.car6-img', '.car6-text'];
var car7 = ['.car7-img', '.car7-text'];
var car8 = ['.car8-img', '.car8-text'];
var car9 = ['.car9-img', '.car9-text'];
var Info = [];
var cardIndex;
var carIndex;
var j=8;



// Function handler for dropdown click
function searchByCategory(event) {
  var category = event.target.textContent;
  getFeaturedNews(category);
  
};



// Function to fetch news by using user input
var getNews = function (userInput) {
  var apiUrl = 'https://api.nytimes.com/svc/topstories/v2/' + userInput + '.json?api-key=A9uhuVjRSzQSlrxkGPPqma0ij4QtNrsO';

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
            for(var i = 0; i<=j ; i++){
              Info[0] = data.results[i].multimedia[0].url;
              Info[1] = data.results[i].title;
              Info[2] = data.results[i].abstract;
              cardIndex = i;
              displayNews(Info, cardIndex);
            }
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to New York Times');
    });
};



// Function to fetch news by category
var getFeaturedNews = function (category) {
  var apiUrl = 'https://api.nytimes.com/svc/topstories/v2/' + category + '.json?api-key=A9uhuVjRSzQSlrxkGPPqma0ij4QtNrsO';

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        var k = 0;
        for(var i = 0; i<=j ; i++){
          if(data.results[i].item_type !== "Promo"){
            if(data.results[i].multimedia !== null){
              if(data.results[i].url !== null){
              Info[0] = data.results[i].multimedia[1].url;
              Info[1] = data.results[i].title;
              Info[2] = data.results[i].abstract;
              Info[3] = data.results[i].url;
              cardIndex = k++;
              displayNews(Info, cardIndex);
            } else{ j++; }
          } else { j++;}
        } else { j++;}
        }
      });
    } else {
      alert('Error: ' + response.statusText);
    }
  });
};



// Function to display news in results card
function displayNews(news, Index) {
  if (news.length === 0) {
    newsContainerEl.textContent = 'No news/articles found.';
    return;
  }
  if (Index == 0){
    document.querySelector(c1[0]).setAttribute('src', Info[0]);
    document.querySelector(c1[1]).textContent = Info[1];
    document.querySelector(c1[2]).textContent = Info[2];
    // document.getElementById("#card1-link").setAttribute('href', Info[3]);
   } else if (Index == 1){
    document.querySelector(c2[0]).setAttribute('src', Info[0]);
    document.querySelector(c2[1]).textContent = Info[1];
    document.querySelector(c2[2]).textContent = Info[2];
    // document.getElementById(c2[3]).href = Info[3];
  } else if (Index == 2){
    document.querySelector(c3[0]).setAttribute('src', Info[0]);
    document.querySelector(c3[1]).textContent = Info[1];
    document.querySelector(c3[2]).textContent = Info[2];
    // document.getElementById(c3[3]).href = Info[3];
  } else if (Index == 3){
    document.querySelector(c4[0]).setAttribute('src', Info[0]);
    document.querySelector(c4[1]).textContent = Info[1];
    document.querySelector(c4[2]).textContent = Info[2];
    // document.getElementById(c4[3]).href = Info[3];
  } else if (Index == 4){
    document.querySelector(c5[0]).setAttribute('src', Info[0]);
    document.querySelector(c5[1]).textContent = Info[1];
    document.querySelector(c5[2]).textContent = Info[2];
    // document.getElementById(c5[3]).href = Info[3];
  } else if (Index == 5){
    document.querySelector(c6[0]).setAttribute('src', Info[0]);
    document.querySelector(c6[1]).textContent = Info[1];
    document.querySelector(c6[2]).textContent = Info[2];
    // document.getElementById(c6[3]).href = Info[3];
  } else if (Index == 6){
    document.querySelector(c7[0]).setAttribute('src', Info[0]);
    document.querySelector(c7[1]).textContent = Info[1];
    document.querySelector(c7[2]).textContent = Info[2];
    // document.getElementById(c7[3]).href = Info[3];
  } else if (Index == 7){
    document.querySelector(c8[0]).setAttribute('src', Info[0]);
    document.querySelector(c8[1]).textContent = Info[1];
    document.querySelector(c8[2]).textContent = Info[2];
    // document.getElementById(c8[3]).href = Info[3];
  } else if (Index == 8){
    document.querySelector(c9[0]).setAttribute('src', Info[0]);
    document.querySelector(c9[1]).textContent = Info[1];
    document.querySelector(c9[2]).textContent = Info[2];
    // document.getElementById(c9[3]).href = Info[3];
  }
};



// Fetch "World" news for carousel
function carouselNews(category){
  var apiUrl = 'https://api.nytimes.com/svc/topstories/v2/World.json?api-key=A9uhuVjRSzQSlrxkGPPqma0ij4QtNrsO';

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        var k = 0;
        for(var i = 0; i<=j ; i++){
          if(data.results[i].item_type == "Article"){
            if(data.results[i].multimedia !== null){
              Info[0] = data.results[i].multimedia[1].url;
              Info[1] = data.results[i].title;
              Info[3] = data.results[i].url;
              carIndex = k++;
              displayCarousel(Info, carIndex);
            } else{ j++; }
          } else { j++;}
        }
      });
    } else {
      alert('Error: ' + response.statusText);
    }
  });

}



// Display news in Carousel
function displayCarousel(news, Index) {
  if (news.length === 0) {
    newsContainerEl.textContent = 'No news/articles found.';
    return;
  }
  if (Index == 0){
    document.querySelector(car1[0]).setAttribute('src', Info[0]);
    document.querySelector(car1[1]).textContent = Info[1];
    // if(Info[3]!== 'null'){document.getElementById(c1[3]).href = Info[3];}
   } else if (Index == 1){
    document.querySelector(car2[0]).setAttribute('src', Info[0]);
    document.querySelector(car2[1]).textContent = Info[1];
    // document.getElementById(c2[3]).href = Info[3];
  } else if (Index == 2){
    document.querySelector(car3[0]).setAttribute('src', Info[0]);
    document.querySelector(car3[1]).textContent = Info[1];
    // document.getElementById(c3[3]).href = Info[3];
  } else if (Index == 3){
    document.querySelector(car4[0]).setAttribute('src', Info[0]);
    document.querySelector(car4[1]).textContent = Info[1];
    // document.getElementById(c4[3]).href = Info[3];
  } else if (Index == 4){
    document.querySelector(car5[0]).setAttribute('src', Info[0]);
    document.querySelector(car5[1]).textContent = Info[1];
    // document.getElementById(c5[3]).href = Info[3];
  } else if (Index == 5){
    document.querySelector(car6[0]).setAttribute('src', Info[0]);
    document.querySelector(car6[1]).textContent = Info[1];
    // document.getElementById(c6[3]).href = Info[3];
  } else if (Index == 6){
    document.querySelector(car7[0]).setAttribute('src', Info[0]);
    document.querySelector(car7[1]).textContent = Info[1];
    // document.getElementById(c7[3]).href = Info[3];
  } else if (Index == 7){
    document.querySelector(car8[0]).setAttribute('src', Info[0]);
    document.querySelector(car8[1]).textContent = Info[1];
    // document.getElementById(c8[3]).href = Info[3];
  } else if (Index == 8){
    document.querySelector(car9[0]).setAttribute('src', Info[0]);
    document.querySelector(car9[1]).textContent = Info[1];
    // document.getElementById(c9[3]).href = Info[3];
  }
};


// Init function will load on page load
function init(){
  getFeaturedNews('Automobiles');
  carouselNews('World');
}


// Program starts here
init();


// Event listner for keyword search
// input.addEventListener("keypress", function(event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     getNews(input.value);
//   }
// });


// Event listener for dropdown menu
categorySearch.addEventListener('click', searchByCategory);

