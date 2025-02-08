// Requesting location permission from the user
function requestLocationPermission() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                // This is called when the user allows access to their location
                console.log("Location Access Granted");
                console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
            },
            function(error) {
                // This is called if the user denies location access
                console.log("Location Access Denied");
                console.log(error);
            }
        );
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

// Automatically ask for location permission when the page loads
window.onload = function() {
    requestLocationPermission();
};



// 3D Effect on Scroll
document.querySelectorAll('.planet-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'rotateY(15deg)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateY(0deg)';
    });
  });
  
  // Open Modal on Card Click
  const cards = document.querySelectorAll('.planet-card');
  const modal = document.getElementById('planet-modal');
  const closeBtn = document.querySelector('.close-btn');
  const planetDetails = {
    mercury: {
      title: "Mercury",
      graphic: "images/mecury.png",
      description: "Mercury is the closest planet to the Sun.",
      discovery: "Discovered in 1631",
      size: "4,879 km",
      atmosphere: "Thin atmosphere",
      distanceSun: "57.91 million km",
      distanceEarth: "91.69 million km",
      otherDetails: "No moons."
    },
    venus: {
      title: "Venus",
      graphic: "images/venus.png",
      description: "Venus is the second planet from the Sun.",
      discovery: "Discovered in 1610",
      size: "12,104 km",
      atmosphere: "Thick, toxic atmosphere",
      distanceSun: "108.2 million km",
      distanceEarth: "41.4 million km",
      otherDetails: "Has no moons."
    },
    earth: {
      title: "Earth",
      graphic: "images/earth.png",
      description: "Earth is the third planet from the Sun and the only known planet to support life.",
      discovery: "Discovered since antiquity",
      size: "12,742 km",
      atmosphere: "Nitrogen-oxygen atmosphere",
      distanceSun: "149.6 million km",
      distanceEarth: "0 km",
      otherDetails: "Has one moon."
    },
    mars: {
      title: "Mars",
      graphic: "images/mars.png",
      description: "Mars is the fourth planet from the Sun and is known as the Red Planet.",
      discovery: "Discovered in ancient times (known since antiquity)",
      size: "6,779 km",
      atmosphere: "Thin atmosphere, mainly carbon dioxide",
      distanceSun: "227.9 million km",
      distanceEarth: "54.6 million km",
      otherDetails: "Mars has two moons: Phobos and Deimos."
    },
    jupiter: {
      title: "Jupiter",
      graphic: "images/jupiter.png",
      description: "Jupiter is the fifth and largest planet in our solar system.",
      discovery: "Discovered in 1610",
      size: "139,820 km",
      atmosphere: "Hydrogen-helium atmosphere",
      distanceSun: "778.5 million km",
      distanceEarth: "628.7 million km",
      otherDetails: "Has 79 known moons, including the largest moon, Ganymede."
    },
    saturn: {
      title: "Saturn",
      graphic: "images/saturn.png",
      description: "Saturn is the sixth planet from the Sun and is known for its extensive ring system.",
      discovery: "Discovered in 1610",
      size: "116,460 km",
      atmosphere: "Hydrogen-helium atmosphere",
      distanceSun: "1.429 billion km",
      distanceEarth: "1.2 billion km",
      otherDetails: "Has 82 known moons, including Titan."
    },
    uranus: {
      title: "Uranus",
      graphic: "images/uranus.png",
      description: "Uranus is the seventh planet from the Sun and is known for its tilted axis.",
      discovery: "Discovered in 1781",
      size: "50,724 km",
      atmosphere: "Hydrogen, helium, and methane atmosphere",
      distanceSun: "2.871 billion km",
      distanceEarth: "2.6 billion km",
      otherDetails: "Has 27 known moons."
    },
    neptune: {
      title: "Neptune",
      graphic: "images/neptune.png",
      description: "Neptune is the eighth and farthest planet from the Sun.",
      discovery: "Discovered in 1846",
      size: "49,244 km",
      atmosphere: "Hydrogen, helium, and methane atmosphere",
      distanceSun: "4.495 billion km",
      distanceEarth: "4.3 billion km",
      otherDetails: "Has 14 known moons, including Triton."
    }
  };
  
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const planetId = card.id.split('-')[1];
      const planet = planetDetails[planetId];
      
      // Set Modal Data
      document.getElementById('planet-title').innerText = planet.title;
      document.getElementById('planet-graphic').src = planet.graphic;
      document.getElementById('planet-description').innerText = planet.description;
      document.getElementById('discovery-date').innerText = planet.discovery;
      document.getElementById('size').innerText = planet.size;
      document.getElementById('atmosphere').innerText = planet.atmosphere;
      document.getElementById('distance-sun').innerText = planet.distanceSun;
      document.getElementById('distance-earth').innerText = planet.distanceEarth;
      document.getElementById('other-details').innerText = planet.otherDetails;
  
      modal.style.display = "flex";
    });
  });
  
  closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
  });
  
  // Visitor count logic
  const visitorCount = localStorage.getItem('visitorCount') || 0;
  localStorage.setItem('visitorCount', parseInt(visitorCount) + 1);
  document.getElementById('visitorCount').textContent = localStorage.getItem('visitorCount');
  
  // ADDITIONAL JS CODE
  
  // Close modal when clicking outside it
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
  
  // Adjust close button for dark themes
  closeBtn.style.color = "white";
  closeBtn.style.fontSize = "1.2rem";
  closeBtn.style.cursor = "pointer";
  closeBtn.addEventListener('mouseenter', () => {
    closeBtn.style.transform = "scale(1.1)";
  });
  closeBtn.addEventListener('mouseleave', () => {
    closeBtn.style.transform = "scale(1)";
  });

  const constellationDetails = {
    "Orion": "Orion is one of the most recognizable constellations, named after a Greek hunter. It contains the bright stars Betelgeuse and Rigel.",
    "Ursa Major": "Ursa Major, also known as the Great Bear, is famous for containing the Big Dipper, a key navigation guide.",
    "Ursa Minor": "Ursa Minor, or the Little Bear, features the North Star (Polaris), which has been used for centuries in navigation.",
    "Cassiopeia": "Cassiopeia is a distinctive W-shaped constellation named after a vain queen in Greek mythology.",
    "Leo": "Leo resembles a crouching lion and is one of the Zodiac constellations, containing the bright star Regulus.",
    "Scorpius": "Scorpius is known for its curved shape resembling a scorpion’s tail and includes the bright red star Antares.",
    "Gemini": "Gemini represents the twin brothers Castor and Pollux, with the two brightest stars named after them.",
    "Taurus": "Taurus, the Bull, contains the famous star cluster Pleiades and the bright star Aldebaran.",
    "Aquarius": "Aquarius, the Water Bearer, is a zodiac constellation associated with the Age of Aquarius in astrology.",
    "Aries": "Aries, the Ram, is a small but important zodiac constellation with historical significance in navigation.",
    "Cygnus": "Cygnus, the Swan, is known for its cross-like shape and contains the bright star Deneb.",
    "Perseus": "Perseus is a constellation named after the Greek hero who slew Medusa, containing the famous Perseid meteor shower."
  };
  
  document.querySelectorAll('.constellation-card').forEach((card) => {
    card.addEventListener('click', () => {
      const popup = document.getElementById('constellation-popup');
      const title = card.querySelector('.constellation-card-title').innerText;
      const imgSrc = card.querySelector("img").src;
      const description = constellationDetails[title] || `Details about the constellation ${title}.`;
  
      popup.querySelector('.popup-title').innerText = title;
      popup.querySelector('.popup-image').src = imgSrc;
      popup.querySelector('.popup-description').innerText = description;
      popup.style.display = 'flex';
    });
  });
  
  document.querySelector('.popup-close').addEventListener('click', () => {
    document.getElementById('constellation-popup').style.display = 'none';
  });
  


  function initMap() {
    // Map options
    const options = {
      zoom: 2,
      center: { lat: 0, lng: 0 }, // Center of the world
    };

    // Initialize map
    const map = new google.maps.Map(document.getElementById("map"), options);

    // Observatory locations
    const observatories = [
      {
        name: "Mauna Kea Observatory",
        position: { lat: 19.8207, lng: -155.4681 },
      },
      {
        name: "European Southern Observatory",
        position: { lat: -24.625, lng: -70.404 },
      },
      {
        name: "Arecibo Observatory",
        position: { lat: 18.3442, lng: -66.7528 },
      },
      {
        name: "Palomar Observatory",
        position: { lat: 33.3563, lng: -116.8656 },
      },
      {
        name: "Royal Greenwich Observatory",
        position: { lat: 51.4769, lng: -0.0005 },
      },
    ];

    // Add markers for each observatory
    observatories.forEach((observatory) => {
      const marker = new google.maps.Marker({
        position: observatory.position,
        map,
        title: observatory.name,
      });

      // Info window
      const infoWindow = new google.maps.InfoWindow({
        content: `<h3>${observatory.name}</h3>`,
      });

      // Show info window on marker click
      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    });
  }


  function showVideos(category) {
    const videos = {
      galaxies: [
        "https://www.youtube.com/embed/XYZ123",
        "https://www.youtube.com/embed/ABC456"
      ],
      stars: [
        "https://www.youtube.com/watch?v=F9EuA8mtHV8",
        "https://www.youtube.com/watch?v=F9EuA8mtHV8"
      ],
      planets: [
        "https://www.youtube.com/embed/JKL345",
        "https://www.youtube.com/embed/MNO678"
      ],
      "black-holes": [
        "https://www.youtube.com/embed/PQR901",
        "https://www.youtube.com/embed/STU234"
      ],
      exoplanets: [
        "https://www.youtube.com/embed/VWX567",
        "https://www.youtube.com/embed/YZA890"
      ],
      comets: [
        "https://www.youtube.com/embed/BCD123",
        "https://www.youtube.com/embed/EFG456"
      ]
    };
  
    const selectedVideos = videos[category];
    const iframes = document.querySelectorAll(".video");
    iframes[0].src = selectedVideos[0];
    iframes[1].src = selectedVideos[1];
  
    const title = document.querySelector(".video-title");
    const description = document.querySelector(".video-description");
    title.textContent = category.replace("-", " ").toUpperCase();
    description.textContent = `Learn about ${category.replace("-", " ")}`;
  }
  


  function initMap() {
    const location = { lat: 40.7128, lng: -74.0060 }; // Example coordinates for New York
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: location,
    });
    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  }

  
  // Show button when user scrolls down
