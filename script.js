// Movie data
const movies = {
    trending: [
        {
            title: "The Crown",
            year: "2023",
            rating: "TV-MA",
            image: "https://images.pexels.com/photos/7991728/pexels-photo-7991728.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "Follows the political rivalries and romance of Queen Elizabeth II's reign."
        },
        {
            title: "Action Hero",
            year: "2024",
            rating: "R",
            image: "https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "An elite operative on a dangerous mission across multiple countries."
        },
        {
            title: "Ocean Adventure",
            year: "2023",
            rating: "PG-13",
            image: "https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "An underwater exploration adventure revealing ocean mysteries."
        },
        {
            title: "City Romance",
            year: "2024",
            rating: "PG-13",
            image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "A romantic drama set in the bustling streets of New York City."
        },
        {
            title: "Space Mission",
            year: "2023",
            rating: "PG-13",
            image: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "Humanity's first mission to establish a colony on a distant planet."
        }
    ],
    popular: [
        {
            title: "Forest Magic",
            year: "2023",
            rating: "PG",
            image: "https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "A magical journey through an enchanted forest."
        },
        {
            title: "Racing Dreams",
            year: "2024",
            rating: "PG-13",
            image: "https://images.pexels.com/photos/1037914/pexels-photo-1037914.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "Two rival race car drivers must work together."
        },
        {
            title: "Tech Thriller",
            year: "2023",
            rating: "TV-MA",
            image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "A cyberpunk thriller exploring AI and human consciousness."
        },
        {
            title: "Mountain Survival",
            year: "2024",
            rating: "PG-13",
            image: "https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "Friends trapped in a remote mountain cabin during a snowstorm."
        },
        {
            title: "Holiday Love",
            year: "2023",
            rating: "PG-13",
            image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "Multiple interconnected love stories during the holiday season."
        }
    ],
    newReleases: [
        {
            title: "Future Dreams",
            year: "2024",
            rating: "TV-14",
            image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "A futuristic drama about shared and manipulated dreams."
        },
        {
            title: "Chess Master",
            year: "2024",
            rating: "R",
            image: "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "A chess grandmaster becomes entangled in international espionage."
        },
        {
            title: "Wildlife Safari",
            year: "2024",
            rating: "G",
            image: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "Following the migration patterns of African wildlife."
        },
        {
            title: "Time Travel",
            year: "2024",
            rating: "PG-13",
            image: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "A scientist must fix historical anomalies while searching for home."
        },
        {
            title: "Cooking Show",
            year: "2024",
            rating: "TV-PG",
            image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "World-renowned chefs compete in the ultimate culinary championship."
        }
    ]
};

// Load movies into sections
function loadMovies() {
    loadMovieSection('trending', movies.trending);
    loadMovieSection('popular', movies.popular);
    loadMovieSection('new-releases', movies.newReleases);
}

function loadMovieSection(sectionId, movieList) {
    const section = document.getElementById(sectionId);
    section.innerHTML = '';
    
    movieList.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie-item';
        movieDiv.style.backgroundImage = `url(${movie.image})`;
        movieDiv.innerHTML = `<div class="movie-title">${movie.title}</div>`;
        
        movieDiv.addEventListener('click', () => openModal(movie));
        section.appendChild(movieDiv);
    });
}

// Modal functionality
function openModal(movie) {
    const modal = document.getElementById('movie-modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');
    const year = document.getElementById('modal-year');
    const rating = document.getElementById('modal-rating');
    
    title.textContent = movie.title;
    description.textContent = movie.description;
    year.textContent = movie.year;
    rating.textContent = movie.rating;
    
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('movie-modal');
    modal.style.display = 'none';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    loadMovies();
    
    // Close modal events
    document.querySelector('.close').addEventListener('click', closeModal);
    document.getElementById('movie-modal').addEventListener('click', (e) => {
        if (e.target.id === 'movie-modal') {
            closeModal();
        }
    });
    
    // Hero buttons
    document.querySelector('.play-btn').addEventListener('click', () => {
        alert('Playing Stranger Things...');
    });
    
    document.querySelector('.info-btn').addEventListener('click', () => {
        openModal({
            title: "Stranger Things",
            year: "2024",
            rating: "TV-MA",
            description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
        });
    });
});