export const LOCATIONS = [
  {
    name: 'AMS Student Nest',
    address: '6133 University Blvd, Vancouver, BC V6T 1Z1',
    mapUrl: 'https://maps.google.com/?q=AMS+Student+Nest+UBC',
  },
  {
    name: 'UBC Asian Centre',
    address: '1871 West Mall, Vancouver, BC V6T 1Z2',
    mapUrl: 'https://maps.google.com/?q=UBC+Asian+Centre',
  },
];

export const PRACTICE_SCHEDULE = [
  {
    day: 'Mondays & Thursdays',
    beginner: '7:00 PM - 8:00 PM',
    senior: '8:00 PM - 10:00 PM',
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
  },
  {
    role: 'Vice President',
    name: 'Yuma Ogasawara',
  },
  {
    role: 'Treasurer',
    name: 'Tim Wang',
  },
  {
    role: 'Secretary',
    name: 'Arthur Wong',
  },
  {
    role: 'Publicity Coordinators',
    name: 'Brian Li & Jonathan Eng',
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
];

export const EVENT_PAGE_TITLE = 'Taikai';

// NOT FULLY DONE
export const EVENT_DATA = {
  hasActiveEvent: false, // Toggle to true when a tournament/event is coming up
  title: '2026 UBC Taikai',
  date: 'October 10, 2026',
  location: 'BCIT',
  description: 'Join us for our annual club tournament featuring team matches.',
  bracketUrl: '', // Optional
};
