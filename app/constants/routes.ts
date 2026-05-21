import type { RoutesType } from "~/types/route";

export const ROUTES: RoutesType = {
  index: {
    url: '/',
    label: 'Home',
    key: 'home'
  },
  about: {
    url: '/about',
    label: 'Who We Are',
    key: 'about'
  },
  talent: {
    url: '/talent',
    label: 'Talent Management',
    key: 'talent'
  },
  contact: {
    url: '/business-inquiries',
    label: 'Business Inquiries',
    key: 'business-inquiries'
  }
}
