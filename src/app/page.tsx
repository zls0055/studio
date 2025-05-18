
"use client";

import { CharacterTable } from '@/components/character-table';
import { DEFAULT_CHARACTERS_DATA, LOCAL_STORAGE_KEY } from '@/lib/data';
import type { Character } from '@/types/character';
import { useEffect, useState } from 'react';

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedData) {
        try {
          setCharacters(JSON.parse(storedData));
        } catch (error) {
          console.error("Failed to parse characters from local storage", error);
          setCharacters(DEFAULT_CHARACTERS_DATA);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_CHARACTERS_DATA));
        }
      } else {
        setCharacters(DEFAULT_CHARACTERS_DATA);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_CHARACTERS_DATA));
      }
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-background to-accent/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex justify-center items-center min-h-[calc(100vh-10rem)]">
          <p className="text-xl text-muted-foreground">Loading characters...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-accent/10 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-primary sm:text-6xl drop-shadow-md">
            Deepspace Profiles
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            探索《恋与深空》中角色的迷人档案 (Explore the captivating files of characters in "Love and Deepspace")
          </p>
        </header>
        
        <CharacterTable characters={characters} />

        <footer className="mt-12 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Deepspace Profiles. All rights reserved.</p>
          <p>Game content and characters are trademarks and copyrights of their respective publisher and its licensors.</p>
        </footer>
      </div>
    </main>
  );
}
