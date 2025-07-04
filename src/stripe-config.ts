export interface StripeProduct {
  id: string;
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
  price: number;
  currency: string;
  interval?: 'month' | 'year';
}

export const stripeProducts: StripeProduct[] = [
  {
    id: 'prod_SbUs9as3JHKfBh',
    priceId: 'price_1RgHsfLKBMTfyMxPU9RQZ07S',
    name: 'Unlimited Sales Copilot',
    description: 'Get unlimited access to AI-powered sales assistance with real-time conversation insights, objection handling, and automated follow-ups.',
    mode: 'subscription',
    price: 20.00,
    currency: 'usd',
    interval: 'month'
  }
];

export const getProductByPriceId = (priceId: string): StripeProduct | undefined => {
  return stripeProducts.find(product => product.priceId === priceId);
};

export const getProductById = (id: string): StripeProduct | undefined => {
  return stripeProducts.find(product => product.id === id);
};