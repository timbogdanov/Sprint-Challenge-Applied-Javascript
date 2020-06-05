// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    const javascript = response.data.articles.javascript;
    const bootstrap = response.data.articles.bootstrap;
    const technology = response.data.articles.technology;
    const jquery = response.data.articles.jquery;
    const node = response.data.articles.node;

    javascript.forEach(element => {
      const article = makeArticleCard(element);
      cardContainer.appendChild(article);
    });
    bootstrap.forEach(element => {
      const article = makeArticleCard(element);
      cardContainer.appendChild(article);
    });
    technology.forEach(element => {
      const article = makeArticleCard(element);
      cardContainer.appendChild(article);
    });
    jquery.forEach(element => {
      const article = makeArticleCard(element);
      cardContainer.appendChild(article);
    });
    node.forEach(element => {
      const article = makeArticleCard(element);
      cardContainer.appendChild(article);
    });

  })


const cardContainer = document.querySelector('.cards-container')

function makeArticleCard(attrs) {
  const articleHeadline = attrs.headline;
  const articleAuthorName = attrs.authorName;
  const articleAuthorPhoto = attrs.authorPhoto;

  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const authorName = document.createElement('span');

  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(authorName);

  headline.textContent = articleHeadline;
  authorName.textContent = articleAuthorName;
  img.src = articleAuthorPhoto;

  return card
}