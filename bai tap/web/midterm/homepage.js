// URL API
const apiURL = 'https://6717a745b910c6a6e0294dfb.mockapi.io/api/v1/khachsan';

// Function to fetch rooms from API
async function fetchRooms() {
    try {
        const response = await fetch(apiURL);
        const rooms = await response.json();
        displayRooms(rooms);
    } catch (error) {
        console.error("Error fetching rooms:", error);
    }
}

// Function to display rooms in HTML
function displayRooms(rooms) {
    const roomContainer = document.getElementById('room-container');
    roomContainer.innerHTML = ''; // Clear existing content

    rooms.forEach(room => {
        const roomCard = document.createElement('div');
        roomCard.classList.add('room-card');

        roomCard.innerHTML = `
            <img src="${room.image}" alt="" class="room-image cursor-pointer">
            <h2>${room.room}</h2>
            <p><strong>${room.billing}$</strong>/Per Night</p>
            <p>${room.description}</p>
            <button class="book-now">Book Now</button>
        `;

        roomContainer.appendChild(roomCard);

        // Add click event to the image to open modal
        roomCard.querySelector('.room-image').addEventListener('click', () => {
            openModal(room);
        });
    });
}

// Function to open room modal
function openModal(room) {
    document.getElementById('modalRoomName').textContent = room.room;
    document.getElementById('modalDescription').textContent = room.description;
    document.getElementById('modalBilling').textContent = `${room.billing}$ / Per Night`;
    document.getElementById('modalImage').src = room.image;

    const modal = new bootstrap.Modal(document.getElementById('roomModal'));
    modal.show();
}

// Function to filter and search rooms by name
function searchRooms() {
    const searchInput = document.getElementById('room-search').value.toLowerCase();

    fetch(apiURL)
        .then(response => response.json())
        .then(rooms => {
            const filteredRooms = rooms.filter(room => {
                return room.room.toLowerCase().includes(searchInput);
            });
            displayRooms(filteredRooms);
        })
        .catch(error => console.error("Error searching rooms:", error));
}

// Add event listener to the "Search Now" button
document.querySelector('.search-button').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission
    searchRooms(); // Call searchRooms function
});

// Fetch and display rooms on page load
fetchRooms();