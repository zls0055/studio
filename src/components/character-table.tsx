
import type { Character } from '@/types/character';
import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CharacterTableProps {
  characters: Character[];
}

export function CharacterTable({ characters }: CharacterTableProps) {
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
              </TableRow>
            </TableHeader>
            <TableBody>
              {characters.map((character) => (
                <TableRow key={character.id} className="hover:bg-accent/10">
                  <TableCell>
                    <Image
                      src={character.imageUrl}
                      alt={character.name}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover shadow-md"
                      data-ai-hint={
                        character.name === "Xavier" ? "man hunter" :
                        character.name === "Zayne" ? "man doctor" :
                        character.name === "Rafayel" ? "man artist" :
                        character.name === "Xu Mo" ? "man scientist" :
                        character.name === "Li Zeyan" ? "man ceo" :
                        character.name === "Zhou Qiluo" ? "man celebrity" :
                        character.name === "Xue Yang" ? "man complex" : "character"
                      }
                    />
                  </TableCell>
                  <TableCell className="font-medium">
                    {character.name}
                    <span className="block text-sm text-muted-foreground">{character.chineseName}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {character.evolIcon && <character.evolIcon className="h-5 w-5 text-primary" />}
                      <span>{character.evol}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                     <div className="flex items-center gap-2">
                      {character.affiliationIcon && <character.affiliationIcon className="h-5 w-5 text-primary" />}
                      <span>{character.affiliation}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-start gap-2">
                      {character.descriptionIcon && <character.descriptionIcon className="h-5 w-5 text-primary mt-1 shrink-0" />}
                      <p className="text-sm">{character.description}</p>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
