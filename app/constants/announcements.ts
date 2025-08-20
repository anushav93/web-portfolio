export interface Announcement {
  id: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  isNew: boolean;
  isActive: boolean;
  createdDate: string;
}

export const announcements: Announcement[] = [
  {
    id: 'nihar-portfolio',
    title: 'Latest Project: Visual Storytelling Portfolio',
    description: 'Just launched a stunning photography portfolio showcasing authentic moments and compelling visual narratives. Built with modern web technologies and beautiful animations.',
    link: 'https://www.niharjreddy.com/',
    linkText: 'View Project',
    isNew: true,
    isActive: true,
    createdDate: '2024-01-15'
  }
  // Add more announcements here as needed
];

// Get currently active announcements
export const getActiveAnnouncements = () => {
  return announcements.filter(announcement => announcement.isActive);
};
