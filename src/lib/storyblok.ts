import Page from '@/components/Page';
import Hero from '@/components/Hero';
import DanserStart from '@/components/start/DancesStart';
import NyhetStart from '@/components/start/NyhetStart';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    hero: Hero,
    danser_start: DanserStart,
    nyhet_start: NyhetStart,
  },
  apiOptions: {
    region: 'eu',
  },
});