var roomApi = 'https://6717a745b910c6a6e0294dfb.mockapi.io/api/v1/khachsan';

document.addEventListener('DOMContentLoaded', function() {
    start();
});

function start() {
    getRooms(renderRooms);
    handleRoomForm();
}

// Fetch all rooms from API
function getRooms(callback) {
    fetch(roomApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
        .catch(function(error) {
            console.error('Error fetching rooms:', error);
        });
}

// Render rooms to the DOM
function renderRooms(rooms) {
    var roomContainer = document.querySelector('.reservation-container');
    var roomList = document.createElement('div');
    roomList.className = 'room-list';
    
    var htmls = rooms.map(function(room) {
        return `
            <div class="room-card">
                <h3>${room.name}</h3>
                <p>Check-in: ${room.checkin}</p>
                <p>Check-out: ${room.checkout}</p>
                <p>Adults: ${room.adults}</p>
                <p>Kids: ${room.kids}</p>
                <p>Room Type: ${room.room}</p>
                <button onclick="deleteRoom(${room.id})">Delete</button>
            </div>
        `;
    });
    roomList.innerHTML = htmls.join('');
    roomContainer.appendChild(roomList);
}

// Handle form submission to create a new room
function handleRoomForm() {
    var roomForm = document.querySelector('.reservation-form');
    
    roomForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        var checkin = document.getElementById('checkin').value;
        var checkout = document.getElementById('checkout').value;
        var adults = document.getElementById('adults').value;
        var kids = document.getElementById('kids').value;
        var roomType = document.getElementById('room').value;
        
        // Construct room data object
        var roomData = {
            name: `Reservation for ${roomType}`,
            checkin: checkin,
            checkout: checkout,
            adults: adults,
            kids: kids,
            room: roomType
        };

        // Send room data to API
        createRoom(roomData, function() {
            getRooms(renderRooms); // Refresh rooms list
        });
    });
}

// Create a new room in the API
function createRoom(data, callback) {
    var options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    fetch(roomApi, options)
        .then(function(response) {
            return response.json();   
        })
        .then(callback)
        .catch(function(error) {
            console.error('Error creating room:', error);
        });
}

// Delete a room
function deleteRoom(id) {
    var options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    fetch(`${roomApi}/${id}`, options)
        .then(function(response) {
            return response.json();
        })
        .then(function() {
            getRooms(renderRooms); // Refresh rooms list
        })
        .catch(function(error) {
            console.error('Error deleting room:', error);
        });
}