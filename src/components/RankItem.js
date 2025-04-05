import React from 'react';

const RankItem = ({ rank, name, points, avatar, isTopRank = false, pointType = 'coin', isMystery = false }) => {
  // Different styling based on rank
  const getRankStyle = () => {
    if (rank === 1) return "rank-item rank-gold";
    if (rank === 2) return "rank-item rank-silver";
    if (rank === 3) return "rank-item rank-bronze";
    return "rank-item";
  };

  const formatPoints = (value) => {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + 'M';
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'K';
    }
    return value;
  };

  // Icon for the points
  const getPointIcon = () => {
    switch (pointType) {
      case 'coin':
        return '🏆';
      case 'fire':
        return '🔥';
      default:
        return '💰';
    }
  };

  const getRankBadge = () => {
    if (rank > 3) return null;
    
    return (
      <div className={`rank-badge rank-${rank}`}>
        {rank}
      </div>
    );
  };

  return (
    <div className={getRankStyle()}>
      {!isTopRank && <div className="rank-position">{rank}</div>}
      <div className="user-avatar">
        <img src={avatar} alt={`${name}'s avatar`} />
        {isTopRank && getRankBadge()}
      </div>
      <div className="user-info">
        <div className="user-name">
          {isMystery ? (
            <span className="mystery-user">
              <span className="mask-icon">🎭</span> Mystery Billionaire
            </span>
          ) : name}
        </div>
      </div>
      <div className="user-points">
        <span className="point-icon">{getPointIcon()}</span>
        <span className="point-value">{formatPoints(points)}</span>
      </div>
    </div>
  );
};

export default RankItem;