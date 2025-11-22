import { createContext,useState } from "react";
import type { ReactNode } from "react";

interface AppContextProps {
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

export const AppContext = createContext<AppContextProps>({
  favorites: [],
  toggleFavorite: () => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<number[]>(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const updated = prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id];
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <AppContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </AppContext.Provider>
  );
};
