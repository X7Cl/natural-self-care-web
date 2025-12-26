import { createDirectus, rest } from '@directus/sdk';


const DIRECTUS_URL = 'http://46.224.187.154:8055'; 

export const directus = createDirectus(DIRECTUS_URL).with(rest());
// Helper pour les images
export const assetUrl = (id: string) => `${DIRECTUS_URL}/assets/${id}`;
