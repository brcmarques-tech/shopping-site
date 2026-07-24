// KAN-251: fonte única dos números de pricing do site.
//
// Preços (Pro 49,90 / Premium 99,90), comissões (5% / 2% / 0%) e limites de
// loja/produto estavam copiados em `app/HomeClient.tsx`, `app/planos/
// PlanosClient.tsx`, `app/vendedores/VendedoresClient.tsx` e no texto do
// `app/faq/FaqClient.tsx`. Uma mudança de preço exigia editar 4 arquivos, e
// esquecer um significa anunciar publicamente dois valores diferentes.
//
// Cada página continua dona da sua apresentação (features, CTA, layout) — aqui
// ficam só os NÚMEROS, que são o que não pode divergir.

export type PlanName = 'Free' | 'Pro' | 'Premium' | 'Enterprise';
export type Period = 'mensal' | 'trimestral' | 'semestral' | 'anual';

/** Preço mensal "de tabela" de cada plano. `null` = sob consulta. */
export const PLAN_MONTHLY_PRICE: Record<PlanName, number | null> = {
  Free: 0,
  Pro: 49.9,
  Premium: 99.9,
  Enterprise: null,
};

/** Preço por periodicidade (a página /planos mostra o desconto por período). */
export const PLAN_PERIOD_PRICE: Record<PlanName, Record<Period, number | null>> = {
  Free: { mensal: 0, trimestral: 0, semestral: 0, anual: 0 },
  Pro: { mensal: 49.9, trimestral: 44.9, semestral: 39.9, anual: 34.9 },
  Premium: { mensal: 99.9, trimestral: 89.9, semestral: 79.9, anual: 69.9 },
  Enterprise: { mensal: null, trimestral: null, semestral: null, anual: null },
};

/** Comissão cobrada por venda, em %. */
export const PLAN_COMMISSION: Record<PlanName, number> = {
  Free: 5,
  Pro: 2,
  Premium: 0,
  Enterprise: 0,
};

/** Limites de cada plano. `null` em products = ilimitado. */
export const PLAN_LIMITS: Record<PlanName, { stores: number; products: number | null }> = {
  Free: { stores: 1, products: 50 },
  Pro: { stores: 3, products: 200 },
  Premium: { stores: 10, products: null },
  Enterprise: { stores: 0, products: null },
};

/** "5% de comissão" — usado nas listas de features. */
export const commissionLabel = (plan: PlanName): string =>
  `${PLAN_COMMISSION[plan]}% de comissão`;

/** "R$ 49,90" */
export const formatBRL = (value: number): string =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

/** "50 produtos" / "Produtos ilimitados" */
export const productsLabel = (plan: PlanName): string => {
  const limit = PLAN_LIMITS[plan].products;
  return limit === null ? 'Produtos ilimitados' : `${limit} produtos`;
};

/** "1 loja" / "3 lojas" */
export const storesLabel = (plan: PlanName): string => {
  const n = PLAN_LIMITS[plan].stores;
  return n === 1 ? '1 loja' : `${n} lojas`;
};
