# Bantu Ants Travel Club - Complete Authentication System

## 🚀 Features

- **User Authentication**
  - Sign up with email and password
  - Login and logout
  - Protected user routes (store, cart, checkout)
  - Session management with JWT tokens

- **Admin Portal**
  - Separate admin login
  - Protected admin dashboard
  - Manage site content and blog posts
  - Access control and role-based permissions

- **Security**
  - Password hashing with bcrypt
  - JWT authentication for APIs
  - HttpOnly session cookies
  - Input validation and error handling
  - Role-based access control (User/Admin)

- **Tech Stack**
  - **Frontend**: React + Vite + TypeScript + Tailwind CSS + React Router
  - **Backend**: Node.js + Express
  - **Database**: JSON file-based storage (easily upgradeable to PostgreSQL/MongoDB)
  - **Authentication**: JWT + bcrypt

## 📁 Project Structure

```
batclander/
├── src/                          # Frontend React application
│   ├── components/
│   │   ├── LoginPage.jsx         # User/Admin login page
│   │   ├── SignupPage.jsx        # User registration page
│   │   ├── AdminDashboardNew.jsx # Admin dashboard
│   │   ├── ProtectedRoute.jsx    # Route protection wrapper
│   │   └── ...
│   ├── contexts/
│   │   └── AuthContext.jsx       # Authentication context & hooks
│   ├── services/
│   │   └── authService.js        # API calls to backend
│   └── App.tsx                   # Main app with routes
│
├── server/                       # Backend API server
│   ├── routes/
│   │   ├── auth.js               # Auth endpoints (signup, login, logout)
│   │   └── admin.js              # Admin endpoints
│   ├── models/
│   │   ├── User.js               # User model with CRUD operations
│   │   └── database.js           # Database abstraction layer
│   ├── middleware/
│   │   └── auth.js               # JWT verification & authorization
│   ├── utils/
│   │   └── jwt.js                # JWT generation & verification
│   ├── data/                     # JSON database files
│   │   ├── users.json
│   │   ├── carts.json
│   │   └── orders.json
│   ├── .env                      # Environment variables
│   └── index.js                  # Server entry point
```

## 🔧 Setup Instructions

### 1. Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### 2. Environment Configuration

The backend uses environment variables configured in `server/.env`:

```env
PORT=5000
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d
NODE_ENV=development
ADMIN_EMAIL=admin@batclander.com
ADMIN_PASSWORD=admin123
```

**⚠️ IMPORTANT**: Change the `JWT_SECRET` in production!

### 3. Start the Servers

**Option A: Start both servers manually**

```bash
# Terminal 1 - Start backend server
cd server
node index.js

# Terminal 2 - Start frontend dev server
npm run dev
```

**Option B: Use the start script (Unix/Mac)**

```bash
chmod +x start-all.sh
./start-all.sh
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 👤 Default Admin Credentials

```
Email: admin@batclander.com
Password: admin123
```

## 📍 Routes

### Public Routes
- `/` - Home page
- `/login` - User and Admin login
- `/signup` - User registration
- `/animation` - Animation page
- `/travel` - Travel club page
- `/blog` - Blog listing
- `/article/:id` - Blog article view

### Protected User Routes
- `/store` - Shopping (requires user login)

### Protected Admin Routes
- `/admin/dashboard` - Admin dashboard (requires admin login)

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/signup` - Create new user account
- `POST /api/auth/login` - User/Admin login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/verify` - Verify JWT token
- `GET /api/auth/me` - Get current user info

### Admin
- `GET /api/admin/users` - Get all users (admin only)
- `GET /api/admin/stats` - Get dashboard stats (admin only)

## 🛠️ Development

### Frontend Development
The frontend uses:
- React Router for routing
- AuthContext for global authentication state
- Protected routes for access control
- Clean, modern UI with Tailwind CSS

### Backend Development
The backend features:
- RESTful API design
- JWT-based authentication
- Role-based access control
- Input validation with express-validator
- Modular route structure

### Database
Currently uses JSON file storage for simplicity. To upgrade to a real database:

1. Install database client (e.g., `pg` for PostgreSQL, `mongoose` for MongoDB)
2. Update `server/models/database.js` with your database connection
3. Update `server/models/User.js` with database-specific queries

## 🔒 Security Features

1. **Password Hashing**: All passwords are hashed with bcrypt (10 rounds)
2. **JWT Tokens**: Secure, stateless authentication
3. **HTTP-Only Cookies**: Prevents XSS attacks
4. **Input Validation**: Server-side validation for all inputs
5. **Role-Based Access**: Separate user and admin permissions
6. **CORS Configuration**: Restricted to allowed origins

## 📝 Usage Examples

### User Signup
```javascript
const response = await authService.signup({
  name: 'John Doe',
  email: 'john@example.com',
  password: 'securepassword123'
});
```

### Login (User or Admin)
```javascript
const response = await authService.login({
  email: 'admin@batclander.com',
  password: 'admin123'
});
```

### Protected Component
```jsx
<ProtectedRoute>
  <Shop />
</ProtectedRoute>
```

### Admin Only Component
```jsx
<ProtectedRoute adminOnly>
  <AdminDashboard />
</ProtectedRoute>
```

## 🚧 Next Steps / Future Enhancements

- [ ] Add password reset functionality
- [ ] Implement email verification
- [ ] Add refresh token mechanism
- [ ] Migrate to PostgreSQL/MongoDB
- [ ] Add user profile management
- [ ] Implement shopping cart persistence
- [ ] Add order management
- [ ] Set up production deployment
- [ ] Add rate limiting
- [ ] Implement logging system

## 📄 License

MIT

## 👥 Support

For issues or questions, please create an issue in the repository.
