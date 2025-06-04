import React, { createContext, useContext, useState, useEffect } from 'react';

// Define types
interface User {
  id: string;
  name: string;
  email: string;
  role: 'parent' | 'educator' | 'admin';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  error: string | null;
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  logout: () => {},
  error: null,
});

// Mock user for demo purposes
const MOCK_USER: User = {
  id: 'user123',
  name: 'Sarah Johnson',
  email: 'sarah.johnson@example.com',
  role: 'parent',
};

// Provider component
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check if user is already logged in (from localStorage in this example)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // In a real app, we would verify the token with the backend
        const storedUser = localStorage.getItem('aida_user');
        
        if (storedUser) {
          // Simulate a delay for API call
          await new Promise(resolve => setTimeout(resolve, 500));
          setUser(JSON.parse(storedUser));
        }
      } catch (err) {
        console.error('Authentication error:', err);
        setError('Failed to authenticate');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real app, we would make an API call here
      await new Promise(resolve => setTimeout(resolve, 800)); // Simulate API delay
      
      // Simple validation for demo
      if (email && password) {
        // In this demo, we accept any email/password and use mock data
        setUser(MOCK_USER);
        localStorage.setItem('aida_user', JSON.stringify(MOCK_USER));
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err instanceof Error ? err.message : 'Login failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('aida_user');
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook for using the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthProvider;