// Define an array of products, each represented by an array containing name, price, quantity, image URL, and description
var products = [
    ['Sofa 1', '$345', 12, '../img/double-sofa-01.png', 'Comfortable sofa with modern design'],
    ['Sofa 2', '$355', 14, '../img/double-sofa-02.png', 'Elegant sofa with spacious seating'],
    ['Sofa 3', '$365', 16, '../img/double-sofa-03.png', 'Classic sofa with premium fabric'],
    ['Sofa 4', '$565', 10, '../img/double-sofa-04.png', 'Luxurious sofa with adjustable headrests'],
    ['Sofa 5', '$455', 8, '../img/double-sofa-05.png', 'Compact sofa perfect for small spaces'],
    ['Sofa 6', '$760', 20, '../img/double-sofa-06.png', 'Contemporary sofa with reclining feature'],
    ['Bed 1', '$300', 12, '../img/bed-01.png', 'Stylish bed frame with sturdy construction'],
    ['Bed 2', '$345', 14, '../img/bed-02.png', 'Minimalist bed design with storage drawers'],
    ['Bed 3', '$400', 16, '../img/bed-03.png', 'Platform bed with upholstered headboard'],
    ['Bed 4', '$590', 20, '../img/bed-04.png', 'Canopy bed for a romantic bedroom ambiance'],
    ['Bed 5', '$690', 24, '../img/bed-05.png', 'Modern bed with built-in LED lighting'],
    ['Bed 6', '$380', 14, '../img/bed-06.png', 'Classic wooden bed frame with slat support'],
    ['Painting 1', '$500', 23, '../img/painting-01.jpg', 'Abstract painting with vibrant colors'],
    ['Painting 2', '$450', 23, '../img/painting-02.jpg', 'Realistic landscape painting'],
    ['Painting 3', '$560', 18, '../img/painting-03.jpg', 'Impressionist style painting'],
    ['Painting 4', '$400', 23, '../img/painting-04.jpg', 'Surreal artwork with symbolic elements'],
    ['Painting 5', '$350', 15, '../img/painting-05.jpg', 'Contemporary art piece with geometric patterns'],
    ['Painting 6', '$340', 23, '../img/painting-06.jpg', 'Expressionist painting conveying emotions'],
    ['Flowerpot', '$435', 17, '../img/flowerpot.png', 'Decorative ceramic flowerpot for indoor plants'],
    ['Wing', '$280', 21, '../img/wing.png', 'Elegant wingback chair for reading nooks'],
    ['Horn', '$300', 23, '../img/horn.png', 'Sculptural horn ornament for tabletop decor']
];

// Retrieve the 'productIndex' parameter from the URL query string
var urlParams = new URLSearchParams(window.location.search);
var productIndex = parseInt(urlParams.get('productIndex'));

// Update the product details on the webpage based on the productIndex
document.getElementById('price').innerHTML = products[productIndex][1];
document.getElementById('productDetail').getElementsByTagName('img')[0].src = products[productIndex][3];
document.getElementById('productDetail').getElementsByTagName('p')[1].getElementsByTagName('span')[0].innerHTML = products[productIndex][2];
document.getElementById('description').innerHTML = products[productIndex][4];

// Add event listener to the 'Add to Cart' button
document.getElementById('addToCart').addEventListener('click', function() {
    var cartCount = document.getElementById('cartCount');
    var quantity = document.getElementById('quantity');
    var message = document.getElementById('message');

    // Increase cart count by 1
    cartCount.textContent = parseInt(cartCount.textContent) + 1;

    // Decrease quantity by 1
    var currentQuantity = parseInt(quantity.textContent);
    if (currentQuantity > 0) {
        quantity.textContent = currentQuantity - 1;
    } else {
        message.textContent = "Product is out of Stock!";
    }
    // Hide the message after 2 seconds
    setTimeout(function() {
        message.textContent = "";
    }, 2000);
});

// Add event listener to the 'Remove' button
document.getElementById('remove').addEventListener('click', function() {
    var cartCount = document.getElementById('cartCount');
    var quantity = document.getElementById('quantity');
    var message = document.getElementById('message');

    // Decrease cart count by 1 if cart is not empty
    var currentCartCount = parseInt(cartCount.textContent);
    if (currentCartCount > 0) {
        cartCount.textContent = currentCartCount - 1;
        // Increase quantity by 1
        quantity.textContent = parseInt(quantity.textContent) + 1;
        message.textContent = ""; // Clear any previous messages
    } else {
        message.textContent = "Nothing to remove!";
    }

    // Hide the message after 2 seconds
    setTimeout(function() {
        message.textContent = "";
    }, 2000);
});
