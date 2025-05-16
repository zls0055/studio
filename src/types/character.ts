export interface Character {
  id: string;
  name: string;
  chineseName: string;
  imageUrl: string;
  evol: string;
  evolIcon?: string; // Changed from React.ElementType
  affiliation: string;
  affiliationIcon?: string; // Changed from React.ElementType
  description: string;
  descriptionIcon?: string; // Changed from React.ElementType
}
