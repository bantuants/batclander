import Blog from './models/Blog.js';
import SiteContent from './models/SiteContent.js';

console.log('🌱 Seeding database with sample data...\n');

// Seed sample blog posts
const sampleBlogs = [
  {
    title: 'Welcome to Bantu Ants Travel Club',
    excerpt: 'Discover a new way to experience the world through an Afrofuturist lens.',
    content: `# Welcome to Bantu Ants Travel Club!

We're thrilled to launch our new travel community platform. Bantu Ants Travel Club is more than just a travel agency - we're a movement that combines Afrofuturist storytelling with immersive cultural experiences.

## What We Offer

- **Curated Travel Experiences**: Handpicked destinations that celebrate African culture and diaspora
- **Community Connection**: Connect with like-minded travelers and creatives
- **Cultural Immersion**: Go beyond tourism and dive deep into local traditions
- **Creative Workshops**: Animation, storytelling, and artistic collaborations

## Join Us

Ready to embark on your next adventure? Browse our upcoming trips and become part of the Bantu Ants family!`,
    category: 'News',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
    published: true,
    featured: true,
    author: 'Bantu Ants Team'
  },
  {
    title: 'Top 10 Destinations for African Culture Enthusiasts',
    excerpt: 'From ancient cities to modern cultural hubs, explore these must-visit destinations.',
    content: `# Top 10 Destinations for African Culture Enthusiasts

Africa is a vast continent rich in history, culture, and natural beauty. Here are our top picks for cultural travelers:

## 1. Marrakech, Morocco
Experience the vibrant medinas, stunning architecture, and rich Berber culture.

## 2. Zanzibar, Tanzania
Island paradise with Swahili heritage, pristine beaches, and spice plantations.

## 3. Cape Town, South Africa
Where Table Mountain meets the sea - a hub of art, music, and history.

## 4. Dakar, Senegal
West African cultural capital with incredible music scene and island charm.

## 5. Addis Ababa, Ethiopia
Ancient traditions meet modern innovation in Africa's diplomatic capital.

## 6. Accra, Ghana
Gateway to West African heritage and the historic slave trade sites.

## 7. Lagos, Nigeria
Afrobeat capital and thriving creative economy powerhouse.

## 8. Kigali, Rwanda
Clean, safe, and rapidly developing with powerful historical sites.

## 9. Nairobi, Kenya
Wildlife meets urban sophistication - East African cultural crossroads.

## 10. Luanda, Angola
Emerging destination with Portuguese influence and stunning coastline.

Each destination offers unique experiences that will deepen your connection to African culture and history.`,
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
    published: true,
    featured: true,
    author: 'Amara Johnson'
  },
  {
    title: 'The Art of Afrofuturist Storytelling in Animation',
    excerpt: 'How animation is reshaping narratives about African futures and identities.',
    content: `# The Art of Afrofuturist Storytelling in Animation

Afrofuturism in animation is creating new narratives that celebrate African heritage while imagining bold futures. Here's how creators are revolutionizing the medium:

## What is Afrofuturism?

Afrofuturism blends African culture, technology, science fiction, and fantasy to envision futures centered on Black experiences and perspectives.

## Notable Works

### Kizazi Moto: Generation Fire
Netflix's groundbreaking anthology series featuring 10 African animation studios.

### Iwájú
Disney's collaboration with Pan-African studio Kugali set in future Lagos.

### Spider-Man: Across the Spider-Verse
Features Miles Morales in stunning Afrofuturist aesthetics.

## Why It Matters

Animation allows us to:
- Visualize African futures without Western colonial frameworks
- Celebrate traditional art forms in modern contexts
- Create representation for young audiences
- Challenge stereotypes and expand imagination

## Join Our Animation Workshops

At Bantu Ants, we host regular animation workshops where you can learn from African animators and create your own Afrofuturist stories!`,
    category: 'Animation',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800',
    published: true,
    featured: false,
    author: 'Kwame Osei'
  },
  {
    title: 'Solo Travel Tips for First-Timers',
    excerpt: 'Essential advice for planning your first solo adventure with confidence.',
    content: `# Solo Travel Tips for First-Timers

Traveling solo can be one of the most rewarding experiences. Here's how to do it right:

## Before You Go

1. **Research thoroughly** - Know your destination's culture and customs
2. **Book accommodations in advance** - Start with established hotels or hostels
3. **Share your itinerary** - Keep family/friends informed
4. **Get travel insurance** - Don't skip this!

## During Your Trip

### Stay Safe
- Trust your instincts
- Keep valuables secure
- Stay in well-lit, populated areas
- Have emergency contacts saved

### Meet People
- Join group tours or activities
- Stay in social accommodations
- Use travel apps to connect
- Attend local events

### Document Your Journey
- Keep a travel journal
- Take photos (but also be present!)
- Collect meaningful souvenirs
- Share experiences on social media

## Recommended First-Time Destinations

- **Portugal** - Safe, affordable, friendly
- **Japan** - Organized, respectful culture
- **New Zealand** - English-speaking, stunning nature
- **Costa Rica** - Adventure with good infrastructure

Ready to take the leap? Your solo adventure awaits!`,
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
    published: true,
    featured: false,
    author: 'Lisa Chen'
  },
  {
    title: 'Behind the Scenes: Creating Our Latest Animation Project',
    excerpt: 'A deep dive into the creative process behind our newest animated short film.',
    content: `# Behind the Scenes: Creating Our Latest Animation Project

Take a peek behind the curtain as we develop our latest animated short, "The Journey Home."

## Concept Development

Our story follows a young traveler discovering their ancestral roots through magical encounters. We spent months developing characters and storyboards that honor cultural authenticity.

## Animation Process

### Pre-Production (3 months)
- Script writing and revisions
- Character design
- Storyboarding
- Voice casting

### Production (6 months)
- 2D animation using Toon Boom Harmony
- Background art in watercolor style
- Frame-by-frame character animation
- Compositing and effects

### Post-Production (2 months)
- Sound design and foley
- Original music composition
- Color grading
- Final editing

## The Team

Our 15-person team includes animators from Nigeria, Kenya, South Africa, and Ghana, each bringing unique perspectives and techniques.

## Release Date

Coming December 2025! Follow us for updates and exclusive previews.

*This post is a draft preview of our upcoming behind-the-scenes series.*`,
    category: 'Animation',
    image: 'https://images.unsplash.com/photo-1618004652321-13a63e576b80?w=800',
    published: false, // Draft
    featured: false,
    author: 'Production Team'
  },
  {
    title: 'Sustainable Travel: How to Reduce Your Carbon Footprint',
    excerpt: 'Travel responsibly with these eco-friendly tips and practices.',
    content: `# Sustainable Travel: How to Reduce Your Carbon Footprint

Travel doesn't have to harm the planet. Here's how to be a responsible traveler:

## Transportation Choices

- **Fly Less** - Consider train or bus for shorter distances
- **Carbon Offset** - Invest in carbon offset programs
- **Public Transit** - Use local buses, trains, bikes
- **Walk More** - Explore cities on foot when possible

## Accommodation

- Choose eco-certified hotels
- Reuse towels and linens
- Support locally-owned lodging
- Consider homestays or eco-lodges

## Responsible Tourism

### Support Local
- Buy from local artisans
- Eat at local restaurants
- Hire local guides
- Avoid international chains

### Respect Culture
- Learn basic phrases
- Dress appropriately
- Follow local customs
- Ask before photographing

### Protect Nature
- Stay on marked trails
- Don't disturb wildlife
- Pack out all trash
- Use reef-safe sunscreen

## Our Commitment

Bantu Ants Travel Club partners only with sustainable tourism operators and donates 5% of profits to environmental conservation.

Together, we can explore the world while protecting it for future generations!`,
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
    published: false, // Draft
    featured: false,
    author: 'Environmental Team'
  }
];

