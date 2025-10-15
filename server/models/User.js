import db from './database.js';
import bcrypt from 'bcryptjs';

class User {
  static create({ email, password, name, role = 'user' }) {
    const users = db.users.getAll();
    const hashedPassword = bcrypt.hashSync(password, 10);
    
    const newUser = {
      id: Date.now().toString(),
      email: email.toLowerCase(),
      password: hashedPassword,
      name,
      role,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    
    users.push(newUser);
    db.users.save(users);
    
    return { ...newUser, password: undefined };
  }

  static findById(id) {
    const user = db.users.find(u => u.id === id);
    if (!user) return null;
    return { ...user, password: undefined };
  }

  static findByEmail(email) {
    return db.users.find(u => u.email === email.toLowerCase());
  }

  static verifyPassword(plainPassword, hashedPassword) {
    return bcrypt.compareSync(plainPassword, hashedPassword);
  }

  static update(id, data) {
    const users = db.users.getAll();
    const index = users.findIndex(u => u.id === id);
    
    if (index === -1) return null;

    if (data.name) {
      users[index].name = data.name;
    }
    if (data.password) {
      users[index].password = bcrypt.hashSync(data.password, 10);
    }
    
    users[index].updated_at = new Date().toISOString();
    
    db.users.save(users);
    return { ...users[index], password: undefined };
  }

  static delete(id) {
    const users = db.users.getAll();
    const filtered = users.filter(u => u.id !== id);
    db.users.save(filtered);
    return { success: true };
  }

  static getAllUsers() {
    return db.users.filter(u => u.role === 'user').map(u => ({
      id: u.id,
      email: u.email,
      name: u.name,
      role: u.role,
      created_at: u.created_at
    }));
  }
}

export default User;
