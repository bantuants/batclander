import SiteContent from './models/SiteContent.js';

console.log('🌱 Seeding database with sample data...\n');

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
console.log('  🎨 Complete site content');
console.log('\nYou can now:');
console.log('  1. Manage site content');
console.log('\n🚀 Login at: http://localhost:3000/login');
console.log('   Email: admin@batclander.com');
console.log('   Password: admin123');
console.log('\n💡 Access Admin Dashboard: http://localhost:3000/admin/dashboard');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');