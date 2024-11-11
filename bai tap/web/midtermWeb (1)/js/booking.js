// booking.js

const apiUrl = 'https://672209072108960b9cc29c4a.mockapi.io/api/v1/T_booking';

document.getElementById('proceedBooking').addEventListener('click', function() {
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;

    // Gửi dữ liệu đến API
    const bookingData = {
        checkin,
        checkout,
        adults,
        children
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Chuyển sang tab confirmation
        showTab('confirmation'); // Kiểm tra xem hàm này có tồn tại không
        // Gọi hàm để lấy thông tin billing
        getBillingDetails(data.id); // Giả sử API trả về ID của booking
        hideBookingModal(); // Ẩn modal sau khi thành công
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

// Hàm để lấy thông tin từ API và hiển thị vào Billing Details
function getBillingDetails(bookingId) {
    fetch(`${apiUrl}/${bookingId}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('arrival').value = data.checkin;
        document.getElementById('departure').value = data.checkout;
        // Tính toán Length of Stay
        const lengthOfStay = calculateLengthOfStay(data.checkin, data.checkout);
        document.getElementById('length-of-stay').value = lengthOfStay;
        // Hiển thị thông tin phòng và khách
        document.getElementById('room').value = 'Family Room'; // Hoặc lấy từ data nếu có
        document.getElementById('guest').value = `${data.adults} Adults, ${data.children} Children`;
        // Tính toán Subtotal và Total Cost nếu cần
    })
    .catch((error) => {
        console.error('Error fetching billing details:', error);
    });
}

// Hàm tính toán Length of Stay
function calculateLengthOfStay(checkin, checkout) {
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    const diffTime = Math.abs(checkoutDate - checkinDate);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Kết quả là số ngày
}

// Hàm hiển thị modal booking
function showBookingModal() {
    document.getElementById('booking-modal').classList.remove('hidden');
}

