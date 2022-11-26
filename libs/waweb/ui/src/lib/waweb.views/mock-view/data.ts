import CloudUpload from '../../base-ui.icons/cloud-upload';
import Dribble from '../../base-ui.icons/dribble';
import Facebook from '../../base-ui.icons/facebook';
import Gears from '../../base-ui.icons/gears';
import GitHub from '../../base-ui.icons/git-hub';
import Instagram from '../../base-ui.icons/instagram';
import LockClosed from '../../base-ui.icons/lock-closed';
import Refresh from '../../base-ui.icons/refresh';
import Servers from '../../base-ui.icons/servers';
import Shield from '../../base-ui.icons/shield';
import Twitter from '../../base-ui.icons/twitter';
import { FeatureItem, NavLink, Post } from './types';

export const defaultFeatures: FeatureItem[] = [
  {
    name: 'Push to Deploy',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.',
    icon: CloudUpload
  },
  {
    name: 'SSL Certificates',
    description:
      'Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.',
    icon: LockClosed
  },
  {
    name: 'Simple Queues',
    description:
      'Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.',
    icon: Refresh
  },
  {
    name: 'Advanced Security',
    description:
      'Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.',
    icon: Shield
  },
  {
    name: 'Powerful API',
    description:
      'Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.',
    icon: Gears
  },
  {
    name: 'Database Backups',
    description:
      'Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.',
    icon: Servers
  }
];

export const defaultNavigation: NavLink[] = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' }
];

const solutions: NavLink[] = [
  { name: 'Marketing', href: '#' },
  { name: 'Analytics', href: '#' },
  { name: 'Commerce', href: '#' },
  { name: 'Insights', href: '#' }
];

const support: NavLink[] = [
  { name: 'Pricing', href: '#' },
  { name: 'Documentation', href: '#' },
  { name: 'Guides', href: '#' },
  { name: 'API Status', href: '#' }
];

const company: NavLink[] = [
  { name: 'About', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Jobs', href: '#' },
  { name: 'Press', href: '#' },
  { name: 'Partners', href: '#' }
];

const legal: NavLink[] = [
  { name: 'Claim', href: '#' },
  { name: 'Privacy', href: '#' },
  { name: 'Terms', href: '#' }
];

const social: NavLink[] = [
  {
    name: 'Facebook',
    href: '#',
    icon: Facebook
  },
  {
    name: 'Instagram',
    href: '#',
    icon: Instagram
  },
  {
    name: 'Twitter',
    href: '#',
    icon: Twitter
  },
  {
    name: 'GitHub',
    href: '#',
    icon: GitHub
  },
  {
    name: 'Dribbble',
    href: '#',
    icon: Dribble
  }
];

export const secondaryNavigation = {
  solutions,
  support,
  company,
  legal,
  social
};

export const defaultPosts: Post[] = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { name: 'Article', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    author: {
      name: 'Roel Aufderehar',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#'
    },
    readingLength: '6 min'
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { name: 'Video', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    author: {
      name: 'Brenna Goyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#'
    },
    readingLength: '4 min'
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: 'Case Study', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    author: {
      name: 'Daniela Metz',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#'
    },
    readingLength: '11 min'
  }
];
