
import { CharacterTable } from '@/components/character-table';
import type { Character } from '@/types/character';
import { Zap, Shield, FileText, Heart, Hourglass, Film, Brain, Briefcase, Users, Star, Gem, Flame, Snowflake } from 'lucide-react';

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
    evolIcon: Snowflake, // Changed from Heart to Snowflake for better representation
    affiliation: '临空中心医院 (Lingkong Cardiac Research Center)',
    affiliationIcon: Shield, // Could be more specific like Heart if appropriate for Cardiac Center
    description: '顶级的心脏外科医生，也是芳心值日任务中的“Evol医疗专家”。冷静、专注、严格，对一切都要求极致。',
    descriptionIcon: FileText,
  },
  {
    id: '3',
    name: 'Rafayel',
    chineseName: '祁煜',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '火 (Fire)',
    evolIcon: Flame, // Changed from Zap to Flame for better representation
    affiliation: '艺术家 (Artist)',
    affiliationIcon: Shield, // Could be Palette or Brush for Artist
    description: '才华横溢的艺术家，海洋的宠儿。思维天马行空，时常做出令人意想不到的举动。画风浪漫炽热，色彩大胆奔放。',
    descriptionIcon: FileText,
  },
  {
    id: '4',
    name: 'Xu Mo',
    chineseName: '许墨',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '时空穿越 (Time-Space Manipulation)',
    evolIcon: Hourglass,
    affiliation: '星锐娱乐 (Star Entertainment)',
    affiliationIcon: Film,
    description: '许墨是一个外表冷酷、才华横溢的天才科学家兼制片人。性格理性而高傲，拥有深厚的专业知识。他在面对感情时较为迟钝，但随着剧情的发展，他逐渐被主角的温柔与坚韧所打动。许墨的超能力使他能够穿越不同的时间线，甚至改变过去的事件。',
    descriptionIcon: FileText,
  },
  {
    id: '5',
    name: 'Li Zeyan',
    chineseName: '李泽言',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '精神感应 (Mental Perception)',
    evolIcon: Brain,
    affiliation: '寰宇集团 (Huanyu Group)',
    affiliationIcon: Briefcase,
    description: '李泽言是寰宇集团的CEO，冷静、聪明且非常有商业头脑。他总是能够预见未来，并善于掌控局面。李泽言的感情复杂且内敛，他的能力使他能够直接进入他人的内心，但也因此使得他对情感的处理更加谨慎。',
    descriptionIcon: FileText,
  },
  {
    id: '6',
    name: 'Zhou Qiluo',
    chineseName: '周棋洛',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '变形能力 (Shapeshifting)',
    evolIcon: Users,
    affiliation: '星锐娱乐 (Star Entertainment)',
    affiliationIcon: Star,
    description: '周棋洛是一个天真、活泼的明星，以其俊美的外貌和甜美的声音受到了粉丝的追捧。他的超能力使他能够随意改变自己的外形，因此他经常用这个能力来玩笑或掩藏自己的真实身份。虽然他总是看起来无忧无虑，但其实他也有一些复杂的内心世界。',
    descriptionIcon: FileText,
  },
  {
    id: '7',
    name: 'Xue Yang',
    chineseName: '薛洋',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '控制冰火元素 (Ice & Fire Control)',
    evolIcon: Flame, // Using Flame, could also use Layers or Zap for dual elements
    affiliation: '红石集团 (Redstone Group)',
    affiliationIcon: Gem,
    description: '薛洋是红石集团的继承人，外表冷酷且孤傲，性格极为复杂。他拥有操控冰火元素的能力，冷静而危险。他的一生充满了阴谋与背叛，这也让他在面对感情时格外谨慎。尽管表面上他对主角冷漠无情，但随着剧情的推进，他逐渐表现出对主角的深厚情感。',
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
