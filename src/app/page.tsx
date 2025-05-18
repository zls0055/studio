
"use client";

import { CharacterTable } from '@/components/character-table';
import { DEFAULT_CHARACTERS_DATA } from '@/lib/data';
import type { Character } from '@/types/character';
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, doc, writeBatch } from 'firebase/firestore';
import { useToast } from "@/hooks/use-toast";


export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      try {
        const charactersCollectionRef = collection(db, "characters");
        const querySnapshot = await getDocs(charactersCollectionRef);
        
        if (querySnapshot.empty) {
          // Firestore is empty, seed with default data
          toast({
            title: "Initializing Database",
            description: "No characters found in database. Seeding with default data...",
          });
          const batch = writeBatch(db);
          DEFAULT_CHARACTERS_DATA.forEach((character) => {
            const docRef = doc(db, "characters", character.id);
            batch.set(docRef, character);
          });
          await batch.commit();
          setCharacters(DEFAULT_CHARACTERS_DATA);
          toast({
            title: "Database Initialized",
            description: "Default characters have been added to Firestore.",
          });
        } else {
          const fetchedCharacters: Character[] = [];
          querySnapshot.forEach((doc) => {
            fetchedCharacters.push({ id: doc.id, ...doc.data() } as Character);
          });
          // Sort by ID to maintain a consistent order, assuming IDs are somewhat sequential
          fetchedCharacters.sort((a, b) => parseInt(a.id) - parseInt(b.id));
          setCharacters(fetchedCharacters);
        }
      } catch (error) {
        console.error("Error fetching characters from Firestore: ", error);
        toast({
          title: "Error",
          description: "Could not fetch characters from database. Displaying default data.",
          variant: "destructive",
        });
        // Fallback to default data on error
        setCharacters(DEFAULT_CHARACTERS_DATA);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, [toast]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-background to-accent/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex justify-center items-center min-h-[calc(100vh-10rem)]">
          <p className="text-xl text-muted-foreground">Loading characters from Firestore...</p>
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
