var productApi = 'https://671a0fd3acf9aa94f6a8f0d7.mockapi.io/product/Hotels';

document.addEventListener('DOMContentLoaded', function() {
    start();
});

function start() {
    getProducts(renderProducts);
    handleCreateForm();
    handleSearch();
}

function getProducts(callback) {
    fetch(productApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function handleSearch() {
    var searchBox = document.getElementById('search-box');

    searchBox.addEventListener('input', function() {
        var searchTerm = searchBox.value.toLowerCase();
        
        // Gọi lại API và chỉ hiển thị sản phẩm khớp với từ khóa
        getProducts(function(products) {
            var filteredProducts = products.filter(function(product) {
                return product.name.toLowerCase().includes(searchTerm);
            });
            renderProducts(filteredProducts);
        });
    });
}

function createProduct(data, callback) {
    var options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    fetch(productApi, options)
        .then(function(response) {
            return response.json();   
        })
        .then(callback);
}

function updateProduct(id, data, callback) {
    var options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    fetch(productApi + '/' + id, options)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function handleDeleteProduct(id) {
    var options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };
    fetch(productApi + '/' + id, options)
        .then(function(response) {
            return response.json();   
        })
        .then(function() {
            getProducts(renderProducts);
        });
}

function renderProducts(products) { 
    var listProductsBlock = document.querySelector('#list-products');
    var htmls = products.map(function(product) { 
        return `
            <div class="product-card" id="product-${product.id}">
                <h3>${product.name}</h3>
                <p>ID: ${product.id}</p>
                <p>Price: ${product.price}</p>
                
                <!-- Nút xóa và nút hiển thị ô cập nhật -->
                <button onclick="handleDeleteProduct(${product.id})">Delete</button>
                <button onclick="toggleUpdateForm(${product.id})">Update</button>

                <!-- Form cập nhật bên trong mỗi thẻ sản phẩm -->
                <div id="update-form-${product.id}" class="update-form" style="display: none;">
                    <input type="text" id="update-name-${product.id}" placeholder="New Name" value="${product.name}">
                    <input type="number" id="update-price-${product.id}" placeholder="New Price" value="${product.price}">
                    <button onclick="handleUpdateProduct(${product.id})">Save</button>
                </div>
            </div>
        `;
    });
    listProductsBlock.innerHTML = htmls.join('');
}

function toggleUpdateForm(id) {
    // Hiện hoặc ẩn form cập nhật trong thẻ sản phẩm
    var updateForm = document.getElementById(`update-form-${id}`);
    updateForm.style.display = updateForm.style.display === 'none' ? 'block' : 'none';
}

function handleUpdateProduct(id) {
    // Lấy dữ liệu từ các ô input trong form cập nhật
    var name = document.getElementById(`update-name-${id}`).value;
    var price = document.getElementById(`update-price-${id}`).value;

    var formData = {
        name: name,
        price: price,
    };

    // Cập nhật sản phẩm và tải lại danh sách
    updateProduct(id, formData, function() {
        getProducts(renderProducts);
    });
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var price = document.querySelector('input[name="price"]').value; 
        
        var formData = {
            name: name,
            price: price,
        };
        
        createProduct(formData, function() {
            getProducts(renderProducts);
        });
    }
}