
import { CharacterTable } from '@/components/character-table';
import type { Character } from '@/types/character';
import { Zap, Shield, FileText, Heart, Sparkles } from 'lucide-react'; // Using Heart as an alternative for Evol to align with game themes

const charactersData: Character[] = [
  {
    id: '1',
    name: 'Xavier',
    chineseName: '沈星回',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '光 (Light)',
    evolIcon: Zap,
    affiliation: '深空猎人 (Deepspace Hunter)',
    affiliationIcon: Shield,
    description: '游荡宇宙的神秘猎人，似乎在追寻着某种特殊的“流浪体”。行踪无定，随性而动，没人知道他真正的目的。',
    descriptionIcon: FileText,
  },
  {
    id: '2',
    name: 'Zayne',
    chineseName: '黎深',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '冰 (Ice)',
    evolIcon: Heart, // Using Heart, can be changed to a snowflake SVG if available
    affiliation: '临空中心医院 (Lingkong Cardiac Research Center)',
    affiliationIcon: Shield,
    description: '顶级的心脏外科医生，也是芳心值日任务中的“Evol医疗专家”。冷静、专注、严格，对一切都要求极致。',
    descriptionIcon: FileText,
  },
  {
    id: '3',
    name: 'Rafayel',
    chineseName: '祁煜',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '火 (Fire)',
    evolIcon: Zap, // Could use a fire icon if available, Zap for general power
    affiliation: '艺术家 (Artist)',
    affiliationIcon: Shield, // Using shield as a generic affiliation icon
    description: '才华横溢的艺术家，海洋的宠儿。思维天马行空，时常做出令人意想不到的举动。画风浪漫炽热，色彩大胆奔放。',
    descriptionIcon: FileText,
  },
  {
    id: '4',
    name: 'Homura',
    chineseName: '绯',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '秘術 (Mystic Arts)',
    evolIcon: Sparkles,
    affiliation: '独行者 (Lone Wolf)',
    affiliationIcon: Shield,
    description: '一位背景神秘，游走于各个势力之间的独行者。他的Evol能力独特且难以捉摸，似乎与古老的秘术有关。人们对他的真实意图知之甚少。',
    descriptionIcon: FileText,
  },
];

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