// Seed blogs
console.log('📝 Creating blog posts...');
let createdBlogs = 0;
for (const blogData of sampleBlogs) {
  try {
    Blog.create(blogData);
    createdBlogs++;
    console.log(`   ✓ Created: "${blogData.title}"`);
  } catch (error) {
    console.error(`   ✗ Failed to create "${blogData.title}":`, error.message);
  }
}
console.log(`\n✅ Created ${createdBlogs} blog posts\n`);

// Seed site content with comprehensive structure
console.log('🎨 Creating site content...');
try {
  // Get the default structure and populate with real content
  const siteContent = SiteContent.update({
    hero: {
      title: 'BANTU ANTS TRAVEL CLUB',
      subtitle: 'Where Afrofuturist storytelling meets immersive travel experiences',
      ctaText: 'Explore Our World',
      backgroundImage: '/assets/headerisland-BG5P1dGW.jpg'
    },
    homepage: {
      featuredSection: {
        title: 'Featured Experiences',
        subtitle: 'Discover our curated selection of adventures that blend travel, culture, and creativity',
        description: 'From immersive cultural journeys to creative workshops, explore experiences designed to inspire and connect.'
      },
      aboutPreview: {
        title: 'Our Story',
        text: 'Explore the world through an Afrofuturist lens - where ancient wisdom meets limitless imagination',
        ctaText: 'Learn More'
      },
      animationSection: {
        title: 'The Bantu Ants Animated Series',
        description: 'A groundbreaking Afrofuturist animation that reimagines history and envisions bold futures',
        ctaText: 'Watch Trailer'
      },
      travelSection: {
        title: 'Join the Travel Club',
        description: 'Connect with fellow adventurers and explore curated cultural experiences around the world',
        ctaText: 'Discover Trips'
      },
      blogSection: {
        title: 'Latest Stories',
        description: 'Insights on travel, culture, animation, and the Afrofuturist movement'
      },
      shopSection: {
        title: 'Shop Exclusives',
        description: 'Unique merchandise and experience packages from the Bantu Ants universe',
        ctaText: 'Browse Store'
      }
    },
    about: {
      title: 'About Bantu Ants',
      subtitle: 'A Movement of Storytellers, Travelers & Dreamers',
      heroImage: '/assets/batc_scene-DWCtgue2.png',
      mission: 'To celebrate African heritage through immersive storytelling and transformative travel experiences that connect past, present, and future.',
      vision: 'A world where African narratives shape global culture and inspire limitless possibilities.',
      story: `Bantu Ants Travel Club is a revolutionary platform that merges Afrofuturist storytelling with transformative travel experiences. We create journeys that celebrate African culture, heritage, and innovation while fostering global connections.

Our community of travelers, artists, and storytellers explores the world through a unique lens - one that honors the past, celebrates the present, and imagines bold futures. Through curated trips, animation workshops, and cultural exchanges, we're building bridges across continents and generations.

Join us on a journey that transcends traditional tourism and becomes a movement for cultural celebration and creative expression.`
    },
    travelClub: {
      hero: {
        title: 'Bantu Ants Travel Club',
        subtitle: 'Explore the World Through an Afrofuturist Lens',
        description: 'Curated cultural experiences designed for adventurous souls who seek authentic connections and transformative journeys.'
      }
    },
    animation: {
      hero: {
        title: 'The Bantu Ants Animated Series',
        subtitle: 'An Afrofuturist Epic',
        tagline: 'Where Ancient Kingdoms Meet Future Worlds',
        description: 'A groundbreaking animated series that reimagines African history through speculative fiction, following the adventures of the Bantu Ants - guardians of knowledge traveling through time and space.'
      },
      synopsis: {
        title: 'The Story',
        content: `In a parallel universe where African kingdoms never fell, the Bantu Ants are an elite group of knowledge-keepers who traverse dimensions to preserve cultural wisdom and prevent historical disasters.

Led by Kamau, a brilliant strategist from the Zulu Kingdom, the team includes Amara (tech genius), Kofi (historian), Zuri (combat specialist), and Nia (spiritual guide). Together, they navigate complex political landscapes, battle forces that seek to erase history, and discover that the key to the future lies in understanding the past.

The series blends action, philosophy, and stunning visuals inspired by African art, architecture, and futurism.`
      }
    },
    blog: {
      hero: {
        title: 'Stories & Insights',
        subtitle: 'Travel, Culture, Animation & Afrofuturism'
      }
    },
    store: {
      bannerText: 'Shop Exclusive Bantu Ants Merchandise & Experience Packages',
      hero: {
        title: 'Bantu Ants Store',
        subtitle: 'Bring the Adventure Home'
      }
    },
    footer: {
      tagline: 'Explore. Create. Connect.',
      copyrightText: '© 2025 Bantu Ants Travel Club. All rights reserved.',
      about: 'Bantu Ants Travel Club merges Afrofuturist storytelling with transformative travel experiences.'
    },
    contact: {
      email: 'hello@bantuants.com',
      phone: '+1 (555) 123-4567',
      address: 'Los Angeles, CA',
      supportEmail: 'support@bantuants.com',
      pressEmail: 'press@bantuants.com'
    },
    social: {
      instagram: '@bantuantstravelclub',
      twitter: '@bantuants',
      tiktok: '@bantuantstravelclub',
      youtube: '@bantuantstravelclub',
      facebook: 'bantuantstravelclub'
    },
    seo: {
      defaultTitle: 'Bantu Ants Travel Club | Afrofuturist Travel & Storytelling',
      defaultDescription: 'Experience the world through an Afrofuturist lens. Join our community of travelers, creators, and dreamers on transformative cultural journeys.',
      keywords: 'afrofuturism, travel club, cultural experiences, african travel, animation, storytelling, adventure'
    }
  });
  console.log('   ✓ Site content initialized with comprehensive structure');
  console.log('\n✅ Site content created successfully\n');
} catch (error) {
  console.error('   ✗ Failed to create site content:', error.message);
}

// Summary
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('🎉 DATABASE SEEDING COMPLETE!');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('\nWhat was created:');
console.log(`  📝 ${createdBlogs} blog posts (${sampleBlogs.filter(b => b.published).length} published, ${sampleBlogs.filter(b => !b.published).length} drafts)`);
console.log(`  🌟 ${sampleBlogs.filter(b => b.featured).length} featured posts`);
console.log('  🎨 Complete site content');
console.log('\nYou can now:');
console.log('  1. View blogs in the admin dashboard');
console.log('  2. Edit existing blog posts');
console.log('  3. Manage site content');
console.log('  4. Create new posts');
console.log('\n🚀 Login at: http://localhost:3000/login');
console.log('   Email: admin@batclander.com');
console.log('   Password: admin123');
console.log('\n💡 Access Admin Dashboard: http://localhost:3000/admin/dashboard');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
