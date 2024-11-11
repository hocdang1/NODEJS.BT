// Xem chi tiết
function openModal(imageElement) {
    const productId = imageElement.getAttribute("data-id");

    fetch('https://672209072108960b9cc29c4a.mockapi.io/api/v1/T_room/' + productId)
        .then(response => response.json())
        .then(product => {

            document.querySelector("#modal-title").innerText = product.name;
            document.querySelector("#modal-description").innerText = product.desc;
            document.querySelector("#modal-price").innerText = `${product.price}$/Per Night`;
            document.querySelector("#modal-image").src = product.image;

            document.getElementById("modal-overlay").classList.remove("hidden");
        })
        .catch(error => console.error('Error loading product details:', error));
}

// Close the modal
function closeModal() {
    document.getElementById("modal-overlay").classList.add("hidden");
}