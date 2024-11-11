// URL API
const apiURL = 'https://6717a745b910c6a6e0294dfb.mockapi.io/api/v1/khachsan';

// Hàm gọi API và lấy dữ liệu phòng
async function fetchRooms() {
    try {
        const response = await fetch(apiURL);
        const rooms = await response.json();
        displayRooms(rooms);
    } catch (error) {
        console.error("Error fetching rooms:", error);
    }
}

// Hàm hiển thị phòng trong HTML
function displayRooms(rooms) {
    const roomContainer = document.getElementById('room-container');
    roomContainer.innerHTML = ''; // Xóa nội dung hiện tại (nếu có)

    rooms.forEach(room => {
        // Tạo thẻ HTML cho từng phòng
        const roomCard = document.createElement('div');
        roomCard.classList.add('room-card');

        roomCard.innerHTML = `
            <img src="${room.image}" alt="${room.name}">
            <h2>${room.name}</h2>
            <p><strong>${room.price}$</strong>/Per Night</p>
            <p>${room.description}</p>
            <button class="book-now">Book Now</button>
        `;

        roomContainer.appendChild(roomCard);
    });
}

// Gọi hàm fetchRooms khi tải trang
fetchRooms();