window.onscroll = function() {
    let goToTopButton = document.getElementById("goToTop");
    
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        goToTopButton.style.display = "block";
    } else {
        goToTopButton.style.display = "none";
    }
};

// Scroll to the top smoothly when clicked
document.getElementById("goToTop").onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};


function updateTicker() {
    let tickerText = document.getElementById("ticker-text");

    // Get Current Date & Time
    let now = new Date();
    let dateTime = now.toLocaleString();

    // Get User's Location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude.toFixed(2);
            let lon = position.coords.longitude.toFixed(2);
            tickerText.innerHTML = `📍 Location: Lat ${lat}, Lon ${lon} | 🕒 ${dateTime}`;
        }, () => {
            tickerText.innerHTML = `🕒 ${dateTime} | Location unavailable`;
        });
    } else {
        tickerText.innerHTML = `🕒 ${dateTime} | Location not supported`;
    }
}

// Update every second
setInterval(updateTicker, 1000);
updateTicker();


document.querySelectorAll('.book-button').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default action if links are not real
      const bookTitle = button.closest('.book-card').querySelector('.book-title').innerText;
      const action = button.innerText; // "Purchase" or "Borrow"
      
      alert(`You have selected to ${action} the book: "${bookTitle}"`);
    });
  });
  







  


  document.addEventListener("DOMContentLoaded", () => {
    // Fade-in effect for elements
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transition = "opacity 1s ease-in-out";
        setTimeout(() => {
            el.style.opacity = 1;
        }, 500);
    });

    // 3D Effect on Scroll
    document.querySelectorAll(".planet-card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "rotateY(15deg) scale(1.05)";
            card.style.transition = "transform 0.3s ease-in-out";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "rotateY(0deg) scale(1)";
        });
    });

    // Open Modal with Smooth Fade-in
    const modal = document.getElementById("planet-modal");
    const closeBtn = document.querySelector(".close-btn");
    const cards = document.querySelectorAll(".planet-card");
    
    cards.forEach(card => {
        card.addEventListener("click", () => {
            modal.style.display = "flex";
            modal.style.opacity = 0;
            setTimeout(() => {
                modal.style.opacity = 1;
                modal.style.transition = "opacity 0.5s ease-in-out";
            }, 100);
        });
    });
    
    closeBtn.addEventListener("click", () => {
        modal.style.opacity = 0;
        setTimeout(() => {
            modal.style.display = "none";
        }, 500);
    });

    // Smooth Popup for Constellations
    document.querySelectorAll(".constellation-card").forEach(card => {
        card.addEventListener("click", () => {
            const popup = document.getElementById("constellation-popup");
            popup.style.display = "flex";
            popup.style.opacity = 0;
            setTimeout(() => {
                popup.style.opacity = 1;
                popup.style.transition = "opacity 0.5s ease-in-out";
            }, 100);
        });
    });
    
    document.querySelector(".popup-close").addEventListener("click", () => {
        const popup = document.getElementById("constellation-popup");
        popup.style.opacity = 0;
        setTimeout(() => {
            popup.style.display = "none";
        }, 500);
    });

    // Location Permission Request with Fade-in Message
    function requestLocationPermission() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log("Location Access Granted");
                    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
                },
                (error) => {
                    console.log("Location Access Denied");
                    console.log(error);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }
    requestLocationPermission();
});
