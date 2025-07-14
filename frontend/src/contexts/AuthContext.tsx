import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  picture?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (token: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar se há token armazenado no localStorage
    const token = localStorage.getItem('admin_token');
    if (token) {
      // TODO: Validar token com backend
      // Por enquanto, simular usuário autenticado
      setUser({
        id: '1',
        email: 'admin@letxclub.com',
        name: 'Admin User',
        picture: undefined
      });
    }
    setIsLoading(false);
  }, []);

  const login = async (token: string) => {
    setIsLoading(true);
    try {
      // TODO: Implementar validação com backend
      localStorage.setItem('admin_token', token);
      setUser({
        id: '1',
        email: 'admin@letxclub.com',
        name: 'Admin User',
        picture: undefined
      });
    } catch (error) {
      console.error('Erro no login:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('admin_token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      login,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 