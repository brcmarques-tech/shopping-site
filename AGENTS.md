<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# shopping-site — Regras de Projeto

Site institucional/marketing da bcmTech (nao e a loja — a loja e o `shopping-storefront`).
Porta local 3004.

## Stack
- Next.js 16 (App Router) + TypeScript + Tailwind
- Next 16 tem quebras em relacao ao que voce "sabe" — ver o bloco acima

## Conteudo
- Os textos vem da API (`site_config`) via `lib/site-content.ts`, com `API_URL`
  de `NEXT_PUBLIC_API_URL` e default `https://api.bcmtech.com.br/graphql`.
  O site precisa renderizar **mesmo com a API fora** — manter o fallback.
- O que o site promete tem que existir no produto. Ja aconteceu de o site anunciar PIX
  que a loja web nao entregava (KAN-252).

## Comandos
- `yarn dev --port 3004` — local
- `./node_modules/.bin/tsc --noEmit` — type-check (**nao** `npx tsc`)
