// KAN-257: a versao anterior era
//   NEXT_PUBLIC_API_URL?.replace('/graphql','') ? NEXT_PUBLIC_API_URL : default
// O resultado do replace era descartado (servia apenas como teste de
// truthiness), o ramo verdadeiro usava a env crua, e se a env fosse exatamente
// "/graphql" o replace virava "" (falsy) e caia no default. Convoluto e
// mascarava a intencao — simplificado para o comportamento pretendido.
const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://api.bcmtech.com.br/graphql';

export interface SiteContent {
  hero_title: string;
  hero_subtitle: string;
  platform_description: string;
  contact_whatsapp: string;
  contact_email: string;
  app_download_url: string;
  app_download_text: string;
  // KAN-257: estas duas flags sao lidas do CMS mas NENHUMA pagina as consome
  // hoje — ligar no painel nao mostra nada. Os componentes orfaos que existiam
  // para isso (Stats.tsx e FeatureCard.tsx) foram removidos por serem codigo
  // morto. Mantidas aqui de proposito para nao quebrar o contrato com o CMS:
  // ou as secoes sao implementadas, ou as chaves saem tambem do superadmin.
  show_stats: boolean;
  show_testimonials: boolean;
}

const DEFAULTS: SiteContent = {
  hero_title: 'Compre local. Venda mais. Tudo num app.',
  hero_subtitle:
    'Conectamos clientes a lojas e serviços locais com entrega rápida. Para vendedores, o painel mais simples e poderoso para gerenciar seu negócio digital.',
  platform_description: 'Marketplace local para produtos e serviços. Conectando clientes e vendedores.',
  // KAN-250: numero corrigido pelo Bruno. O valor antigo ('+55 53 8442-4244')
  // gerava wa.me/555384424244 — 12 digitos, faltando o 9 do celular. Um numero
  // BR valido no WhatsApp tem 13 digitos (55 + DDD + 9 digitos).
  contact_whatsapp: '+55 53 98442-4244',
  contact_email: 'contato@bcmtech.com.br',
  app_download_url: '',
  app_download_text: 'Em breve nas lojas',
  show_stats: false,
  show_testimonials: false,
};

export async function getSiteContent(): Promise<SiteContent> {
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `query { getAllSiteConfig { key value } }`,
      }),
      next: { revalidate: 300 },
    });

    if (!res.ok) return DEFAULTS;

    const json = await res.json();
    const configs: { key: string; value: string }[] = json?.data?.getAllSiteConfig ?? [];

    const map: Record<string, string> = {};
    configs.forEach((c) => { map[c.key] = c.value; });

    return {
      hero_title: map.hero_title ?? DEFAULTS.hero_title,
      hero_subtitle: map.hero_subtitle ?? DEFAULTS.hero_subtitle,
      platform_description: map.platform_description ?? DEFAULTS.platform_description,
      contact_whatsapp: map.contact_whatsapp ?? DEFAULTS.contact_whatsapp,
      contact_email: map.contact_email ?? DEFAULTS.contact_email,
      app_download_url: map.app_download_url ?? DEFAULTS.app_download_url,
      app_download_text: map.app_download_text ?? DEFAULTS.app_download_text,
      show_stats: map.show_stats === 'true',
      show_testimonials: map.show_testimonials === 'true',
    };
  } catch {
    return DEFAULTS;
  }
}
