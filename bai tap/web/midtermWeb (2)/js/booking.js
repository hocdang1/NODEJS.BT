// Hàm hiển thị modal booking
function showBookingModal() {
    document.getElementById('booking-modal').classList.remove('hidden');
}

// Thêm dữ liệu vào API
function addBookingAPI(bookingData, callback) {
    fetch('https://672209072108960b9cc29c4a.mockapi.io/api/v1/T_booking', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
    })
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
}

document.getElementById("proceedBooking").addEventListener("click", function() {    
    const newBooking = {
        dateStart: document.getElementById("checkin").value,
        dateEnd: document.getElementById("checkout").value,
        adults: document.getElementById('adults').value,
        children: document.getElementById('children').value
    };
    addBookingAPI(newBooking, handleAddBooking);
});

function handleAddBooking(error, data) {
    if (error) {
        console.error('Lỗi khi tạo sản phẩm:', error);
    } else {
        console.log('Thêm dữ liệu thành công: ', data);
    }
}