
"use client";

import { CharacterTable } from '@/components/character-table';
import { DEFAULT_CHARACTERS_DATA } from '@/lib/data';
import type { Character } from '@/types/character';
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, doc, writeBatch, FirestoreError } from 'firebase/firestore';
import { useToast } from "@/hooks/use-toast";


export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    let isMounted = true; // Flag to prevent state updates if component unmounts

    // Client-side timeout for the entire fetch operation
    const operationTimeoutId = setTimeout(() => {
      if (isMounted && isLoading) { // Only act if still loading
        console.warn("Home.useEffect: Firestore operation timed out client-side after 15 seconds.");
        toast({
          title: "Loading Timeout",
          description: "Could not connect to the database in a reasonable time. Displaying default data.",
          variant: "destructive",
        });
        setCharacters(DEFAULT_CHARACTERS_DATA);
        setIsLoading(false);
      }
    }, 15000); // 15 seconds

    const fetchCharacters = async () => {
      if (!isMounted) return;
      console.log("fetchCharacters: Starting to fetch characters...");
      // isLoading is true by default

      try {
        const charactersCollectionRef = collection(db, "characters");
        console.log("fetchCharacters: Attempting to get documents from Firestore...");
        const querySnapshot = await getDocs(charactersCollectionRef);
        
        if (!isMounted) return; // Check again before state updates
        clearTimeout(operationTimeoutId); // Clear the main operation timeout
        console.log("fetchCharacters: Successfully fetched documents from Firestore.");
        
        if (querySnapshot.empty) {
          console.log("fetchCharacters: Firestore 'characters' collection is empty. Seeding with default data...");
          if (isMounted) {
            toast({
              title: "Initializing Database",
              description: "No characters found. Seeding with default data...",
            });
          }
          const batch = writeBatch(db);
          DEFAULT_CHARACTERS_DATA.forEach((character) => {
            const docRef = doc(db, "characters", character.id);
            batch.set(docRef, character);
          });
          await batch.commit();
          if (isMounted) {
            setCharacters(DEFAULT_CHARACTERS_DATA);
            console.log("fetchCharacters: Default data seeded to Firestore.");
            toast({
              title: "Database Initialized",
              description: "Default characters have been added.",
            });
          }
        } else {
          console.log("fetchCharacters: Processing fetched characters from Firestore.");
          const fetchedCharacters: Character[] = [];
          querySnapshot.forEach((doc) => {
            fetchedCharacters.push({ id: doc.id, ...doc.data() } as Character);
          });
          fetchedCharacters.sort((a, b) => parseInt(a.id) - parseInt(b.id));
          if (isMounted) {
            setCharacters(fetchedCharacters);
          }
          console.log("fetchCharacters: Characters state updated with fetched data.");
        }
      } catch (error) {
        if (!isMounted) return; // Check again
        clearTimeout(operationTimeoutId); // Clear the main operation timeout

        console.error("fetchCharacters: Error during Firestore operation: ", error);
        let errorMessage = "Could not fetch characters from database. Displaying default data.";
        if (error instanceof FirestoreError) {
          errorMessage = `Firestore error (${error.code}): ${error.message}. Displaying default data.`;
        } else if (error instanceof Error) {
          errorMessage = `Error: ${error.message}. Displaying default data.`;
        }
        
        if (isMounted) {
          toast({
            title: "Error Loading Data",
            description: errorMessage,
            variant: "destructive",
          });
          setCharacters(DEFAULT_CHARACTERS_DATA); // Fallback to default data
        }
        console.log("fetchCharacters: Fallback to default data due to error.");
      } finally {
        if (isMounted) {
          setIsLoading(false);
          console.log("fetchCharacters: Finished fetching characters. isLoading set to false.");
        }
      }
    };

    fetchCharacters();

    return () => {
      isMounted = false;
      clearTimeout(operationTimeoutId); // Cleanup the timeout when component unmounts
    };
  }, [toast]); // toast is stable, so this typically runs once on mount

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
