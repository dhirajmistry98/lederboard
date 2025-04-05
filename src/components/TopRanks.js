import React from 'react';
import RankItem from './RankItem';

const TopRanks = ({ topUsers, theme, pointType }) => {
  const getHeaderIcon = () => {
    switch (theme) {
      case 'wealth':
        return <div className="crown-badge"></div>;
      case 'hourly':
        return <div className="clock-badge"></div>;
      case 'party':
        return <div className="trophy-badge"></div>;
      default:
        return <div className="trophy-badge"></div>;
    }
  };

  return (
    <div className={`top-ranks theme-${theme}`}>
      {getHeaderIcon()}
      <div className="settlement-info">
        Settlement time {theme === 'hourly' ? '00:45:34' : '2 days 01:45:41'}
      </div>
      
      <div className="action-buttons">
        {theme === 'party' && (
          <div className="contribution-button">
            <span className="trophy-icon">🏆</span> Contribution
          </div>
        )}
        <div className="star-tasks-button">
          <span className="star-icon">⭐</span> Star tasks
        </div>
        <div className="rewards-button">
          <span className="gift-icon">🎁</span> Rewards
        </div>
      </div>
      
      <div className="top-ranks-container">
        {topUsers.map(user => (
          <RankItem 
            key={user.id}
            rank={user.rank}
            name={user.name}
            points={user.points}
            avatar={user.avatar}
            isTopRank={true}
            pointType={pointType}
            isMystery={user.isMystery}
          />
        ))}
      </div>
    </div>
  );
};

export default TopRanks;