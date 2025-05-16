
import { CharacterTable } from '@/components/character-table';
import { charactersData } from '@/lib/data'; // Import from the new location

export default function Home() {
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
        
        <CharacterTable characters={charactersData} />

        <footer className="mt-12 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Deepspace Profiles. All rights reserved.</p>
          <p>Game content and characters are trademarks and copyrights of their respective publisher and its licensors.</p>
        </footer>
      </div>
    </main>
  );
}
