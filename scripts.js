document.addEventListener("DOMContentLoaded", function() {
  const shareBtn = document.getElementById('shareBtn');
  const moviesContainer = document.getElementById('movies');
  const loginLink = document.getElementById('loginLink');
  const registerLink = document.getElementById('registerLink');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const profileSection = document.getElementById('profile');
  const usernameSpan = document.getElementById('username');
  const logoutButton = document.getElementById('logoutButton');
  const loginEmail = document.getElementById('loginEmail');
  const loginPassword = document.getElementById('loginPassword');
  const registerName = document.getElementById('registerName');
  const registerEmail = document.getElementById('registerEmail');
  const registerPassword = document.getElementById('registerPassword');
  const articlesList = document.getElementById('articlesList');
  const movieForm = document.getElementById('movieForm');
  const movieContainer = document.getElementById('moviesContainer');

  let currentUser = null;
  let ratings = {}; // Store movie ratings
  let reviews = {}; // Store movie reviews

  // Simulated user data stored locally
  let users = [];

  // Function to show login form
  function showLoginForm() {
    loginForm.reset();
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
    profileSection.classList.add('hidden');
  }

  // Function to show register form
  function showRegisterForm() {
    registerForm.reset();
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
    profileSection.classList.add('hidden');
  }

  // Function to show user profile
  function showProfile() {
    loginForm.classList.add('hidden');
    registerForm.classList.add('hidden');
    profileSection.classList.remove('hidden');
    usernameSpan.textContent = currentUser.name;
  }

  // Function to handle user login
  function loginUser(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      currentUser = user;
      showProfile();
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }

  // Function to handle user registration
  function registerUser(name, email, password) {
    const user = { name, email, password };
    users.push(user);
    currentUser = user;
    showProfile();
  }

  // Event listener for login link click
  loginLink.addEventListener('click', function(event) {
    event.preventDefault();
    showLoginForm();
  });

  // Event listener for register link click
  registerLink.addEventListener('click', function(event) {
    event.preventDefault();
    showRegisterForm();
  });

  // Event listener for login form submission
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = loginEmail.value.trim();
    const password = loginPassword.value.trim();
    loginUser(email, password);
  });

  // Event listener for register form submission
  registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = registerName.value.trim();
    const email = registerEmail.value.trim();
    const password = registerPassword.value.trim();
    registerUser(name, email, password);
  });

  // Event listener for logout button click
  logoutButton.addEventListener('click', function() {
    currentUser = null;
    showLoginForm();
  });
  

  // Display appropriate form based on user status
  if (currentUser) {
    showProfile();
  } else {
    showLoginForm();
  }
});
    const moviesContainer = document.getElementById('movies');
    const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  
    // Sample movie data
    const movies = [
      {
        title: 'Inception',
        director: 'Christopher Nolan',
        year: 2010,
        poster: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg',
        synopsis: 'A thief who enters the dreams of others to steal secrets from their subconscious.'
      },
      {
        title: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        year: 1994,
        poster: 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
        synopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
      }
    ];
    
      
    
    // Function to create movie cards
    function createMovieCard(movie) {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');
  
      const posterImg = document.createElement('img');
      posterImg.src = movie.poster;
      posterImg.alt = `${movie.title} poster`;
      movieCard.appendChild(posterImg);
  
      const title = document.createElement('h2');
      title.textContent = movie.title;
      movieCard.appendChild(title);
  
      const director = document.createElement('p');
      director.textContent = `Director: ${movie.director}`;
      movieCard.appendChild(director);
  
      const year = document.createElement('p');
      year.textContent = `Year: ${movie.year}`;
      movieCard.appendChild(year);
  
      const synopsis = document.createElement('p');
      synopsis.textContent = movie.synopsis;
      movieCard.appendChild(synopsis);
  
      return movieCard;
    }
     // Function to display movies
  function displayMovies(movies) {
    moviesContainer.innerHTML = '';
    movies.forEach(movie => {
      const movieCard = createMovieCard(movie);
      moviesContainer.appendChild(movieCard);
    });
  }

  // Event listener for form submission
  movieForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const title = document.getElementById('title').value.trim();
    const director = document.getElementById('director').value.trim();
    const year = parseInt(document.getElementById('year').value.trim());
    const poster = document.getElementById('poster').value.trim();

    // Create movie object
    const movie = { title, director, year, poster };

    // Add movie to array
    movies.push(movie);

    // Display updated list of movies
    displayMovies(movies);

    // Reset form
    movieForm.reset();
  
});

const videos = [
  {
    title: 'deadpool and wolvering',
    url: 'https://youtube/cen0rBKLuYE?si=KL9xpe-KTuc9vT6D'
  },
  {
    title: 'The Shawshank Redemption - Scene',
    url: 'https://www.youtube.com/embed/6hB3S9bIaco'
  }
  // Add more video objects as needed
];

// Function to create video cards
function createVideoCard(video) {
  const videoCard = document.createElement('div');
  videoCard.classList.add('video-card');

  const iframe = document.createElement('iframe');
  iframe.src = video.url;
  iframe.title = video.title;
  videoCard.appendChild(iframe);

  return videoCard;
}

// Function to display videos
function displayVideos() {
  videosContainer.innerHTML = '';
  videos.forEach(video => {
    const videoCard = createVideoCard(video);
    videosContainer.appendChild(videoCard);
  });
}

