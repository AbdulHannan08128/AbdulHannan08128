import {createClient} from 'next-sanity';

export const client = createClient({
    projectId:'qhzy9ruh',
    dataset:'production',
    apiVersion:'2022-03-07',
    useCdn:true
})