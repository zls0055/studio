
import { CharacterTable } from '@/components/character-table';
import type { Character } from '@/types/character';
import { Zap, Shield, FileText, Heart, Hourglass, Film, Brain, Briefcase, Users, Star, Gem, Flame, Snowflake, Hospital, EyeOff, Building, Eye } from 'lucide-react';

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
    evolIcon: Snowflake,
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
    evolIcon: Flame,
    affiliation: '艺术家 (Artist)',
    affiliationIcon: Shield, 
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
    evolIcon: Flame, 
    affiliation: '红石集团 (Redstone Group)',
    affiliationIcon: Gem,
    description: '薛洋是红石集团的继承人，外表冷酷且孤傲，性格极为复杂。他拥有操控冰火元素的能力，冷静而危险。他的一生充满了阴谋与背叛，这也让他在面对感情时格外谨慎。尽管表面上他对主角冷漠无情，但随着剧情的推进，他逐渐表现出对主角的深厚情感。',
    descriptionIcon: FileText,
  },
  {
    id: '8',
    name: 'Bai Qi',
    chineseName: '白起',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '超强力量与耐力 (Super strength & endurance)',
    evolIcon: Zap, 
    affiliation: '雷霆集团 (Thunder Group)',
    affiliationIcon: Shield,
    description: '白起是雷霆集团的顶级保镖，身材高大且力量惊人，性格直接且有些粗暴。他对工作非常投入，保护主角时常表现出强烈的责任感。虽然他看起来有些粗犷，但实际上他的内心非常细腻。由于他过于专注于工作和责任，导致感情生活略显空白。',
    descriptionIcon: FileText,
  },
  {
    id: '9',
    name: 'Fang Quan',
    chineseName: '方泉',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '心灵治愈能力 (Healing touch)',
    evolIcon: Heart,
    affiliation: '星辉医院 (Xinghui Hospital)',
    affiliationIcon: Hospital,
    description: '方泉是星辉医院的一名医生，温柔且富有同情心。他具有心灵治愈的能力，能够通过触摸消除他人的痛苦，无论是身体上的还是心灵上的创伤。方泉是一个典型的“暖男”，总是以无私的态度去帮助别人，对主角展现了深深的关怀与爱护。',
    descriptionIcon: FileText,
  },
  {
    id: '10',
    name: 'Yu Yan',
    chineseName: '喻言',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '隐形能力 (Invisibility)',
    evolIcon: EyeOff,
    affiliation: '东方集团 (Oriental Group)',
    affiliationIcon: Building,
    description: '喻言是东方集团的神秘成员，外表冷静且理性。他拥有隐形能力，能够在不被察觉的情况下进行各种行动。由于他的能力和神秘背景，喻言在游戏中一直保持着一种朦胧的存在感。虽然他并不擅长表达情感，但随着剧情的发展，他和主角的关系逐渐深化。',
    descriptionIcon: FileText,
  },
  {
    id: '11',
    name: 'Fu Xing',
    chineseName: '傅星',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '未来感知 (Future perception)',
    evolIcon: Eye,
    affiliation: '寰宇集团 (Huanyu Group)',
    affiliationIcon: Briefcase,
    description: '傅星是寰宇集团的一个神秘研究员，拥有未来感知的能力，能够预测未来几分钟到几小时内发生的事件。他的性格较为冷静，并且有些孤独。他总是显得与世隔绝，专注于自己的研究。尽管如此，他对主角的感情逐渐萌芽，尤其在遇到危险时，他展现了保护的欲望。',
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
