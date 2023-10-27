import imageHome from '../public/assets/home.svg';
import imageSearch from '../public/assets/search.svg';
import imageHeart from '../public/assets/heart.svg';
import imageCreate from '../public/assets/create.svg';
import imageCommunity from '../public/assets/community.svg';
import imageUser from '../public/assets/user.svg';
import iconReply from '../public/assets/reply.svg';
import iconMembers from '../public/assets/members.svg';
import iconTagged from '../public/assets/tag.svg';
import iconRequests from '../public/assets/request.svg';

// SideBarLinks
export const sideBarLinks = [
  {
    imgURL: imageHome,
    route: '/',
    label: 'Home',
  },
  {
    imgURL: imageSearch,
    route: '/search',
    label: 'Search',
  },
  {
    imgURL: imageHeart,
    route: '/activity',
    label: 'Activity',
  },
  {
    imgURL: imageCreate,
    route: '/create-thread',
    label: 'Create Thread',
  },
  {
    imgURL: imageCommunity,
    route: '/community',
    label: 'Communities',
  },
  {
    imgURL: imageUser,
    route: '/profile',
    label: 'Profile',
  },
];

// Profile Tabs
export const profileTabs = [
  {
    value: 'threads',
    label: 'Threads',
    icon: iconReply,
  },
  {
    value: 'replies',
    label: 'Replies',
    icon: iconMembers,
  },
];

// Community Tabs
export const communityTags = [
  {
    value: 'threads',
    label: 'Threads',
    icon: iconReply,
  },
  {
    value: 'members',
    label: 'Members',
    icon: iconMembers,
  },
  {
    value: 'requests',
    label: 'Requests',
    icon: iconRequests,
  },
];
