// Thêm dữ liệu vào API
function addGuestAPI(guestData, callback) {
    fetch('https://6717a745b910c6a6e0294dfb.mockapi.io/api/v1/T_guest', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(guestData)
    })
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
}

document.getElementById("submitBooking").addEventListener("click", function() {    
    const newGuest = {
        fname: document.getElementById("first-name").value,
        lname: document.getElementById("last-name").value,
        number: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        addressLine1: document.getElementById('addL1').value,
        addressLine2: document.getElementById('addL2').value,
        specialRequest: document.getElementById('SpecR').value
    };
    addGuestAPI(newGuest, handleAddGuest);
});

function handleAddGuest(error, data) {
    if (error) {
        console.error('Lỗi khi tạo sản phẩm:', error);
    } else {
        console.log('Thêm dữ liệu thành công: ', data);
    }
}