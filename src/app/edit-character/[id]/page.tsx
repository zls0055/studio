
"use client";

import type { Character } from '@/types/character';
// DEFAULT_CHARACTERS_DATA can be removed if not used as a fallback for individual fetch
// import { DEFAULT_CHARACTERS_DATA } from '@/lib/data';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save } from 'lucide-react';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

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
  // Icons are not part of the form for now, they are managed in data definition
  evolIcon: z.string().optional(),
  affiliationIcon: z.string().optional(),
  descriptionIcon: z.string().optional(),
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
    if (resolvedParams?.id) {
      const charId = resolvedParams.id;
      setIsLoading(true);
      const fetchCharacter = async () => {
        try {
          const characterDocRef = doc(db, "characters", charId);
          const docSnap = await getDoc(characterDocRef);

          if (docSnap.exists()) {
            const fetchedCharacter = { id: docSnap.id, ...docSnap.data() } as Character;
            setCharacter(fetchedCharacter);
            form.reset({
              name: fetchedCharacter.name,
              chineseName: fetchedCharacter.chineseName,
              evol: fetchedCharacter.evol,
              affiliation: fetchedCharacter.affiliation,
              description: fetchedCharacter.description,
              imageUrl: fetchedCharacter.imageUrl || '',
              // Pass icon data to form if needed, or keep them separate
              evolIcon: fetchedCharacter.evolIcon,
              affiliationIcon: fetchedCharacter.affiliationIcon,
              descriptionIcon: fetchedCharacter.descriptionIcon,
            });
          } else {
            toast({
              title: "Error",
              description: "Character not found in database.",
              variant: "destructive",
            });
            router.push('/');
          }
        } catch (error) {
          console.error("Error fetching character from Firestore: ", error);
          toast({
            title: "Error",
            description: "Could not load character data from database.",
            variant: "destructive",
          });
          router.push('/');
        } finally {
          setIsLoading(false);
        }
      };
      fetchCharacter();
    }
  }, [resolvedParams?.id, form, router, toast]);

  async function onSubmit(data: CharacterFormData) {
    if (!character || !resolvedParams?.id) {
      toast({
        title: "Error",
        description: "Character data is not loaded.",
        variant: "destructive",
      });
      return;
    }

    const charId = resolvedParams.id;
    // We need to merge form data with existing icon data if icons are not in the form
    // The current Character type includes icon fields, so we should preserve them
    const updatedCharacterData: Character = {
      id: charId, // Ensure ID is included
      name: data.name,
      chineseName: data.chineseName,
      evol: data.evol,
      affiliation: data.affiliation,
      description: data.description,
      imageUrl: data.imageUrl || character.imageUrl, // Use existing if form field is empty
      evolIcon: character.evolIcon, // Preserve original icon from loaded character
      affiliationIcon: character.affiliationIcon, // Preserve original icon
      descriptionIcon: character.descriptionIcon, // Preserve original icon
    };
    
    try {
      const characterDocRef = doc(db, "characters", charId);
      await setDoc(characterDocRef, updatedCharacterData, { merge: true }); // Use setDoc with merge to update or create
      toast({
        title: "Success!",
        description: `${data.name}'s profile has been updated in Firestore.`,
      });
      router.push('/'); 
    } catch (error) {
      console.error("Failed to save character to Firestore: ", error);
      toast({
        title: "Error",
        description: "Could not save changes to database.",
        variant: "destructive",
      });
    }
  }

  if (isLoading || !character) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading character data from Firestore...</p>
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
