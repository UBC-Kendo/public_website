export const LOCATIONS = [
  {
    name: 'AMS Student Nest',
    address: '6133 University Blvd, Vancouver, BC V6T 1Z1',
    mapUrl: 'https://maps.google.com/?q=AMS+Student+Nest+UBC',
  },
  {
    name: 'Asian Centre',
    address: '1871 West Mall, Vancouver, BC V6T 1Z2',
    mapUrl: 'https://maps.google.com/?q=UBC+Asian+Centre',
  },
];

export const PRACTICE_SCHEDULE = [
  {
    term: 'Winter Semester 2026/27',
    locations: [
      { name: 'AMS Student Nest', mapUrl: LOCATIONS[0].mapUrl },
      { name: 'Asian Centre', mapUrl: LOCATIONS[1].mapUrl },
    ],
    day: 'Every Monday and Thursday',
    beginner: '7:00pm - 8:00pm',
    senior: '8:00pm - 10:00pm',
  },
];

export const INSTRUCTORS = [
  { name: 'Tsuyoshi Hamanaka', rank: '6 Dan Renshi', role: 'Head Sensei' },
  { name: 'Joon Young Suk', rank: '5 Dan', role: 'UBC Sensei' },
  { name: 'Ellis Cheng', rank: '4 Dan', role: 'UBC Sensei' },
  { name: 'Kazuki Unzei', rank: '5 Dan', role: 'Tozenji Sensei' },
  { name: 'Yukiko Sugata', rank: '5 Dan', role: 'Tozenji Sensei' },
  { name: 'Terry Okitsu', rank: '4 Dan', role: 'Tozenji Sensei' },
  { name: 'Mari Kobayashi', rank: '4 Dan', role: 'Tozenji Sensei' },
  { name: 'Andrew Chen', rank: '4 Dan', role: 'Tozenji Sensei' },
  { name: 'Nanako Nohira', rank: '4 Dan', role: 'Tozenji Sensei' },
];

export const EXEC_TERM = '2026/2027';

export const EXEC_TEAM = [
  {
    role: 'President',
    name: 'William Zhu',
    photo: '/execs/placeholder.jpg',
    bio: `Hi, I'm William`,
  },
  {
    role: 'Vice President',
    name: 'Yuma Ogasawara',
    photo: '/execs/placeholder.jpg',
    bio: `Hi, I'm William`,
  },
  {
    role: 'Treasurer',
    name: 'Tim Wang',
    photo: '/execs/placeholder.jpg',
    bio: `Hi, I'm William`,
  },
  {
    role: 'Secretary',
    name: 'Arthur Wong',
    photo: '/execs/placeholder.jpg',
    bio: `Hi, I'm William`,
  },
  {
    role: 'Publicity Coordinator',
    name: 'Brian Li',
    photo: '/execs/placeholder.jpg',
    bio: `Hi, I'm William`,
  },
  {
    role: 'Publicity Coordinator',
    name: 'Jonathan Eng',
    photo: '/execs/placeholder.jpg',
    bio: `Hi, I'm William`,
  },
];

export const FAQS = [
  {
    q: 'I have no prior experience in kendo, do you guys take new beginners?',
    a: `Yes we do! 90% of our club members are new to kendo when they first joined the club. 
        We are here to expand the Kendo community and would be happy to have new members joining us and practice with us.`,
  },
  {
    q: 'How much is the membership fee?',
    a: 'Membership is $70 per academic semester at UBC.',
  },
  {
    q: 'What do I need to bring to practice?',
    a: `If you're new to kendo, please wear comfortable clothing that you can move around with (gym shorts, T-shirts).
        If you have previous experience in Kendo, please email us and we can give you more detail about our senior practices.`,
  },
  {
    q: 'Is it mandatory to come to all practices?',
    a: 'No. We encourage our members to come as much as they can for their own improvement, but we also understand the need for time off to do other matters.',
  },
  {
    q: 'Do I need to be a UBC student to join the club?',
    a: 'No, we are open to anyone who wishes to join and practice kendo. Email us at ubckendo@gmail.com for upcoming intake details!',
  },
  {
    q: 'If you have any more questions...',
    a: 'Contact us at ubckendo@gmail.com or come visit us in person!',
  }
];

export const EVENT_PAGES = [
  { label: 'Taikai', path: '/events/taikai' },
  { label: 'Social', path: '/events/social' },
];

// TODO: NOT FULLY DONE
export const EVENT_DATA = {
  hasActiveEvent: false, // Toggle to true when a tournament/event is coming up
  title: '2027 Intercollegiate Taikai',
  date: 'January X, 2027',
  location: 'TBD',
  description: '',
  bracketUrl: '', // Optional
};

export const TAIKAI_EVENTS = [
  { date: '2026-01-24', title: 'Intercollegiate Taikai' },
  { date: '2026-02-21', title: 'Steveston Taikai' },
  { date: '2026-03-07', title: 'Sakura Taikai' },
  { date: '2026-06-06', title: 'Vancouver Taikai' },
  { date: '2026-08-07', title: 'CNKF Taikai' },
  { date: '2026-10-10', title: 'UBC Taikai' },
  { date: '2026-10-24', title: 'BCKF Taikai' },
  { date: '2027-01-23', title: 'Intercollegiate Taikai'}
];

export const MERCH_ITEMS = [
  { name: 'UBC Kendo water bottle', image: '/merch/bottle.png' },
  { name: 'Kendo Monster sticker', image: '/merch/monster-sticker.png' },
  { name: 'Piyoshi sticker', image: '/merch/piyoshi-sticker.png' },
];
