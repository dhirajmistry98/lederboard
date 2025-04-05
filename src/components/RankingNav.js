import React from 'react';

const RankingNav = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'party', label: 'Party Ranking' },
    { id: 'live', label: 'Live Ranking' },
    { id: 'hourly', label: 'Hourly Ranking' },
    { id: 'family', label: 'Family Ranking' },
    { id: 'wealth', label: 'Wealth Ranking' }
  ];

  return (
    <div className="ranking-nav">
      <button className="back-button">←</button>
      {tabs.map(tab => (
        <div 
          key={tab.id}
          className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </div>
      ))}
      <button className="help-button">?</button>
    </div>
  );
};

export default RankingNav;