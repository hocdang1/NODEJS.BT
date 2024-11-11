document.getElementById("reservation-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Search functionality not implemented.");
  });
  
  // Load thông tin chi tiết phòng (có thể tích hợp với API sau)
  document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.endsWith("room-detail.html")) {
      displayRoomDetails();
    }
  });
  
  function displayRoomDetails() {
    // Giả lập dữ liệu cho trang chi tiết phòng
    const roomDetails = {
      name: "Family Room",
      description: "The Family Room offers a spacious area perfect for family vacations.",
      beds: 2,
      adults: 2,
      children: 2,
      bathroom: true,
      facilities: [
        { name: "Full Breakfast", image: "images/facility-1.jpg" },
        { name: "Service Bar", image: "images/facility-2.jpg" }
      ]
    };
    
    document.querySelector(".room-detail h1").textContent = roomDetails.name;
    document.querySelector(".room-detail p").textContent = roomDetails.description;
}