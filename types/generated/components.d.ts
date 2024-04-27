import type { Schema, Attribute } from '@strapi/strapi';

export interface IngredientIngredient extends Schema.Component {
  collectionName: 'components_ingredient_ingredients';
  info: {
    displayName: 'Ingredient';
    icon: 'apps';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
  };
}

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

export interface NutritionNutrition extends Schema.Component {
  collectionName: 'components_nutrition_nutritions';
  info: {
    displayName: 'Nutrition';
    icon: 'chartBubble';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    quantity: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ingredient.ingredient': IngredientIngredient;
      'marquee.marquee': MarqueeMarquee;
      'nutrition.nutrition': NutritionNutrition;
    }
  }
}
