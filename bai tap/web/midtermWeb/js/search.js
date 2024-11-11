const apiURL = 'https://672209072108960b9cc29c4a.mockapi.io/api/v1/T_room';

// Fetch rooms data from the API
async function fetchRooms() {
    try {
        const response = await fetch(apiURL);
        const rooms = await response.json();
        displayRooms(rooms);
        
        // Store the fetched rooms for filtering
        window.allRooms = rooms;
    } catch (error) {
        console.error("Error fetching rooms:", error);
    }
}

// Display rooms based on the fetched data or filtered data
function displayRooms(rooms) {
    const roomContainer = document.getElementById('room-container');
    roomContainer.innerHTML = ''; // Clear current content

    rooms.forEach(room => {
        const roomCard = document.createElement('div');
        roomCard.classList.add('room-card');

        roomCard.innerHTML = `
            <img src="${room.image}" alt="" class="room-image cursor-pointer">
            <h2>${room.room}</h2>
            <p><strong>${room.billing}$</strong>/Per Night</p>
            <p>${room.description}</p>
            <button class="book-now" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button>
            <button class="confirm-booking" data-bs-toggle="modal" data-bs-target="#confirmModal">Confirm Booking</button>
        `;

        roomContainer.appendChild(roomCard);

        // Add click event to the image to open the modal
        roomCard.querySelector('.room-image').addEventListener('click', () => {
            openModal(room);
        });
    });
}



// Event listener for search button
document.getElementById('search-button').addEventListener('click', () => {
    const selectedRoomType = document.getElementById('room-select').value;

    // Check if "All" is selected to display all rooms, else filter by room type
    const filteredRooms = selectedRoomType === 'All' 
        ? window.allRooms 
        : window.allRooms.filter(room => room.room === selectedRoomType);
    
    // Display the filtered (or all) rooms
    displayRooms(filteredRooms);
});



// Call fetchRooms when page loads
fetchRooms();