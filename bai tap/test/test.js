document.addEventListener('DOMContentLoaded', () => {
    loadProducts(); // Load sản phẩm khi trang tải
    
    // Tải sản phẩm từ API và hiển thị dưới dạng card
    function loadProducts() {
      fetch('https://656d3ffbbcc5618d3c22ee91.mockapi.io/product')
        .then(response => response.json())
        .then(data => {
          const container = document.getElementById('card-container');
          container.innerHTML = ''; // Xóa card cũ
          data.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
              <h3>${product.id}</h3>
              <p>Name: ${product.name}</p>
              <p>Price: ${product.price}</p>
              <button onclick="deleteProduct(${product.id})">Delete</button>
              <button onclick="updateProductPrompt(${product.id})">Update</button>
            `;
            container.appendChild(card); // Thêm thẻ card vào container
          });
        })
        .catch(error => console.log('Error fetching data:', error));
    }
    
    // Thêm mới sản phẩm
    window.createProduct = function() {
      const name = document.getElementById('productName').value;
      const price = document.getElementById('productPrice').value;
      fetch('https://656d3ffbbcc5618d3c22ee91.mockapi.io/product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, price })
      })
      .then(response => response.json())
      .then(() => {
        loadProducts(); // Cập nhật danh sách sản phẩm
        document.getElementById('productName').value = '';
        document.getElementById('productPrice').value = '';
      })
      .catch(error => console.log('Error creating product:', error));
    };
  
    // Xóa sản phẩm
    window.deleteProduct = function(id) {
      fetch(`https://656d3ffbbcc5618d3c22ee91.mockapi.io/product/${id}`, {
        method: 'DELETE'
      })
      .then(() => loadProducts()) // Cập nhật lại danh sách sau khi xóa
      .catch(error => console.log('Error deleting product:', error));
    };
  
    // Cập nhật sản phẩm
    window.updateProductPrompt = function(id) {
      const newName = prompt("Enter new product name:");
      const newPrice = prompt("Enter new product price:");
  
      if (newName && newPrice) {
        fetch(`https://656d3ffbbcc5618d3c22ee91.mockapi.io/product/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: newName, price: newPrice })
        })
        .then(() => loadProducts()) // Cập nhật lại danh sách sau khi cập nhật
        .catch(error => console.log('Error updating product:', error));
      }
    };
  });