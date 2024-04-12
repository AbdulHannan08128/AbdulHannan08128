import {createClient} from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
    projectId:'qhzy9ruh',
    dataset:'production',
    apiVersion:'2022-03-07',
    useCdn:true
})

const builder = imageUrlBuilder(client);

export function urlForImage(source: SanityImageSource) {
  return builder.image(source)
}