import BlogFeedSection from './blog-feed-section';
import CtaSection from './cta-section';
import { defaultFeatures, defaultPosts } from './data';
import FeaturedImageSection from './featured-image-section';
import FeaturedItemsSection from './featured-items-section';
import HeroSection from './hero-section';
import { FeatureItem, NavLink, Post } from './types';

export interface HomeViewProps {
  posts?: Post[];
  features?: FeatureItem[];
  navigation?: NavLink[];
}

/*
  This view requires Tailwind CSS v3.0+
  This view requires some changes to your config:

  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')

  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          teal: colors.teal,
          cyan: colors.cyan,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
export default function HomeView({
  posts = defaultPosts,
  features = defaultFeatures
}: HomeViewProps) {
  return (
    <main>
      <HeroSection />
      <FeaturedImageSection />
      <FeaturedItemsSection features={features} />
      <BlogFeedSection posts={posts} />
      <CtaSection />
    </main>
  );
}
