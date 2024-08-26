const products = document.getElementById('products');

(async () => {
    try {
        const res = await fetch('http://localhost:4000/api/products');
        const data = await res.json();
        console.log(data);
        data.forEach(product => {
            let htmlcontent = `<li>Nombre: ${product.name}  Precio: ${product.price} <Button>Add</Button></li> `;
            products.innerHTML += htmlcontent;
        });
    } catch (error) {
        console.log(error);
    }
})();


