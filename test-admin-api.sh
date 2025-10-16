#!/bin/bash

# Test script for Admin Dashboard API
# This creates a sample blog post to verify the system works

echo "🧪 Testing Admin Dashboard API..."
echo ""

# First, login as admin to get the JWT token
echo "1️⃣ Logging in as admin..."
LOGIN_RESPONSE=$(curl -s -c cookies.txt -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@batclander.com",
    "password": "admin123"
  }')

echo "Response: $LOGIN_RESPONSE"
echo ""

# Create a sample blog post
echo "2️⃣ Creating a sample blog post..."
BLOG_RESPONSE=$(curl -s -b cookies.txt -X POST http://localhost:5000/api/admin/blogs \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Welcome to Our New Blog!",
    "excerpt": "This is our first blog post on the new CMS system.",
    "content": "# Welcome!\n\nWe are excited to launch our new blog system. This post was created using our admin dashboard.\n\n## Features\n- Easy content creation\n- Markdown support\n- Draft and publish workflow\n\nStay tuned for more amazing content!",
    "category": "News",
    "image": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800",
    "published": true,
    "featured": true
  }')

echo "Response: $BLOG_RESPONSE"
echo ""

# Get all blogs
echo "3️⃣ Fetching all blog posts..."
ALL_BLOGS=$(curl -s -b cookies.txt http://localhost:5000/api/admin/blogs)
echo "Response: $ALL_BLOGS"
echo ""

# Get dashboard stats
echo "4️⃣ Fetching dashboard stats..."
STATS=$(curl -s -b cookies.txt http://localhost:5000/api/admin/stats)
echo "Response: $STATS"
echo ""

# Get site content
echo "5️⃣ Fetching site content..."
CONTENT=$(curl -s -b cookies.txt http://localhost:5000/api/admin/content)
echo "Response: $CONTENT"
echo ""

# Clean up cookies file
rm -f cookies.txt

echo "✅ Test complete!"
