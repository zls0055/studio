export interface Character {
  id: string;
  name: string;
  chineseName: string;
  imageUrl: string;
  evol: string;
  evolIcon?: React.ElementType;
  affiliation: string;
  affiliationIcon?: React.ElementType;
  description: string;
  descriptionIcon?: React.ElementType;
}
