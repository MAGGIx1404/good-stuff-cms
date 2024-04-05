import type { Schema, Attribute } from '@strapi/strapi';

export interface MarqueeMarquee extends Schema.Component {
  collectionName: 'components_marquee_marquees';
  info: {
    displayName: 'Marquee';
    icon: 'feather';
  };
  attributes: {
    marquee: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'marquee.marquee': MarqueeMarquee;
    }
  }
}
