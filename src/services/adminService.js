const API_URL = 'http://localhost:5000/api/admin';

// ============ BLOG OPERATIONS ============

export const blogService = {
  // Get all blogs
  async getAll(filters = {}) {
    const params = new URLSearchParams(filters);
    const response = await fetch(`${API_URL}/blogs?${params}`, {
      credentials: 'include'
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch blogs');
    }
    
    return response.json();
  },

  // Get single blog
  async getById(id) {
    const response = await fetch(`${API_URL}/blogs/${id}`, {
      credentials: 'include'
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch blog');
    }
    
    return response.json();
  },

  // Create blog
  async create(blogData) {
    const response = await fetch(`${API_URL}/blogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(blogData)
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to create blog');
    }
    
    return response.json();
  },

  // Update blog
  async update(id, updates) {
    const response = await fetch(`${API_URL}/blogs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(updates)
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to update blog');
    }
    
    return response.json();
  },

  // Delete blog
  async delete(id) {
    const response = await fetch(`${API_URL}/blogs/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to delete blog');
    }
    
    return response.json();
  },

  // Get categories
  async getCategories() {
    const response = await fetch(`${API_URL}/blogs/meta/categories`, {
      credentials: 'include'
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch categories');
    }
    
    return response.json();
  }
};

// ============ SITE CONTENT OPERATIONS ============

export const contentService = {
  // Get site content
  async get() {
    const response = await fetch(`${API_URL}/content`, {
      credentials: 'include'
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch content');
    }
    
    return response.json();
  },

  // Update site content
  async update(updates) {
    const response = await fetch(`${API_URL}/content`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(updates)
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to update content');
    }
    
    return response.json();
  },

  // Update specific section
  async updateSection(section, data) {
    const response = await fetch(`${API_URL}/content/${section}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to update section');
    }
    
    return response.json();
  },

  // Reset to defaults
  async reset() {
    const response = await fetch(`${API_URL}/content/reset`, {
      method: 'POST',
      credentials: 'include'
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to reset content');
    }
    
    return response.json();
  }
};

// ============ STATS & USERS ============

export const adminService = {
  // Get dashboard stats
  async getStats() {
    const response = await fetch(`${API_URL}/stats`, {
      credentials: 'include'
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch stats');
    }
    
    return response.json();
  },

  // Get all users
  async getUsers() {
    const response = await fetch(`${API_URL}/users`, {
      credentials: 'include'
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch users');
    }
    
    return response.json();
  }
};

export default {
  blogs: blogService,
  content: contentService,
  admin: adminService
};
