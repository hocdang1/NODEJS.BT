document.addEventListener('DOMContentLoaded', () => {
  // Gọi API để lấy dữ liệu
  fetch('https://656d3ffbbcc5618d3c22ee91.mockapi.io/product')   
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('card-container');
      
      // Xử lý dữ liệu và tạo thẻ card
      data.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <h3>${product.id}</h3>
          <p>name: ${product.name}</p>
          <p>price: ${product.price}</p>
        `;
        container.appendChild(card); // Thêm thẻ card vào container
      });
    })
    .catch(error => console.log('Error fetching data:', error));
});

