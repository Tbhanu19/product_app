
const API_URL = "http://127.0.0.1:8000/api/products/";

async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch products");
    const products = await response.json();

    const tbody = document.querySelector("#productTable tbody");
    tbody.innerHTML = "";

    products.forEach(p => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${p.id}</td>
        <td>${p.name}</td>
        <td>${p.quantity}</td>
        <td>${p.price}</td>
        <td>${p.description}</td>
        <td>
          <button class="action-btn edit-btn" onclick="editProduct(${p.id}, '${p.name}', ${p.quantity}, ${p.price}, '${p.description}')">Edit</button>
          <button class="action-btn delete-btn" onclick="deleteProduct(${p.id})">Delete</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  } catch (error) {
    console.error("Error loading products:", error);
  }
}

document.getElementById("productForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const productId = document.getElementById("productId").value;
  const name = document.getElementById("name").value.trim();
  const description = document.getElementById("description").value.trim();
  const price = parseFloat(document.getElementById("price").value);
  const quantity = parseInt(document.getElementById("quantity").value);

  try {
    const url = productId ? `${API_URL}${productId}` : API_URL;
    const method = productId ? "PUT" : "POST";
    
    const response = await fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, price, quantity }),
    });

    if (!response.ok) throw new Error(`Failed to ${productId ? 'update' : 'add'} product`);
    e.target.reset();
    document.getElementById("productId").value = "";
    document.getElementById("submitBtn").textContent = "Save Product";
    fetchProducts();
  } catch (error) {
    console.error(`Error ${productId ? 'updating' : 'adding'} product:`, error);
  }
});

function editProduct(id, name, quantity, price, description) {
  document.getElementById("productId").value = id;
  document.getElementById("name").value = name;
  document.getElementById("quantity").value = quantity;
  document.getElementById("price").value = price;
  document.getElementById("description").value = description;
  
 
  document.getElementById("submitBtn").textContent = "Update Product";
  
  m
  document.getElementById("productForm").scrollIntoView({ behavior: 'smooth' });
}

async function deleteProduct(id) {
  try {
    const response = await fetch(`${API_URL}${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Failed to delete product");
    fetchProducts();
  } catch (error) {
    console.error("Error deleting product:", error);
  }
}

fetchProducts();
