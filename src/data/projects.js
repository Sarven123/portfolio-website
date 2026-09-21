// Add new projects by appending an object here — no component changes needed.
// `image` is optional: leave it null for the placeholder gradient, or point it
// at a file in /public (e.g. "/projects/project-one.jpg") once you have one.
export const projects = [
  {
    id: 'digest-news',
    title: 'Digest News',
    description:
      'Type in the topics you want to follow and Digest News reads the day’s coverage and summarizes it for you, so you can stay informed without trawling headlines yourself. Live demo requires a login — message me for credentials.',
    tags: ['React', 'TypeScript'],
    image: '/projects/digest-news.jpg',
    link: 'https://news-digest-production-a025.up.railway.app/',
    repo: null,
    featured: true,
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    description:
      'A macOS app for keeping every expense and asset in one place, built to make it easy to track spending without juggling spreadsheets.',
    tags: ['SwiftUI', 'macOS'],
    image: '/projects/expense-tracker.jpg',
    link: null,
    repo: 'https://github.com/Sarven123/PersonalExpenseTracker',
    featured: true,
  },
]
