
"use client";

import type { Character } from '@/types/character';
import { charactersData } from '@/lib/data';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save } from 'lucide-react';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';

const characterFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  chineseName: z.string().min(1, "Chinese name is required"),
  evol: z.string().min(1, "Evol is required"),
  affiliation: z.string().min(1, "Affiliation is required"),
  description: z.string().min(1, "Description is required"),
  imageUrl: z.string().url("Must be a valid URL or leave empty").or(z.literal('')).optional(),
});

type CharacterFormData = z.infer<typeof characterFormSchema>;

interface EditCharacterPageProps {
  params: Promise<{ id: string }>;
}

export default function EditCharacterPage({ params: paramsPromise }: EditCharacterPageProps) {
  const resolvedParams = use(paramsPromise);

  const router = useRouter();
  const { toast } = useToast();
  const [character, setCharacter] = useState<Character | null>(null);

  const form = useForm<CharacterFormData>({
    resolver: zodResolver(characterFormSchema),
    defaultValues: {
      name: '',
      chineseName: '',
      evol: '',
      affiliation: '',
      description: '',
      imageUrl: '',
    },
  });

  useEffect(() => {
    const charId = resolvedParams.id;
    const foundCharacter = charactersData.find(c => c.id === charId);
    if (foundCharacter) {
      setCharacter(foundCharacter);
      form.reset({
        name: foundCharacter.name,
        chineseName: foundCharacter.chineseName,
        evol: foundCharacter.evol,
        affiliation: foundCharacter.affiliation,
        description: foundCharacter.description,
        imageUrl: foundCharacter.imageUrl,
      });
    } else {
      toast({
        title: "Error",
        description: "Character not found.",
        variant: "destructive",
      });
      router.push('/');
    }
  }, [resolvedParams.id, form, router, toast]);

  function onSubmit(data: CharacterFormData) {
    const charId = resolvedParams.id;
    const characterIndex = charactersData.findIndex(c => c.id === charId);

    if (characterIndex !== -1) {
      // Preserve existing icon fields as they are not part of the form
      const originalCharacter = charactersData[characterIndex];
      charactersData[characterIndex] = {
        ...originalCharacter, // Keeps id, evolIcon, affiliationIcon, descriptionIcon
        ...data,             // Overwrites name, chineseName, evol, affiliation, description, imageUrl
      };
      toast({
        title: "Success!",
        description: `${data.name}'s profile has been updated.`,
      });
      router.push('/'); // Navigate back to the character list
    } else {
      toast({
        title: "Error",
        description: "Could not find character to update.",
        variant: "destructive",
      });
    }
  }

  if (!character) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading character data...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-accent/10 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-2xl">
        <Button variant="outline" onClick={() => router.push('/')} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Character List
        </Button>
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold text-primary">
              Edit Profile: {character.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name (English)</FormLabel>
                      <FormControl>
                        <Input placeholder="Character's English name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="chineseName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name (Chinese)</FormLabel>
                      <FormControl>
                        <Input placeholder="Character's Chinese name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://placehold.co/300x300.png" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="evol"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Evol (Superpower)</FormLabel>
                      <FormControl>
                        <Input placeholder="Character's Evol" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="affiliation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Affiliation</FormLabel>
                      <FormControl>
                        <Input placeholder="Character's affiliation" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Detailed description of the character"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <CardFooter className="flex justify-end p-0 pt-6">
                  <Button type="submit">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
