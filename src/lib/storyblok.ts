import Page from '@/components/Page';
import Hero from '@/components/Hero';
import DanserStart from '@/components/start/DancesStart';
import NyhetStart from '@/components/start/NyhetStart';
import About from '@/components/about/About';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/Footer';
import Dans from '@/components/Dans';
import DanserShowcase from '@/components/DanserShowcase';
import Nyhet from '@/components/Nyhet';

import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    hero: Hero,
    danser_start: DanserStart,
    nyhet_start: NyhetStart,
    om_oss: About,
    kontakt: Contact,
    footer: Footer,
    dans: Dans,
    danser_showcase: DanserShowcase,
    nyhet: Nyhet,
  },
  apiOptions: {
    region: 'eu',
  },
});