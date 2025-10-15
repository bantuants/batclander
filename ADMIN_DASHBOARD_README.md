# Admin Dashboard & CMS System

## Overview
A complete, secure Admin Dashboard and Content Management System (CMS) built from scratch for the Bantu Ants Travel Club website. This system allows authorized administrators to manage blog posts and site content with a clean, modern UI.

## Features

### 🔐 Security
- **JWT Authentication**: Secure token-based authentication
- **Role-Based Access Control**: Admin-only access with middleware protection
- **Protected Routes**: Frontend route guards to prevent unauthorized access
- **HTTP-Only Cookies**: Secure token storage

### 📝 Blog Management
- **Full CRUD Operations**: Create, Read, Update, Delete blog posts
- **Rich Content Editor**: Textarea with markdown support for blog content
- **Draft System**: Save posts as drafts before publishing
- **Featured Posts**: Mark posts as featured for homepage display
- **Categories**: Organize posts by category (Travel, Animation, Culture, etc.)
- **Image Support**: Add cover images to blog posts
- **Quick Actions**: Publish/unpublish, edit, delete with single click
- **Filtering**: View all posts, published only, or drafts only

### 🎨 Site Content Management
- **Hero Section**: Edit homepage hero title, subtitle, and background image
- **About Section**: Manage about page content and images
- **Homepage Content**: Configure featured sections and preview text
- **Social Media**: Update social media handles (Instagram, Twitter, TikTok, YouTube)
- **Contact Info**: Manage email and phone contact information
- **Store Settings**: Configure store banner text
- **Footer**: Customize footer copyright text
- **Reset to Defaults**: One-click reset to original content

### 📊 Dashboard Overview
- **Statistics Cards**: 
  - Total users count
  - Total blogs count
  - Published blogs count
  - Draft blogs count
- **Quick Actions**: Fast access to common tasks
- **Tabbed Interface**: Organized sections for blogs, content, and users

## Tech Stack

### Backend
- **Node.js + Express**: RESTful API server
- **JSON Database**: File-based storage (blogs.json, content.json)
- **UUID**: Unique ID generation for blog posts
- **JWT**: JSON Web Tokens for authentication
- **bcrypt**: Password hashing

### Frontend
- **React 18**: Component-based UI
- **TypeScript**: Type-safe code
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first styling
- **shadcn/ui**: High-quality UI components
- **Lucide React**: Modern icons
- **Sonner**: Toast notifications

## File Structure

```
server/
├── models/
│   ├── Blog.js           # Blog CRUD operations
│   ├── SiteContent.js    # Site content CRUD operations
│   ├── User.js           # User management
│   └── database.js       # Database abstraction layer
├── routes/
│   ├── admin.js          # Admin API endpoints
│   └── auth.js           # Authentication endpoints
├── middleware/
│   └── auth.js           # JWT verification & role checks
├── data/
│   ├── blogs.json        # Blog posts storage
│   ├── content.json      # Site content storage
│   └── users.json        # User data storage
└── index.js              # Server entry point

src/
├── pages/
│   └── AdminDashboardPage.tsx  # Main dashboard page
├── components/
│   ├── admin/
│   │   ├── BlogList.tsx       # Blog list component
│   │   ├── BlogEditor.tsx     # Blog create/edit form
│   │   └── ContentEditor.tsx  # Site content editor
│   └── ProtectedRoute.tsx     # Route guard component
├── services/
│   └── adminService.js        # API client for admin endpoints
└── contexts/
    └── AuthContext.jsx        # Authentication state management
```

## API Endpoints

### Blog Endpoints
```
GET    /api/admin/blogs              # Get all blogs (with filters)
GET    /api/admin/blogs/:id          # Get single blog
POST   /api/admin/blogs              # Create new blog
PUT    /api/admin/blogs/:id          # Update blog
DELETE /api/admin/blogs/:id          # Delete blog
GET    /api/admin/blogs/meta/categories  # Get categories
```

### Content Endpoints
```
GET    /api/admin/content            # Get site content
PUT    /api/admin/content            # Update all content
PUT    /api/admin/content/:section   # Update specific section
POST   /api/admin/content/reset      # Reset to defaults
```

### Stats & Users
```
GET    /api/admin/stats              # Dashboard statistics
GET    /api/admin/users              # Get all users
```

