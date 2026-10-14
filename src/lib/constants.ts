export const NAV_LINKS = [
  { label: "Membership", href: "/membership" },
  { label: "Classes", href: "/classes" },
  { label: "Amenities", href: "/amenities" },
  { label: "Programs", href: "/programs" },
  { label: "About", href: "/about" },
] as const;

export const CONTACT = {
  name: "Spa 23 Fitness & Lifestyle",
  address: "381 Route 23 South, Pompton Plains, NJ 07444",
  phone: "973-839-8823",
  email: "spa23@spa23.com",
  memberServicesEmail: "memberservices@spa23.com",
} as const;

export const HOURS = [
  { day: "Monday", hours: "5:00 AM - 10:00 PM" },
  { day: "Tuesday", hours: "5:00 AM - 10:00 PM" },
  { day: "Wednesday", hours: "5:00 AM - 10:00 PM" },
  { day: "Thursday", hours: "5:00 AM - 10:00 PM" },
  { day: "Friday", hours: "5:00 AM - 10:00 PM" },
  { day: "Saturday", hours: "7:00 AM - 6:00 PM" },
  { day: "Sunday", hours: "7:00 AM - 4:00 PM" },
] as const;

export const SOCIAL_LINKS = [
  { label: "YouTube", href: "https://www.youtube.com/@spa23fitness" },
  { label: "Instagram", href: "https://www.instagram.com/spa23fitness" },
  { label: "Facebook", href: "https://www.facebook.com/spa23fitness" },
] as const;

export const FOOTER_NAV = [
  {
    heading: "Club",
    links: [
      { label: "Membership", href: "/membership" },
      { label: "Classes", href: "/classes" },
      { label: "Amenities", href: "/amenities" },
      { label: "Programs", href: "/programs" },
    ],
  },
  {
    heading: "More",
    links: [
      { label: "Videos", href: "/videos" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
] as const;
