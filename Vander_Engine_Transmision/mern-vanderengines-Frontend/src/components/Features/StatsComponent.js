import React from 'react';
import { motion } from 'framer-motion';
import './StatsComponent.css'; // Custom CSS file

const stats = [
  {
    icon: '⚙️',
    count: '40K',
    description: 'Transmission Sale',
  },
  {
    icon: '👤',
    count: '40,000+',
    description: 'Satisfied Customers',
  },
  {
    icon: '🚛',
    count: '2000+',
    description: 'Inventory Yards',
  },
  {
    icon: '🛠️',
    count: 'Over 40',
    description: 'Million Used Engine & Transmissions',
  },
];

const StatsComponent = () => {
  return (
    <div className="vd_engines-stats-container">
      {stats.map((stat, index) => (
        <motion.div
          className="vd_engines-stat-card"
          key={index}
          whileHover={{ scale: 1.1, rotateY: 20 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="vd_engines-icon">{stat.icon}</div>
          <div className="vd_engines-count">{stat.count}</div>
          <div className="vd_engines-description">{stat.description}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsComponent;