## How to Use

### 1. Accessing the Admin Dashboard
1. Log in as an admin user at `/login`
   - Default admin: `admin@batclander.com` / `admin123`
2. Navigate to `/admin/dashboard` (or click admin icon in header)

### 2. Managing Blog Posts

**Create a New Post:**
1. Click "New Blog Post" button
2. Fill in:
   - Title (required)
   - Excerpt (short summary)
   - Content (required, supports markdown)
   - Category
   - Image URL
3. Check "Publish immediately" to make it live
4. Check "Feature this post" to show on homepage
5. Click "Create Post"

**Edit a Post:**
1. Click the edit icon (pencil) on any post
2. Modify fields
3. Click "Update Post"

**Publish/Unpublish:**
- Click the eye icon to toggle publish status

**Delete a Post:**
- Click the trash icon and confirm deletion

### 3. Managing Site Content

**Edit Hero Section:**
1. Click "Site Content" tab
2. Select "Hero" tab
3. Edit title, subtitle, and background image
4. Click "Save All Changes"

**Edit Other Sections:**
- Navigate through tabs (Hero, About, Homepage, Social, Other)
- Make changes to any field
- Click "Save All Changes" to apply

**Reset Content:**
- Click "Reset to Defaults" to restore original content

## Database Models

### Blog Post Schema
```javascript
{
  id: string,              // UUID
  title: string,
  excerpt: string,
  content: string,
  author: string,          // From logged-in admin
  category: string,
  image: string,           // URL
  published: boolean,
  featured: boolean,
  createdAt: string,       // ISO date
  updatedAt: string        // ISO date
}
```

### Site Content Schema
```javascript
{
  id: 'site-content',
  hero: {
    title: string,
    subtitle: string,
    backgroundImage: string
  },
  about: {
    title: string,
    content: string,
    image: string
  },
  homepage: {
    featuredSection: {
      title: string,
      subtitle: string
    },
    aboutPreview: {
      text: string
    }
  },
  store: {
    bannerText: string
  },
  social: {
    instagram: string,
    twitter: string,
    tiktok: string,
    youtube: string
  },
  contact: {
    email: string,
    phone: string
  },
  footer: {
    copyrightText: string
  },
  updatedAt: string
}
```

## Security Features

### Backend Protection
- All admin routes require authentication (`authenticate` middleware)
- All admin routes require admin role (`authorizeAdmin` middleware)
- JWT tokens expire after 7 days
- Passwords hashed with bcrypt

### Frontend Protection
- `ProtectedRoute` component guards admin dashboard
- Redirects non-admin users to home page
- Auth state managed globally via React Context
- Secure HTTP-only cookies for token storage

## Future Enhancements

### Planned Features
- [ ] Rich text editor (React Quill) for blog content
- [ ] Image upload functionality (currently URL-based)
- [ ] User management interface
- [ ] Blog search and advanced filtering
- [ ] Bulk actions (delete multiple, publish multiple)
- [ ] Blog preview before publishing
- [ ] Revision history for content changes
- [ ] Analytics dashboard
- [ ] Email notifications for new posts
- [ ] Multi-language support

### Potential Improvements
- [ ] Drag-and-drop image upload
- [ ] Auto-save drafts
- [ ] Scheduled publishing
- [ ] SEO metadata fields
- [ ] Tag system for posts
- [ ] Comment moderation
- [ ] Media library management

## Development Notes

### TypeScript Considerations
- Components use `// @ts-nocheck` due to .js service imports
- Future: Convert services to TypeScript for full type safety

### Database Choice
- Current: JSON file-based (simple, no dependencies)
- Future: Consider MongoDB/PostgreSQL for production scale

### Authentication
- Current: JWT with HTTP-only cookies
- Secure for current scale
- Consider session management for larger applications

## Troubleshooting

### "Unauthorized access" error
- Ensure you're logged in as admin
- Check that user role is 'admin' in users.json
- Verify JWT token is valid (check browser cookies)

### Blog posts not appearing
- Check publish status (may be draft)
- Verify data saved in `server/data/blogs.json`
- Check browser console for errors

### Content changes not saving
- Check server console for errors
- Verify admin authentication
- Ensure content.json has write permissions

## Credits
Built for Bantu Ants Travel Club using modern web technologies and best practices for security, scalability, and user experience.
