import mongoose from 'mongoose';

const siteContentSchema = new mongoose.Schema({
  hero: {
    title: String,
    subtitle: String,
    ctaText: String,
    backgroundImage: String
  },
  homepage: {
    featuredSection: {
      title: String,
      subtitle: String,
      description: String
    },
    aboutPreview: {
      title: String,
      text: String,
      ctaText: String
    },
    animationSection: {
      title: String,
      description: String,
      ctaText: String
    },
    travelSection: {
      title: String,
      description: String,
      ctaText: String
    },
    shopSection: {
      title: String,
      description: String,
      ctaText: String
    }
  },
  about: {
    title: String,
    subtitle: String,
    heroImage: String,
    mission: String,
    vision: String,
    story: String
  },
  travelClub: {
    hero: {
      title: String,
      subtitle: String,
      description: String
    }
  },
  animation: {
    hero: {
      title: String,
      subtitle: String,
      tagline: String,
      description: String
    },
    synopsis: {
      title: String,
      content: String
    }
  },
  store: {
    bannerText: String,
    hero: {
      title: String,
      subtitle: String
    }
  },
  footer: {
    tagline: String,
    copyrightText: String,
    about: String
  },
  contact: {
    email: String,
    phone: String,
    address: String,
    supportEmail: String,
    pressEmail: String
  },
  social: {
    instagram: String,
    twitter: String,
    tiktok: String,
    youtube: String,
    facebook: String
  },
  seo: {
    defaultTitle: String,
    defaultDescription: String,
    keywords: String
  }
});

// Create a static method to update site content
siteContentSchema.statics.update = async function (data) {
  // Look for existing site content
  const existing = await this.findOne();
  if (existing) {
    // Update existing content
    return await this.findOneAndUpdate({}, data, { 
      new: true,
      upsert: true 
    });
  } else {
    // Create new content
    return await this.create(data);
  }
};

const SiteContent = mongoose.model('SiteContent', siteContentSchema);

export default SiteContent;