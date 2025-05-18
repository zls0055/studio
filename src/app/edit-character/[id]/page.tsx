
"use client";

import type { Character } from '@/types/character';
import { DEFAULT_CHARACTERS_DATA, LOCAL_STORAGE_KEY } from '@/lib/data';
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
  const resolvedParams = use(paramsPromise); // Unpack the promise

  const router = useRouter();
  const { toast } = useToast();
  const [character, setCharacter] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
    if (typeof window !== 'undefined' && resolvedParams?.id) {
      const charId = resolvedParams.id;
      let allCharacters: Character[] = DEFAULT_CHARACTERS_DATA;
      const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
      
      if (storedData) {
        try {
          allCharacters = JSON.parse(storedData);
        } catch (error) {
          console.error("Failed to parse characters from local storage for editing", error);
          // Fallback to default data if parsing fails
          allCharacters = DEFAULT_CHARACTERS_DATA;
        }
      }

      const foundCharacter = allCharacters.find(c => c.id === charId);
      
      if (foundCharacter) {
        setCharacter(foundCharacter);
        form.reset({
          name: foundCharacter.name,
          chineseName: foundCharacter.chineseName,
          evol: foundCharacter.evol,
          affiliation: foundCharacter.affiliation,
          description: foundCharacter.description,
          imageUrl: foundCharacter.imageUrl || '',
        });
      } else {
        toast({
          title: "Error",
          description: "Character not found.",
          variant: "destructive",
        });
        router.push('/');
      }
      setIsLoading(false);
    }
  }, [resolvedParams?.id, form, router, toast]);

  function onSubmit(data: CharacterFormData) {
    if (typeof window !== 'undefined' && resolvedParams?.id) {
      const charId = resolvedParams.id;
      let currentCharacters: Character[] = [];
      const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);

      if (storedData) {
        try {
          currentCharacters = JSON.parse(storedData);
        } catch (error) {
          console.error("Failed to parse characters from local storage on submit", error);
          toast({
            title: "Error",
            description: "Could not load character data to save.",
            variant: "destructive",
          });
          return;
        }
      } else {
        // If local storage is empty, this means something went wrong or it's the first interaction
        // We could initialize with default, but it's safer to indicate an error if LS is expected.
        // For this case, let's assume if LS is empty, we use default data as the base.
        currentCharacters = [...DEFAULT_CHARACTERS_DATA];
      }
      
      const characterIndex = currentCharacters.findIndex(c => c.id === charId);

      if (characterIndex !== -1) {
        // Preserve existing icon fields as they are not part of the form
        const originalCharacter = currentCharacters[characterIndex];
        currentCharacters[characterIndex] = {
          ...originalCharacter, // Keeps id, evolIcon, affiliationIcon, descriptionIcon
          ...data,             // Overwrites name, chineseName, evol, affiliation, description, imageUrl
          imageUrl: data.imageUrl || originalCharacter.imageUrl, // Ensure imageUrl is handled
        };
        
        try {
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentCharacters));
          toast({
            title: "Success!",
            description: `${data.name}'s profile has been updated.`,
          });
          router.push('/'); // Navigate back to the character list
        } catch (error) {
          console.error("Failed to save characters to local storage", error);
          toast({
            title: "Error",
            description: "Could not save changes.",
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "Error",
          description: "Could not find character to update.",
          variant: "destructive",
        });
      }
    }
  }

  if (isLoading || !character) {
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
                        <Input placeholder="https://placehold.co/300x300.png" {...field} value={field.value || ''} />
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
