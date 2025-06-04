import React from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement,
  BarElement,
  ArcElement,
  Title, 
  Tooltip, 
  Legend,
  Filler
} from 'chart.js';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Clock, Award, TrendingUp, Calendar } from 'lucide-react';

// Register ChartJS components
ChartJS.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement,
  BarElement,
  ArcElement,
  Title, 
  Tooltip, 
  Legend,
  Filler
);

// Dashboard component
const Dashboard: React.FC = () => {
  // Mock data for charts and stats
  const readingProgressData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Reading Time (minutes)',
        data: [15, 30, 20, 45, 25, 35, 40],
        fill: true,
        backgroundColor: 'rgba(37, 99, 235, 0.1)',
        borderColor: 'rgba(37, 99, 235, 0.8)',
        tension: 0.3,
      }
    ]
  };

  const vocabularyGrowthData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'New Words Learned',
        data: [12, 19, 15, 25],
        backgroundColor: 'rgba(79, 70, 229, 0.8)',
        borderRadius: 4,
      }
    ]
  };

  const engagementData = {
    labels: ['High Engagement', 'Medium Engagement', 'Low Engagement'],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: [
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)'
        ],
        borderWidth: 0,
      }
    ]
  };

  const recentBooks = [
    {
      id: 1,
      title: 'The Curious Garden',
      author: 'Peter Brown',
      coverUrl: 'https://images.pexels.com/photos/2099691/pexels-photo-2099691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      progress: 75,
      lastRead: '2 hours ago',
    },
    {
      id: 2,
      title: 'Rosie Revere, Engineer',
      author: 'Andrea Beaty',
      coverUrl: 'https://images.pexels.com/photos/3747139/pexels-photo-3747139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      progress: 40,
      lastRead: 'Yesterday',
    },
    {
      id: 3,
      title: 'Ada Twist, Scientist',
      author: 'Andrea Beaty',
      coverUrl: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      progress: 20,
      lastRead: '3 days ago',
    }
  ];

  const stats = [
    { 
      id: 'reading-time', 
      label: 'Reading Time', 
      value: '3.5 hrs', 
      change: '+12%', 
      icon: <Clock size={20} className="text-blue-600" />,
      positive: true 
    },
    { 
      id: 'vocab-growth', 
      label: 'Vocabulary', 
      value: '142 words', 
      change: '+8%', 
      icon: <Brain size={20} className="text-purple-600" />,
      positive: true 
    },
    { 
      id: 'books-read', 
      label: 'Books Read', 
      value: '7', 
      change: '+2', 
      icon: <BookOpen size={20} className="text-green-600" />,
      positive: true 
    },
    { 
      id: 'streak', 
      label: 'Reading Streak', 
      value: '7 days', 
      change: 'Best: 10', 
      icon: <Award size={20} className="text-amber-600" />,
      positive: false 
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-2">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Dashboard
      </h1>

      {/* Stats Section */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            variants={item}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white mt-1">
                  {stat.value}
                </p>
              </div>
              <div className="p-3 rounded-full bg-gray-50 dark:bg-gray-700">
                {stat.icon}
              </div>
            </div>
            <div className="mt-2">
              <span className={`inline-flex items-center text-xs font-medium ${
                stat.positive 
                  ? 'text-green-600 dark:text-green-400' 
                  : 'text-gray-600 dark:text-gray-400'
              }`}>
                <span className="mr-1">
                  {stat.positive && <TrendingUp size={14} />}
                </span>
                {stat.change}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-8 bg-white dark:bg-gray-800 rounded-lg shadow p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Reading Progress</h2>
            <div className="flex items-center">
              <Calendar size={16} className="text-gray-400 mr-1" />
              <span className="text-sm text-gray-500 dark:text-gray-400">Last 7 days</span>
            </div>
          </div>
          <div className="h-64">
            <Line 
              data={readingProgressData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                  tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    titleColor: '#1e293b',
                    bodyColor: '#1e293b',
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    borderWidth: 1,
                    padding: 10,
                    boxPadding: 4,
                    cornerRadius: 8,
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: {
                      color: 'rgba(0, 0, 0, 0.05)',
                    },
                  },
                  x: {
                    grid: {
                      display: false,
                    },
                  }
                }
              }}
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-4 bg-white dark:bg-gray-800 rounded-lg shadow p-5"
        >
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Reading Engagement</h2>
          <div className="h-64 flex items-center justify-center">
            <Doughnut 
              data={engagementData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      padding: 20,
                      usePointStyle: true,
                      pointStyle: 'circle',
                    }
                  }
                }
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Vocabulary Growth */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 mb-8"
      >
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Vocabulary Growth</h2>
        <div className="h-48">
          <Bar 
            data={vocabularyGrowthData} 
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false
                }
              },
              scales: {
                y: {
                  beginAtZero: true,
                  grid: {
                    color: 'rgba(0, 0, 0, 0.05)',
                  },
                },
                x: {
                  grid: {
                    display: false,
                  },
                }
              }
            }}
          />
        </div>
      </motion.div>

      {/* Recent Books */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden"
      >
        <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Recent Books</h2>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {recentBooks.map((book) => (
            <div key={book.id} className="p-5 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-16 w-12 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
                  <img 
                    src={book.coverUrl} 
                    alt={book.title} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-sm font-medium text-gray-800 dark:text-white">{book.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{book.author}</p>
                  <div className="mt-2">
                    <div className="flex items-center">
                      <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 dark:bg-blue-500 rounded-full" 
                          style={{ width: `${book.progress}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-xs font-medium text-gray-500 dark:text-gray-400">{book.progress}%</span>
                    </div>
                  </div>
                </div>
                <div className="ml-4 text-xs text-gray-500 dark:text-gray-400">{book.lastRead}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;