
"use client";

import type { Character } from '@/types/character';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { 
  Pencil,
  Clock,
  Sparkles,
  FileText,
  Brain,
  Briefcase,
  Users,
  Flame,
  Gem,
  Zap,
  Shield,
  Heart,
  Hospital,
  EyeOff,
  Building,
  Eye,
  Eraser,
  ScanEye,
  Volume2,
  Waves,
  Magnet,
  Snowflake // Keep Snowflake if it's still potentially used elsewhere or as a default
} from 'lucide-react';
import type React from 'react';

interface CharacterTableProps {
  characters: Character[];
}

const iconMap: { [key: string]: React.ElementType } = {
  Clock,
  Sparkles,
  FileText,
  Brain,
  Briefcase,
  Users,
  Flame,
  Gem,
  Zap,
  Shield,
  Heart,
  Hospital,
  EyeOff,
  Building,
  Eye,
  Eraser,
  ScanEye,
  Volume2,
  Waves,
  Magnet,
  Snowflake, // Ensure all icons from data.ts are here
};

const getIconComponent = (iconName?: string): React.ElementType | null => {
  if (!iconName) return null;
  return iconMap[iconName] || null; // Return null if icon name not found
};

export function CharacterTable({ characters }: CharacterTableProps) {
  const router = useRouter();

  const handleEdit = (characterId: string) => {
    router.push(`/edit-character/${characterId}`);
  };

  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-primary">角色档案 (Character Files)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">头像 (Avatar)</TableHead>
                <TableHead>姓名 (Name)</TableHead>
                <TableHead>Evol</TableHead>
                <TableHead>所属 (Affiliation)</TableHead>
                <TableHead className="min-w-[300px]">简介 (Description)</TableHead>
                <TableHead>操作 (Actions)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {characters.map((character) => {
                const EvolIconComponent = getIconComponent(character.evolIcon);
                const AffiliationIconComponent = getIconComponent(character.affiliationIcon);
                const DescriptionIconComponent = getIconComponent(character.descriptionIcon);
                
                return (
                  <TableRow key={character.id} className="hover:bg-accent/10">
                    <TableCell>
                      <Image
                        src={character.imageUrl}
                        alt={character.name}
                        width={80}
                        height={80}
                        className="rounded-lg object-cover shadow-md"
                        data-ai-hint={
                          character.name === "Xu Mo" ? "scientist producer" :
                          character.name === "Li Zeyan" ? "ceo businessman" :
                          character.name === "Zhou Qiluo" ? "star idol" :
                          character.name === "Xue Yang" ? "man complex" :
                          character.name === "Bai Qi" ? "man bodyguard" :
                          character.name === "Fang Quan" ? "man doctor" :
                          character.name === "Yu Yan" ? "man mysterious" :
                          character.name === "Fu Xing" ? "man researcher" :
                          character.name === "Liu Yu" ? "man memory" :
                          character.name === "Lin Feng" ? "fire leader" :
                          character.name === "Yan Jun" ? "man insight" :
                          character.name === "Zhao Rui" ? "sound producer" :
                          character.name === "Cheng Hao" ? "sound wave" :
                          character.name === "Jin Han" ? "man metal" : "character"
                        }
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      {character.name}
                      <span className="block text-sm text-muted-foreground">{character.chineseName}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {EvolIconComponent && <EvolIconComponent className="h-5 w-5 text-primary" />}
                        <span>{character.evol}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                       <div className="flex items-center gap-2">
                        {AffiliationIconComponent && <AffiliationIconComponent className="h-5 w-5 text-primary" />}
                        <span>{character.affiliation}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-start gap-2">
                        {DescriptionIconComponent && <DescriptionIconComponent className="h-5 w-5 text-primary mt-1 shrink-0" />}
                        <p className="text-sm">{character.description}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(character.id)}
                      >
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
