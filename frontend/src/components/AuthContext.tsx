// src/components/AuthContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface User {
  id?: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (fullName: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const API_BASE: string =
  import.meta.env.VITE_API_BASE || "http://localhost:5000";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const saved = sessionStorage.getItem("bengalTrailsUser");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [loading, setLoading] = useState<boolean>(false);

  // Persist user -> sessionStorage
  useEffect(() => {
    try {
      if (user !== null) {
        sessionStorage.setItem("bengalTrailsUser", JSON.stringify(user));
      } else {
        sessionStorage.removeItem("bengalTrailsUser");
      }
    } catch {
      // ignore storage errors
    }
  }, [user]);

  // Check server session on mount. If the session cookie exists and is valid,
  // the server will return the user object from /api/user/profile.
  useEffect(() => {
    let mounted = true;
    const checkSession = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/api/user/profile`, {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        });
        if (!mounted) return;
        if (res.ok) {
          const data = await res.json();
          // backend returns { user }
          if (data?.user) {
            setUser(data.user);
            setLoading(false);
            return;
          }
        }
        // not authenticated on server
        setUser(null);
      } catch (err) {
        // network or other error — assume not authenticated
        setUser(null);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    checkSession();
    return () => {
      mounted = false;
    };
  }, []);

  const signup = async (fullName: string, email: string, password: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ fullName, email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Signup failed");
      setUser(data.user);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Login failed");
      setUser(data.user);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await fetch(`${API_BASE}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch {
      // ignore network errors
    } finally {
      try {
        sessionStorage.removeItem("bengalTrailsUser");
      } catch {}
      setUser(null);
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
