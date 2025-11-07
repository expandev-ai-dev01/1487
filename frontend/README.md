# Catálogo de Bolos

Catálogo de produtos para confeitaria com listagem de bolos, filtros, detalhes dos produtos e funcionalidade de carrinho de compras.

## Tecnologias

- React 19.2.0
- TypeScript 5.9.3
- Vite 7.1.9
- TailwindCSS 3.4.14
- React Router DOM 7.9.3
- TanStack Query 5.90.2
- Zustand 5.0.8

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Acesse http://localhost:3000

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   ├── providers.tsx      # Provedores globais
│   └── router.tsx         # Configuração de rotas
├── pages/                 # Páginas da aplicação
│   ├── layouts/          # Layouts compartilhados
│   ├── Home/             # Página inicial
│   ├── Catalog/          # Catálogo de produtos
│   ├── ProductDetail/    # Detalhes do produto
│   ├── Cart/             # Carrinho de compras
│   └── NotFound/         # Página 404
├── domain/               # Domínios de negócio
├── core/                 # Componentes e utilitários core
│   ├── components/       # Componentes compartilhados
│   └── lib/             # Bibliotecas e utilitários
└── assets/              # Recursos estáticos
    └── styles/          # Estilos globais
```

## Funcionalidades

- ✅ Estrutura base da aplicação
- ✅ Roteamento configurado
- ✅ Layout responsivo
- ⏳ Listagem de bolos (em desenvolvimento)
- ⏳ Filtros de produtos (em desenvolvimento)
- ⏳ Detalhes do produto (em desenvolvimento)
- ⏳ Sistema de avaliações (em desenvolvimento)
- ⏳ Carrinho de compras (em desenvolvimento)
- ⏳ Visualização de fotos (em desenvolvimento)
- ⏳ Mockup de dados (em desenvolvimento)

## Licença

MIT