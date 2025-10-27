# 🛍️ Product Management System

A complete full-stack web application for managing products built with **FastAPI** (backend) and **HTML/CSS/JavaScript** (frontend).

## ✨ Features

- **CRUD Operations**: Create, Read, Update, Delete products
- **Modern UI**: Clean, responsive design with hover effects
- **Real-time Updates**: Dynamic product list updates
- **SQLite Database**: Persistent data storage
- **RESTful API**: Well-structured API endpoints

## 🏗️ Project Structure

```
productapp/
├── backend/
│   └── app/
│       ├── main.py          # FastAPI application
│       ├── models.py        # SQLAlchemy models
│       ├── schemas.py       # Pydantic schemas
│       ├── crud.py         # Database operations
│       └── database.py      # Database configuration
└── frontend/
    ├── index.html          # Main HTML page
    ├── style.css           # Styling
    └── script.js           # Frontend logic
```

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- pip

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/productapp.git
   cd productapp
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   ```

3. **Activate virtual environment**
   ```bash
   # Windows
   venv\Scripts\activate
   
   # macOS/Linux
   source venv/bin/activate
   ```

4. **Install dependencies**
   ```bash
   pip install fastapi uvicorn sqlalchemy
   ```

5. **Run the application**
   ```bash
   uvicorn backend.app.main:app --reload --host 127.0.0.1 --port 8000
   ```

6. **Open your browser**
   Navigate to: `http://127.0.0.1:8000`

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products/` | Get all products |
| POST | `/api/products/` | Create new product |
| PUT | `/api/products/{id}` | Update product |
| DELETE | `/api/products/{id}` | Delete product |

## 🎯 Usage

### Adding a Product
1. Fill out the form with product details
2. Click "Save Product"
3. Product appears in the table below

### Editing a Product
1. Click "Edit" button next to any product
2. Modify the form fields
3. Click "Update Product"

### Deleting a Product
1. Click "Delete" button next to any product
2. Product is removed from the table

## 🛠️ Technologies Used

### Backend
- **FastAPI**: Modern, fast web framework
- **SQLAlchemy**: SQL toolkit and ORM
- **SQLite**: Lightweight database
- **Pydantic**: Data validation
- **Uvicorn**: ASGI server

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox
- **Vanilla JavaScript**: No frameworks, pure JS
- **Fetch API**: HTTP requests

## 📊 Database Schema

### Product Model
```python
class Product(Base):
    __tablename__ = "product"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    description = Column(String, nullable=False)
    price = Column(Float, nullable=False)
    quantity = Column(Integer, nullable=False)
```

## 🎨 UI Features

- **Responsive Design**: Works on desktop and mobile
- **Clean Interface**: Modern, professional look
- **Interactive Elements**: Hover effects on buttons
- **Form Validation**: Client-side validation
- **Dynamic Updates**: Real-time product list updates

## 🔧 Development

### Running in Development Mode
```bash
uvicorn backend.app.main:app --reload
```

### API Documentation
Visit `http://127.0.0.1:8000/docs` for interactive API documentation.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📞 Support

If you have any questions or need help, please open an issue or contact the maintainer.

---

**Happy Coding! 🚀**
