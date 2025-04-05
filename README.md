# React Leaderboard Application


A responsive, themeable leaderboard application built with React that displays user rankings across multiple categories with pagination support.

## Features

- **Multiple Ranking Categories**:
  - Wealth Ranking
  - Party Ranking
  - Hourly Ranking
  - Live Ranking
  - Family Ranking

- **Interactive UI**:
  - Themed styling for each category
  - Top 3 users with special highlighting
  - Paginated user list (20 users per page)
  - Responsive design for all screen sizes
  - Smooth animations and transitions

- **Data Handling**:
  - Dynamic mock data generation
  - Different point systems for different categories
  - Proper sorting and ranking logic

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dhirajmistry98/lederboard

   Navigate to the project directory:

bash
Copy
cd react-leaderboard
Install dependencies:

bash
Copy
npm install
# or
yarn install
Available Scripts
In the project directory, you can run:

npm start or yarn start
Runs the app in development mode.
Open http://localhost:50729/to view it in your browser.

npm test or yarn test
Launches the test runner in interactive watch mode.

npm run build or yarn build
Builds the app for production to the build folder.

npm run eject or yarn eject
Note: this is a one-way operation. Once you eject, you can't go back!


Project Structure
Copy
src/
├── components/            # React components
│   ├── Leaderboard.js     # Main leaderboard component
│   ├── TopRanks.js       # Top 3 ranked users component
│   ├── RankItem.js       # Individual rank item component
│   ├── Pagination.js     # Pagination controls
│   ├── RankingNav.js     # Main category navigation
│   └── RankingTabs.js    # Sub-tab navigation
├── data/                 # Data-related files
│   ├── mockData.js       # Mock data generator
│   └── themes.js         # Theme configurations
├── assets/               # Static assets
│   ├── images/           # Image assets
│   └── styles/           # CSS stylesheets
├── App.js                # Root application component
└── index.js              # Application entry point
