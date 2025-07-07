import { getCollection } from 'astro:content';

const globals = await getCollection('globals');

export const general = globals[0].data.general[0];
export const header = globals[0].data.header[0];
export const footer = globals[0].data.footer[0];
export const socials = globals[0].data.socials[0];
export const page404 = globals[0].data.page404[0];
