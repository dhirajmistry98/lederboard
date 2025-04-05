import React, { useState, useEffect } from 'react';
import TopRanks from './TopRanks';
import RankItem from './RankItem';
import Pagination from './Pagination';
import RankingNav from './RankingNav';
import RankingTabs from './RankingTabs';
import { generateMockData } from '../data/mockData';

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [fireUsers, setFireUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('wealth');
  const [activeSubTab, setActiveSubTab] = useState('daily');
  
  const itemsPerPage = 20;
  const totalPages = Math.ceil((users.length - 3) / itemsPerPage);
  
  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      const data = generateMockData();
      setUsers(data);
      
      // Generate separate data for 'hourly' tab with fire points
      const fireData = generateMockData(50).map(user => ({
        ...user,
        firePoints: Math.floor(2000 * Math.random()) + 100
      }));
      setFireUsers(fireData);
      
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    // Reset to page 1 when tab changes
    setCurrentPage(1);
  }, [activeTab, activeSubTab]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top of paginated list
    document.querySelector('.paginated-ranks')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getThemeClass = () => {
    switch (activeTab) {
      case 'wealth': return 'wealth-theme';
      case 'hourly': return 'hourly-theme';
      case 'party': return 'party-theme'; 
      case 'live': return 'live-theme';
      case 'family': return 'family-theme';
      default: return '';
    }
  };
  
  const getPointType = () => {
    return activeTab === 'hourly' ? 'fire' : 'coin';
  };
  
  const getCurrentData = () => {
    if (activeTab === 'hourly') {
      return fireUsers;
    }
    return users;
  };

  if (loading) {
    return <div className="loading">Loading leaderboard...</div>;
  }

  const currentData = getCurrentData();
  
  // Top 3 users
  const topUsers = currentData.slice(0, 3);
  
  // Calculate users for current page (ranks 4 and beyond)
  const startIndex = 3 + (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, currentData.length);
  const currentUsers = currentData.slice(startIndex, endIndex);
  
  // Always show user at rank 999+ (Devil)
  const bottomUser = {
    id: 999,
    rank: "999+",
    name: "Devil",
    points: 0,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=devil"
  };

  return (
    <div className={`leaderboard-container web-version ${getThemeClass()}`}>
      {/* Tab Navigation */}
      <RankingNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Sub Tab Selection */}
      <RankingTabs 
        activeSubTab={activeSubTab} 
        setActiveSubTab={setActiveSubTab} 
        tabType={activeTab} 
      />
      
      {/* Top 3 users - always visible */}
      <TopRanks 
        topUsers={topUsers} 
        theme={activeTab}
        pointType={getPointType()}
      />
      
      {/* Paginated ranks (4+) */}
      <div className="paginated-ranks">
        {currentUsers.map(user => (
          <RankItem 
            key={user.id}
            rank={user.rank}
            name={user.name}
            points={activeTab === 'hourly' ? user.firePoints : user.points}
            avatar={user.avatar}
            pointType={getPointType()}
            isMystery={user.isMystery}
          />
        ))}
        
        {/* Bottom fixed user (999+) */}
        <RankItem 
          key={bottomUser.id}
          rank={bottomUser.rank}
          name={bottomUser.name}
          points={bottomUser.points}
          avatar={bottomUser.avatar}
          pointType={getPointType()}
        />
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
        />
      )}
    </div>
  );
};

export default Leaderboard;