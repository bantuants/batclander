import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_DIR = path.join(__dirname, '../data');
const USERS_FILE = path.join(DB_DIR, 'users.json');
const CARTS_FILE = path.join(DB_DIR, 'carts.json');
const ORDERS_FILE = path.join(DB_DIR, 'orders.json');
const BLOGS_FILE = path.join(DB_DIR, 'blogs.json');
const CONTENT_FILE = path.join(DB_DIR, 'content.json');

// Create data directory if it doesn't exist
if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}

// Initialize database files
const initDB = () => {
  if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2));
  }
  if (!fs.existsSync(CARTS_FILE)) {
    fs.writeFileSync(CARTS_FILE, JSON.stringify([], null, 2));
  }
  if (!fs.existsSync(ORDERS_FILE)) {
    fs.writeFileSync(ORDERS_FILE, JSON.stringify([], null, 2));
  }
  if (!fs.existsSync(BLOGS_FILE)) {
    fs.writeFileSync(BLOGS_FILE, JSON.stringify([], null, 2));
  }
  if (!fs.existsSync(CONTENT_FILE)) {
    fs.writeFileSync(CONTENT_FILE, JSON.stringify([], null, 2));
  }
  console.log('✅ Database initialized successfully');
};

// Read and write helpers
const readJSON = (file) => {
  try {
    const data = fs.readFileSync(file, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeJSON = (file, data) => {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
};

const db = {
  users: {
    getAll: () => readJSON(USERS_FILE),
    save: (users) => writeJSON(USERS_FILE, users),
    find: (predicate) => readJSON(USERS_FILE).find(predicate),
    filter: (predicate) => readJSON(USERS_FILE).filter(predicate)
  },
  carts: {
    getAll: () => readJSON(CARTS_FILE),
    save: (carts) => writeJSON(CARTS_FILE, carts)
  },
  orders: {
    getAll: () => readJSON(ORDERS_FILE),
    save: (orders) => writeJSON(ORDERS_FILE, orders)
  },
  blogs: {
    getAll: () => readJSON(BLOGS_FILE),
    save: (blogs) => writeJSON(BLOGS_FILE, blogs),
    find: (predicate) => readJSON(BLOGS_FILE).find(predicate),
    filter: (predicate) => readJSON(BLOGS_FILE).filter(predicate)
  },
  content: {
    getAll: () => readJSON(CONTENT_FILE),
    save: (content) => writeJSON(CONTENT_FILE, content)
  }
};

initDB();

export default db;
