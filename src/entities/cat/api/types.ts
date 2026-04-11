interface CatWeight {
  imperial: string;
  metric: string;
}

interface CatBreed {
    weight: CatWeight;
    id: string;
    name: string;
    temperament: string;
    origin: string;
    country_codes: string;
    country_code: string;
    life_span: string;
    wikipedia_url: string;
}

export interface CatApiResponse {
    breeds: CatBreed[];
    height: number;
    id: string;
    url: string; 
    width: number;  
}