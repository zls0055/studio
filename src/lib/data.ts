
import type { Character } from '@/types/character';

// Default/initial set of data. Can be used to seed Firestore.
export const DEFAULT_CHARACTERS_DATA: Character[] = [
  {
    id: '1',
    name: 'Xu Mo',
    chineseName: '许墨',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '时空穿越能力 (Space-time travel)',
    evolIcon: 'Clock',
    affiliation: '星锐娱乐 (Star Entertainment)',
    affiliationIcon: 'Sparkles',
    description: '许墨是一个外表冷酷、才华横溢的天才科学家兼制片人。性格理性而高傲，拥有深厚的专业知识。他在面对感情时较为迟钝，但随着剧情的发展，他逐渐被主角的温柔与坚韧所打动。许墨的超能力使他能够穿越不同的时间线，甚至改变过去的事件。',
    descriptionIcon: 'FileText',
  },
  {
    id: '2',
    name: 'Li Zeyan',
    chineseName: '李泽言',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '精神感应 (Mental perception)',
    evolIcon: 'Brain',
    affiliation: '寰宇集团 (Huanyu Group)',
    affiliationIcon: 'Briefcase',
    description: '李泽言是寰宇集团的CEO，冷静、聪明且非常有商业头脑。他总是能够预见未来，并善于掌控局面。李泽言的感情复杂且内敛，他的能力使他能够直接进入他人的内心，但也因此使得他对情感的处理更加谨慎。',
    descriptionIcon: 'FileText',
  },
  {
    id: '3',
    name: 'Zhou Qiluo',
    chineseName: '周棋洛',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '变形能力 (Shapeshifting)',
    evolIcon: 'Users',
    affiliation: '星锐娱乐 (Star Entertainment)',
    affiliationIcon: 'Sparkles',
    description: '周棋洛是一个天真、活泼的明星，以其俊美的外貌和甜美的声音受到了粉丝的追捧。他的超能力使他能够随意改变自己的外形，因此他经常用这个能力来玩笑或掩藏自己的真实身份。虽然他总是看起来无忧无虑，但其实他也有一些复杂的内心世界。',
    descriptionIcon: 'FileText',
  },
  {
    id: '4',
    name: 'Xue Yang',
    chineseName: '薛洋',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '控制冰火元素 (Ice & Fire Control)',
    evolIcon: 'Flame', // Note: Was Snowflake, changed to Flame to match Evol text
    affiliation: '红石集团 (Redstone Group)',
    affiliationIcon: 'Gem',
    description: '薛洋是红石集团的继承人，外表冷酷且孤傲，性格极为复杂。他拥有操控冰火元素的能力，冷静而危险。他的一生充满了阴谋与背叛，这也让他在面对感情时格外谨慎。尽管表面上他对主角冷漠无情，但随着剧情的推进，他逐渐表现出对主角的深厚情感。',
    descriptionIcon: 'FileText',
  },
  {
    id: '5',
    name: 'Bai Qi',
    chineseName: '白起',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '超强力量与耐力 (Super strength & endurance)',
    evolIcon: 'Zap',
    affiliation: '雷霆集团 (Thunder Group)',
    affiliationIcon: 'Shield',
    description: '白起是雷霆集团的顶级保镖，身材高大且力量惊人，性格直接且有些粗暴。他对工作非常投入，保护主角时常表现出强烈的责任感。虽然他看起来有些粗犷，但实际上他的内心非常细腻。由于他过于专注于工作和责任，导致感情生活略显空白。',
    descriptionIcon: 'FileText',
  },
  {
    id: '6',
    name: 'Fang Quan',
    chineseName: '方泉',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '心灵治愈能力 (Healing touch)',
    evolIcon: 'Heart',
    affiliation: '星辉医院 (Xinghui Hospital)',
    affiliationIcon: 'Hospital',
    description: '方泉是星辉医院的一名医生，温柔且富有同情心。他具有心灵治愈的能力，能够通过触摸消除他人的痛苦，无论是身体上的还是心灵上的创伤。方泉是一个典型的“暖男”，总是以无私的态度去帮助别人，对主角展现了深深的关怀与爱护。',
    descriptionIcon: 'FileText',
  },
  {
    id: '7',
    name: 'Yu Yan',
    chineseName: '喻言',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '隐形能力 (Invisibility)',
    evolIcon: 'EyeOff',
    affiliation: '东方集团 (Oriental Group)',
    affiliationIcon: 'Building',
    description: '喻言是东方集团的神秘成员，外表冷静且理性。他拥有隐形能力，能够在不被察觉的情况下进行各种行动。由于他的能力和神秘背景，喻言在游戏中一直保持着一种朦胧的存在感。虽然他并不擅长表达情感，但随着剧情的发展，他和主角的关系逐渐深化。',
    descriptionIcon: 'FileText',
  },
  {
    id: '8',
    name: 'Fu Xing',
    chineseName: '傅星',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '未来感知 (Future perception)',
    evolIcon: 'Eye',
    affiliation: '寰宇集团 (Huanyu Group)',
    affiliationIcon: 'Briefcase',
    description: '傅星是寰宇集团的一个神秘研究员，拥有未来感知的能力，能够预测未来几分钟到几小时内发生的事件。他的性格较为冷静，并且有些孤独。他总是显得与世隔绝，专注于自己的研究。尽管如此，他对主角的感情逐渐萌芽，尤其在遇到危险时，他展现了保护的欲望。',
    descriptionIcon: 'FileText',
  },
  {
    id: '9',
    name: 'Liu Yu',
    chineseName: '刘宇',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '记忆操控 (Memory Manipulation)',
    evolIcon: 'Eraser',
    affiliation: '东方集团 (Oriental Group)',
    affiliationIcon: 'Building',
    description: '刘宇是东方集团的成员之一，他有着冷静而严谨的性格。由于能操控他人的记忆，他常常在幕后策划重要的事件。性格较为理智和神秘，且非常重视集团的利益。虽然他平时给人一种高高在上的感觉，但也有一颗柔软的内心。',
    descriptionIcon: 'FileText',
  },
  {
    id: '10',
    name: 'Lin Feng',
    chineseName: '林风',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '火焰控制 (Flame Control)',
    evolIcon: 'Flame',
    affiliation: '雷霆集团 (Thunder Group)',
    affiliationIcon: 'Shield',
    description: '林风是雷霆集团的高级成员，拥有操控火焰的能力。他的性格开朗、直率，极具领导魅力。他对自己的能力非常自信，同时也常常帮助别人解决困难。虽然他的外表充满阳光，但背后隐藏着复杂的情感和过去的经历。与主角的互动中，林风逐渐展示了更多细腻的一面。',
    descriptionIcon: 'FileText',
  },
  {
    id: '11',
    name: 'Yan Jun',
    chineseName: '严峻',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '透视能力 (X-ray Vision/Penetration)',
    evolIcon: 'ScanEye',
    affiliation: '寰宇集团 (Huanyu Group)',
    affiliationIcon: 'Briefcase',
    description: '严峻是寰宇集团的精英成员之一，他的透视能力使他能够看到事物的本质，甚至是他人的内心。严峻是一个非常理性且具有洞察力的人，他总是能看穿局势，并做出精准的判断。虽然他有些冷酷，但在与主角的关系中逐渐显现出温柔与关怀。',
    descriptionIcon: 'FileText',
  },
  {
    id: '12',
    name: 'Zhao Rui',
    chineseName: '赵瑞',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '声音控制 (Sound Control)',
    evolIcon: 'Volume2',
    affiliation: '星辉娱乐 (Xinghui Entertainment)', // Corrected from 星锐娱乐
    affiliationIcon: 'Sparkles',
    description: '赵瑞是星辉娱乐的一名资深制作人，他擅长通过声音来操控人们的情绪或引导局面。性格上他看似沉稳，但其实非常有一颗艺术家的心。他的声音控制能力使他在工作中非常得心应手，同时也让他在复杂的局势中能占得先机。',
    descriptionIcon: 'FileText',
  },
  {
    id: '13',
    name: 'Cheng Hao',
    chineseName: '程皓',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '声音波动 (Sound Waves)',
    evolIcon: 'Waves',
    affiliation: '雷霆集团 (Thunder Group)',
    affiliationIcon: 'Shield',
    description: '程皓是雷霆集团的成员，拥有通过声音波动来攻击敌人的能力。他的性格较为高傲，习惯用自己的实力来压制周围的对手。程皓拥有强大的战斗能力，但他并不常显露自己的真实想法，给人一种神秘而强大的感觉。',
    descriptionIcon: 'FileText',
  },
  {
    id: '14',
    name: 'Jin Han',
    chineseName: '金瀚',
    imageUrl: 'https://placehold.co/300x300.png',
    evol: '金属操控 (Metal Manipulation)',
    evolIcon: 'Magnet',
    affiliation: '寰宇集团 (Huanyu Group)',
    affiliationIcon: 'Briefcase',
    description: '金瀚是寰宇集团的另一位重要成员，性格沉稳且非常理性。他的能力是操控金属，可以利用这一点进行攻击或防御。金瀚非常聪明，有着过人的直觉和分析能力，但也因过于理智而显得有些冷漠。尽管如此，他对主角的态度逐渐从冷静变得更加亲近。',
    descriptionIcon: 'FileText',
  },
];
