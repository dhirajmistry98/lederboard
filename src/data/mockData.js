export const generateMockData = (count = 100) => {
  const users = [];
  const nameOptions = [
    "MysteryBillionaire", "COOL BOY", "Rindas", "MRS.RAJPUT", "PRITESH", 
    "Divine", "taqir", "King", "Devil", "Heartbeat Music", "Valentine's party",
    "GIRL Boy", "Healing Music", "Shree Krishna", "Rimjhim", "KRISHU RAJPUT",
    "THAKUR RAN VIJAY SINGH", "MUKKU", "Cabani", "MC RAJPUT"
  ];
  
  for (let i = 1; i <= count; i++) {
    const randomName = nameOptions[Math.floor(Math.random() * nameOptions.length)];
    users.push({
      id: i,
      name: i <= 20 ? nameOptions[(i-1) % nameOptions.length] : `User ${i}`,
      points: Math.floor(10000000 * Math.random()) + 300000,
      firePoints: Math.floor(2000 * Math.random()),
      isMystery: Math.random() > 0.9,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i + randomName}`
    });
  }
  // Sort by points in descending order
  return users.sort((a, b) => b.points - a.points).map((user, index) => ({
    ...user,
    rank: index + 1
  }));
};