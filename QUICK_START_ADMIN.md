# 🚀 QUICK START GUIDE - Admin Dashboard

## Get Started in 3 Steps!

### Step 1: Start the Servers
```bash
./start-all.sh
```

This starts both backend (port 5000) and frontend (port 3000) servers.

### Step 2: Login as Admin
1. Go to: http://localhost:3000/login
2. Email: `admin@batclander.com`
3. Password: `admin123`

### Step 3: Access Admin Dashboard
Click the admin icon in the header OR go to:
http://localhost:3000/admin/dashboard

---

## 🎨 Dashboard Tour

### Overview Tab
- See statistics (users, blogs, published, drafts)
- Quick action buttons for common tasks

### Blog Posts Tab
- **View all posts** - Filter by all/published/drafts
- **Create new post** - Click "New Blog Post" button
- **Edit post** - Click pencil icon on any post
- **Publish/Unpublish** - Click eye icon
- **Delete** - Click trash icon

### Site Content Tab
- **Hero** - Edit homepage banner
- **About** - Update about section
- **Homepage** - Configure featured content
- **Social** - Update social media links
- **Other** - Contact info, store, footer

### Users Tab
- View all registered users
- (Full management features coming soon)

---

## ✍️ Creating Your First Blog Post

1. Click "Blog Posts" tab
2. Click "New Blog Post" button
3. Fill in the form:
   ```
   Title: My First Blog Post
   Excerpt: A brief summary
   Content: Your amazing content here!
   Category: Travel
   Image: https://your-image-url.com/image.jpg
   ```
4. Check "Publish immediately" ✓
5. Check "Feature this post" ✓ (optional - shows on homepage)
6. Click "Create Post"

**Done!** Your post is now live!

---

## 🎨 Editing Site Content

1. Click "Site Content" tab
2. Select a section (Hero, About, etc.)
3. Edit the fields
4. Click "Save All Changes" at the top

**Example - Update Hero Title:**
1. Go to Site Content > Hero tab
2. Change "Hero Title" field
3. Click "Save All Changes"
4. Your homepage hero is updated!

---

## 💡 Pro Tips

### Markdown in Blog Content
Use markdown for rich formatting:
```markdown
# Main Heading
## Subheading
**Bold text**
*Italic text*
- List item 1
- List item 2
[Link text](https://url.com)
```

### Draft Workflow
1. Create post without "Publish immediately"
2. Review and edit
3. Click eye icon to publish when ready

### Quick Publish Toggle
- Click the eye icon on any post to quickly publish/unpublish
- No need to open the editor!

### Featured Posts
- Check "Feature this post" for important articles
- Featured posts appear prominently on homepage
- Perfect for announcements or trending content

---

## 🔧 Common Tasks

### Change Site Title
1. Site Content tab
2. Hero section
3. Edit "Hero Title"
4. Save

### Update Social Media Links
1. Site Content tab
2. Social section
3. Update handles (format: @username)
4. Save

### Delete Multiple Posts
1. Blog Posts tab
2. Click trash icon on each post
3. Confirm deletion

### Reset Content to Defaults
1. Site Content tab
2. Click "Reset to Defaults" button
3. Confirm

---

## 📱 Mobile Access

The admin dashboard is responsive! You can:
- Create/edit posts from your phone
- Update content on the go
- Monitor stats from anywhere

---

## 🆘 Need Help?

### Dashboard Won't Load
- Verify you're logged in as admin
- Check the URL: `/admin/dashboard`
- Try refreshing the page

### Can't Save Changes
- Check your internet connection
- Ensure servers are running
- Check browser console for errors

### Forgot Admin Password
Edit `server/data/users.json` directly or contact dev team.

---

## 📚 More Information

- **Full Documentation**: See `ADMIN_DASHBOARD_README.md`
- **Implementation Details**: See `ADMIN_IMPLEMENTATION_SUMMARY.md`
- **API Reference**: See endpoint documentation in README

---

## 🎉 You're Ready!

Start creating amazing content for your site. Happy blogging! 🚀
