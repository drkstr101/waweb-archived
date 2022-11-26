import { IconComponent } from '../../base-ui.icons/IconComponent';

export interface NavLink {
  name: string;
  href: string;
  icon?: IconComponent;
}

export interface FeatureItem {
  name: string;
  description: string;
  icon: IconComponent;
}

export interface PostCategory {
  name: string;
  href: string;
}

export interface Person {
  name: string;
  imageUrl: string;
  href: string;
}

export interface Post {
  id: number;
  title: string;
  href: string;
  date: string;
  datetime: string;
  category: PostCategory;
  imageUrl: string;
  preview: string;
  author: Person;
  readingLength: string;
}