// Display sample videos when the page loads
displayVideos();
  
    // Add movie cards to the movies container
    movies.forEach(movie => {
      const movieCard = createMovieCard(movie);
      moviesContainer.appendChild(movieCard);
    });
    // Rating and review form
    const ratingForm = document.createElement('form');
    ratingForm.innerHTML = `
      <label for="rating${movie.id}">Rate this movie:</label>
      <input type="number" id="rating${movie.id}" min="1" max="5" required>
      <button type="submit">Submit Rating</button>
    `;
    movieCard.appendChild(ratingForm);

    const reviewForm = document.createElement('form');
    reviewForm.innerHTML = `
      <label for="review${movie.id}">Write a review:</label>
      <textarea id="review${movie.id}" required></textarea>
      <button type="submit">Submit Review</button>
    `;
    movieCard.appendChild(reviewForm);

    // Event listeners for rating and review submission
    ratingForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const rating = parseInt(document.getElementById(`rating${movie.id}`).value);
      rateMovie(movie.id, rating);
    });

    reviewForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const review = document.getElementById(`review${movie.id}`).value.trim();
      writeReview(movie.id, review);
    });

    return movieCard;
  

  // Function to handle movie rating
  function rateMovie(movieId, rating) {
    ratings[movieId] = rating;
    alert(`You have rated the movie with ID ${movieId} as ${rating} stars.`);
  }

  // Function to handle writing reviews
  function writeReview(movieId, review) {
    reviews[movieId] = review;
    alert(`You have written a review for the movie with ID ${movieId}: "${review}"`);
  }

  // Function to display movies
  function displayMovies() {
    moviesContainer.innerHTML = '';
    movies.forEach(movie => {
      const movieCard = createMovieCard(movie);
      moviesContainer.appendChild(movieCard);
    });
  }

  // Event listener for login link click
  loginLink.addEventListener('click', function(event) {
    event.preventDefault();
    showLoginForm();
  });

  // Event listener for register link click
  registerLink.addEventListener('click', function(event) {
    event.preventDefault();
    showRegisterForm();
  });

  // Event listener for login form submission
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = loginEmail.value.trim();
    const password = loginPassword.value.trim();
    loginUser(email, password);
  });

  // Event listener for register form submission
  registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = registerName.value.trim();
    const email = registerEmail.value.trim();
    const password = registerPassword.value.trim();
    registerUser(name, email, password);
  });

  // Event listener for logout button click
  logoutButton.addEventListener('click', function() {
    currentUser = null;
    showLoginForm();
  });

  // Function to show login form
  function showLoginForm() {
    loginForm.reset();
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
    profileSection.classList.add('hidden');
    displayMovies();
  }

  // Function to show register form
  function showRegisterForm() {
    registerForm.reset();
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
    profileSection.classList.add('hidden');
    displayMovies();
  }

  // Function to show user profile
  function showProfile() {
    loginForm.classList.add('hidden');
    registerForm.classList.add('hidden');
    profileSection.classList.remove('hidden');
    usernameSpan.textContent = currentUser.name;
    displayMovies();
  }

  // Function to handle user login
  function loginUser(email, password) {
    // Simulated login logic
    // Here you can validate credentials against stored user data
    currentUser = { name: "John Doe" }; // For demo, setting a dummy user
    showProfile();
  }

  // Function to handle user registration
  function registerUser(name, email, password) {
    // Simulated registration logic
    // Here you can save user data to a database
    currentUser = { name };
    showProfile();
  }

  // Display appropriate form based on user status
  if (currentUser) {
    showProfile();
  } else {
    showLoginForm();
  }
 
  // Social share function
  function shareToSocialMedia(platform) {
    // Replace URL and message with your website URL and custom message
    const url = encodeURIComponent(window.location.href);
    const message = encodeURIComponent('Check out this awesome movie!');
    let shareUrl = '';

    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${message}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${message}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?url=${url}&title=${message}`;
        break;
      default:
        break;
    }

    // Open share URL in a new window
    window.open(shareUrl, '_blank');
  }

  // Event listener for share button click
  shareBtn.addEventListener('click', function() {
    // Open a share dialog for each social media platform
    shareToSocialMedia('facebook');
    shareToSocialMedia('twitter');
    shareToSocialMedia('linkedin');
  
  // Function to create article elements
  function createArticleElement(article) {
    const articleItem = document.createElement('div');
    articleItem.classList.add('article-item');

    const title = document.createElement('h3');
    title.textContent = article.title;
    articleItem.appendChild(title);

    const metadata = document.createElement('p');
    metadata.innerHTML = `<strong>Published Date:</strong> ${article.date} | <strong>Author:</strong> ${article.author}`;
    articleItem.appendChild(metadata);

    const content = document.createElement('p');
    content.textContent = article.content;
    articleItem.appendChild(content);

    return articleItem;
  }

  // Function to display articles
  function displayArticles() {
    articlesList.innerHTML = '';
    articles.forEach(article => {
      const articleElement = createArticleElement(article);
      articlesList.appendChild(articleElement);
    });
  }

  // Display articles when the page loads
  displayArticles();
 

});

document.addEventListener("DOMContentLoaded", function() {
  const body = document.body;

  // Function to toggle dark theme
  function toggleDarkTheme() {
    body.classList.toggle('dark-theme');
  }

  // Event listener for theme toggle
  document.addEventListener('keydown', function(event) {
    // Check if the user pressed the "T" key (case-insensitive)
    if (event.key.toLowerCase() === 't') {
      toggleDarkTheme();
    }
  });
});

