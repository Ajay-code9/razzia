"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/router";

const SITE_AUTH_KEY = "razzia-site-authenticated";

export type UserRole = "customer" | "vendor" | "driver";

type AuthContextValue = {
  isAuthenticated: boolean;
  loginSite: (username: string, password: string) => boolean;
  logoutSite: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const authStatus = window.localStorage.getItem(SITE_AUTH_KEY);
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const loginSite = useCallback((username: string, password: string): boolean => {
    if (username.trim() === "RazziaVendor" && password === "RazziaProto") {
      setIsAuthenticated(true);
      window.localStorage.setItem(SITE_AUTH_KEY, "true");
      return true;
    }
    return false;
  }, []);

  const logoutSite = useCallback(() => {
    setIsAuthenticated(false);
    window.localStorage.removeItem(SITE_AUTH_KEY);
  }, []);

  const value = useMemo(
    () => ({ isAuthenticated, loginSite, logoutSite }),
    [isAuthenticated, loginSite, logoutSite]
  );

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-smoke-900 text-white font-sans">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-razzia-500 border-t-transparent" />
          <span className="text-sm font-medium tracking-wide text-smoke-300">Loading Razzia...</span>
        </div>
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}

export function ProtectedGate({ children }: { children: ReactNode }) {
  const { isAuthenticated, loginSite } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginSite(username, password);
    if (!success) {
      setError("Invalid username or password");
    } else {
      setError("");
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-smoke-900 px-4 py-12 text-smoke-900 selection:bg-razzia-500 selection:text-white">
      <div className="w-full max-w-md space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl transition-all">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-razzia-500 text-white font-black text-2xl shadow-lg shadow-razzia-500/30">
            R
          </div>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white">
            Razzia Access
          </h2>
          <p className="mt-2 text-sm text-smoke-400">
            Please enter your credentials to access the platform.
          </p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          {error && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-center text-sm font-medium text-red-400 animate-fadeIn">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-smoke-300">
              Username
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-smoke-500 outline-none transition focus:border-razzia-500 focus:bg-white/15 focus:ring-1 focus:ring-razzia-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-smoke-300">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-smoke-500 outline-none transition focus:border-razzia-500 focus:bg-white/15 focus:ring-1 focus:ring-razzia-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-razzia-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-razzia-500/25 transition-all hover:bg-razzia-600 hover:shadow-razzia-500/40 active:scale-[0.98]"
          >
            Log In
          </button>
        </form>

        <div className="pt-4 text-center text-xs text-smoke-500">
          Razzia &copy; {new Date().getFullYear()} &bull; Protected Environment
        </div>
      </div>
    </div>
  );
}

