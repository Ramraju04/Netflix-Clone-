// Mock data for Netflix clone
const contentData = {
    trending: [
        {
            id: 1,
            title: "The Crown",
            year: "2023",
            rating: "TV-MA",
            duration: "4 Seasons",
            image: "https://images.pexels.com/photos/7991728/pexels-photo-7991728.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
            cast: "Claire Foy, Olivia Colman, Imelda Staunton, Tobias Menzies",
            genre: "Drama"
        },
        {
            id: 2,
            title: "Midnight Runner",
            year: "2024",
            rating: "R",
            duration: "2h 15m",
            image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "A thrilling action-packed adventure following an elite operative on a dangerous mission across multiple countries.",
            cast: "John Davis, Sarah Chen, Michael Torres, Elena Rodriguez",
            genre: "Action"
        },
        {
            id: 3,
            title: "Ocean's Deep",
            year: "2023",
            rating: "PG-13",
            duration: "1h 58m",
            image: "https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "An underwater exploration adventure that reveals the mysteries of the deepest parts of our oceans.",
            cast: "Emma Watson, Ryan Gosling, Lupita Nyong'o, Oscar Isaac",
            genre: "Adventure"
        },
        {
            id: 4,
            title: "City Lights",
            year: "2024",
            rating: "TV-14",
            duration: "3 Seasons",
            image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "A romantic drama series set in the bustling streets of New York City, exploring love and ambition.",
            cast: "Zendaya, Timothée Chalamet, Florence Pugh, Dev Patel",
            genre: "Romance"
        },
        {
            id: 5,
            title: "Space Frontier",
            year: "2023",
            rating: "PG-13",
            duration: "2h 32m",
            image: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "Humanity's first mission to establish a colony on a distant planet faces unexpected challenges.",
            cast: "Chris Evans, Brie Larson, Michael Shannon, Tessa Thompson",
            genre: "Sci-Fi"
        },
        {
            id: 6,
            title: "The Heist",
            year: "2024",
            rating: "R",
            duration: "2h 8m",
            image: "https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "A master thief assembles a team for the ultimate heist that will test their skills and loyalty.",
            cast: "Ryan Reynolds, Charlize Theron, Idris Elba, Margot Robbie",
            genre: "Thriller"
        }
    ],
    popular: [
        {
            id: 7,
            title: "Forest Tales",
            year: "2023",
            rating: "PG",
            duration: "1h 45m",
            image: "https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "A magical journey through an enchanted forest where ancient creatures protect their homeland.",
            cast: "Tom Holland, Anya Taylor-Joy, Bill Nighy, Helena Bonham Carter",
            genre: "Fantasy"
        },
        {
            id: 8,
            title: "Racing Hearts",
            year: "2024",
            rating: "PG-13",
            duration: "2h 5m",
            image: "https://images.pexels.com/photos/1037914/pexels-photo-1037914.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "Two rival race car drivers must work together to overcome impossible odds on and off the track.",
            cast: "Michael B. Jordan, Lupita Nyong'o, Oscar Isaac, Saoirse Ronan",
            genre: "Action"
        },
        {
            id: 9,
            title: "Digital Mind",
            year: "2023",
            rating: "TV-MA",
            duration: "2 Seasons",
            image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "A cyberpunk thriller exploring the boundaries between human consciousness and artificial intelligence.",
            cast: "Adam Driver, Scarlett Johansson, Oscar Isaac, Tilda Swinton",
            genre: "Sci-Fi"
        },
        {
            id: 10,
            title: "Mountain Escape",
            year: "2024",
            rating: "PG-13",
            duration: "1h 52m",
            image: "https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "A survival thriller about a group of friends trapped in a remote mountain cabin during a severe snowstorm.",
            cast: "Chris Pine, Elizabeth Olsen, John Krasinski, Lupita Nyong'o",
            genre: "Thriller"
        },
        {
            id: 11,
            title: "Love Actually Returns",
            year: "2023",
            rating: "PG-13",
            duration: "2h 12m",
            image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "A heartwarming romantic comedy that follows multiple interconnected love stories during the holiday season.",
            cast: "Emma Stone, Ryan Gosling, Saoirse Ronan, Timothée Chalamet",
            genre: "Romance"
        },
        {
            id: 12,
            title: "Ancient Warriors",
            year: "2024",
            rating: "R",
            duration: "2h 28m",
            image: "https://images.pexels.com/photos/161154/castle-la-motte-historic-161154.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "An epic tale of honor and betrayal in medieval times, following a knight's quest for redemption.",
            cast: "Oscar Isaac, Tilda Swinton, Michael Fassbender, Alicia Vikander",
            genre: "Historical"
        }
    ],
    newReleases: [
        {
            id: 13,
            title: "Neon Dreams",
            year: "2024",
            rating: "TV-14",
            duration: "1 Season",
            image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "A futuristic drama set in a world where dreams can be shared and manipulated through advanced technology.",
            cast: "Zendaya, LaKeith Stanfield, Brian Cox, Thomasin McKenzie",
            genre: "Sci-Fi"
        },
        {
            id: 14,
            title: "The Art of War",
            year: "2024",
            rating: "R",
            duration: "2h 18m",
            image: "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "A psychological thriller about a chess grandmaster who becomes entangled in international espionage.",
            cast: "Benedict Cumberbatch, Cate Blanchett, Ralph Fiennes, Tilda Swinton",
            genre: "Thriller"
        },
        {
            id: 15,
            title: "Wild Safari",
            year: "2024",
            rating: "G",
            duration: "1h 35m",
            image: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "An incredible documentary following the migration patterns of African wildlife through stunning cinematography.",
            cast: "Narrated by David Attenborough",
            genre: "Documentary"
        },
        {
            id: 16,
            title: "Quantum Leap",
            year: "2024",
            rating: "PG-13",
            duration: "2h 22m",
            image: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "A time-traveling scientist must fix historical anomalies while searching for a way back home.",
            cast: "Tom Holland, Zendaya, Jake Gyllenhaal, Tilda Swinton",
            genre: "Sci-Fi"
        },
        {
            id: 17,
            title: "Kitchen Masters",
            year: "2024",
            rating: "TV-PG",
            duration: "2 Seasons",
            image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "Follow world-renowned chefs as they compete in the ultimate culinary championship.",
            cast: "Gordon Ramsay, Christina Tosi, Aarón Sánchez",
            genre: "Reality"
        },
        {
            id: 18,
            title: "Midnight Mystery",
            year: "2024",
            rating: "TV-MA",
            duration: "1 Season",
            image: "https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "A detective series following complex murder cases that can only be solved under the cover of darkness.",
            cast: "Idris Elba, Thandiwe Newton, Tom Hiddleston, Jodie Comer",
            genre: "Crime"
        }
    ],
    scifi: [
        {
            id: 19,
            title: "AI Revolution",
            year: "2023",
            rating: "R",
            duration: "2h 45m",
            image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "In a world where AI has surpassed human intelligence, one programmer holds the key to humanity's survival.",
            cast: "Oscar Isaac, Alicia Vikander, Domhnall Gleeson, Sonoya Mizuno",
            genre: "Sci-Fi"
        },
        {
            id: 20,
            title: "Mars Colony",
            year: "2024",
            rating: "TV-14",
            duration: "3 Seasons",
            image: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "The first human settlement on Mars faces unprecedented challenges as they fight for survival.",
            cast: "Matt Damon, Jessica Chastain, Chiwetel Ejiofor, Kate Mara",
            genre: "Sci-Fi"
        },
        {
            id: 21,
            title: "Time Portal",
            year: "2023",
            rating: "PG-13",
            duration: "2h 8m",
            image: "https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "Scientists accidentally open a portal to parallel dimensions, threatening the fabric of reality itself.",
            cast: "Benedict Cumberbatch, Tilda Swinton, Chiwetel Ejiofor, Rachel McAdams",
            genre: "Sci-Fi"
        },
        {
            id: 22,
            title: "Robot Uprising",
            year: "2024",
            rating: "R",
            duration: "2h 35m",
            image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "When robots gain consciousness, humanity must face the consequences of their technological advancement.",
            cast: "Will Smith, Bridget Moynahan, Bruce Greenwood, James Cromwell",
            genre: "Sci-Fi"
        },
        {
            id: 23,
            title: "Galaxy Wars",
            year: "2023",
            rating: "PG-13",
            duration: "2h 52m",
            image: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "An epic space opera featuring intergalactic conflict and the rise of unlikely heroes.",
            cast: "Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac",
            genre: "Sci-Fi"
        },
        {
            id: 24,
            title: "Virtual Reality",
            year: "2024",
            rating: "TV-MA",
            duration: "2 Seasons",
            image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "Players become trapped in a virtual reality game where the stakes are life and death.",
            cast: "Rami Malek, Emmy Rossum, Christian Slater, Carly Chaikin",
            genre: "Sci-Fi"
        }
    ],
    action: [
        {
            id: 25,
            title: "Thunder Strike",
            year: "2024",
            rating: "R",
            duration: "2h 15m",
            image: "https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "An elite military unit must stop a terrorist organization from launching a devastating global attack.",
            cast: "Chris Hemsworth, Charlize Theron, Idris Elba, Scarlett Johansson",
            genre: "Action"
        },
        {
            id: 26,
            title: "Speed Chase",
            year: "2023",
            rating: "PG-13",
            duration: "1h 58m",
            image: "https://images.pexels.com/photos/1037914/pexels-photo-1037914.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "High-octane car chases and spectacular stunts as undercover cops infiltrate a criminal racing circuit.",
            cast: "Vin Diesel, Michelle Rodriguez, Tyrese Gibson, Ludacris",
            genre: "Action"
        },
        {
            id: 27,
            title: "Shadow Ops",
            year: "2024",
            rating: "R",
            duration: "2h 22m",
            image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "A black ops team goes rogue to expose corruption at the highest levels of government.",
            cast: "Jason Statham, Charlize Theron, Idris Elba, John Boyega",
            genre: "Action"
        },
        {
            id: 28,
            title: "Assassin's Code",
            year: "2023",
            rating: "R",
            duration: "2h 12m",
            image: "https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "A retired assassin is forced back into action when his past threatens the people he loves most.",
            cast: "Keanu Reeves, Halle Berry, Laurence Fishburne, Ian McShane",
            genre: "Action"
        },
        {
            id: 29,
            title: "Warrior's Path",
            year: "2024",
            rating: "R",
            duration: "2h 35m",
            image: "https://images.pexels.com/photos/161154/castle-la-motte-historic-161154.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "Ancient martial arts meet modern warfare in this epic tale of honor, revenge, and redemption.",
            cast: "Donnie Yen, Michelle Yeoh, Tony Leung, Zhang Ziyi",
            genre: "Action"
        },
        {
            id: 30,
            title: "Explosive Force",
            year: "2023",
            rating: "R",
            duration: "2h 8m",
            image: "https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
            description: "A bomb disposal expert races against time to prevent a series of devastating explosions across the city.",
            cast: "Jeremy Renner, Anthony Mackie, Brian Geraghty, Guy Pearce",
            genre: "Action"
        }
    ]
};

// Sample video URL for demo (using a placeholder)
const sampleVideo = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";