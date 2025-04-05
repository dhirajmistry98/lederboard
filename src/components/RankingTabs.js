import React from 'react';

const RankingTabs = ({ activeSubTab, setActiveSubTab, tabType }) => {
  const getTabOptions = () => {
    switch (tabType) {
      case 'hourly':
        return [
          { id: 'live-list', label: 'Hourly Live List' },
          { id: 'party-list', label: 'Hourly Party List' }
        ];
      case 'party':
        return [
          { id: 'contribution', label: 'Weekly Contribution Ranking' },
          { id: 'charm', label: 'Weekly Charm Ranking' }
        ];
      case 'wealth':
        return [
          { id: 'daily', label: 'Daily' },
          { id: 'monthly', label: 'Monthly' }
        ];
      default:
        return [
          { id: 'default1', label: 'Tab 1' },
          { id: 'default2', label: 'Tab 2' }
        ];
    }
  };

  const tabs = getTabOptions();

  return (
    <div className="ranking-subtabs">
      {tabs.map(tab => (
        <div 
          key={tab.id}
          className={`subtab-button ${activeSubTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveSubTab(tab.id)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};

export default RankingTabs;