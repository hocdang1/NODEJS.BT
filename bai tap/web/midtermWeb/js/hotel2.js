document.getElementById('searchButton').addEventListener('click', function() {
    // Get selected room type
    const selectedRoom = document.getElementById('room').value;
    
    // Fetch products from the API
    fetch('https://672209072108960b9cc29c4a.mockapi.io/api/v1/T_room')
        .then(response => response.json())
        .then(products => {
            // Filter products based on the selected room type
            const filteredProducts = selectedRoom === "All" 
                ? products 
                : products.filter(product => product.roomType === selectedRoom);

            // Display filtered products
            displayProducts(filteredProducts);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayProducts(filteredProducts) {
    const mainCard = document.getElementById('main-card2');
    mainCard.innerHTML = ""; // Clear previous results

    if (filteredProducts.length === 0) {
        mainCard.innerHTML = "<p>No products found for the selected room type.</p>";
    } else {
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card', 'p-4', 'border', 'border-gray-300', 'rounded-md', 'bg-white', 'shadow');
            productCard.innerHTML = `
            <div class="w-[25rem] h-[53rem] bg-white rounded-lg">
                <img src="${product.image}" alt="" class="w-[25rem] h-[35rem] object-cover cursor-pointer" data-id="${product.id}" onclick="openModal(this)">
                <div class="flex flex-col text-center space-y-3 mt-2 p-3">
                    <span class="text-3xl font-medium">${product.name}</span>
                    <span class="text-lg font-medium">${product.price}$/Per Night</span>
                    <span>${product.desc}</span>
                    <button class="bg-[#487254] text-white p-2 px-3 font-medium rounded hover:opacity-90" onclick="showBookingModal()">Book Now</button> 
                    <button class="underline underline-offset-4">Check Out</button>
                </div>
            </div>
            `;
            mainCard.appendChild(productCard);
        });
    }
}