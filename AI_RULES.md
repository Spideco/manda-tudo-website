# Regras do Editor AI para Manda Tudo Distribuidora

Este documento descreve a pilha tecnológica e as convenções de codificação a serem seguidas pelo editor de IA (Dyad) ao modificar ou estender o aplicativo.

## 1. Visão Geral da Pilha Tecnológica

O aplicativo é um site institucional moderno e responsivo, construído com as seguintes tecnologias:

*   **Framework:** React (utilizando Vite).
*   **Linguagem:** TypeScript.
*   **Roteamento:** React Router DOM (v6).
*   **Estilização:** Tailwind CSS (abordagem utility-first).
*   **Componentes UI:** shadcn/ui (construído sobre primitivas Radix UI).
*   **Ícones:** `lucide-react`.
*   **Gerenciamento de Estado/Dados:** `@tanstack/react-query`.
*   **Formulários:** `react-hook-form` com `zod` para validação.
*   **Notificações:** `sonner` e shadcn `toast`.

## 2. Diretrizes de Uso de Bibliotecas

Para manter a consistência e a qualidade, siga estas regras específicas de biblioteca:

*   **Componentes UI:** Sempre utilize componentes de `src/components/ui` (shadcn/ui) ou crie novos componentes em `src/components/` usando Tailwind CSS. Não introduza novas bibliotecas de UI externas.
*   **Estilização:** Toda a estilização deve ser feita usando classes do Tailwind CSS. Garanta que os designs sejam responsivos por padrão.
*   **Ícones:** Utilize ícones exclusivamente do pacote `lucide-react`.
*   **Formulários:** Implemente todos os formulários usando `react-hook-form` e valide as entradas usando esquemas `zod`.
*   **Toasts/Notificações:** Use o componente `sonner` (aliado como `Sonner` em `App.tsx`) para notificações gerais de sucesso/erro.
*   **Navegação:** Use componentes do `react-router-dom` (`Link`, `useLocation`, `Routes`, `Route`).

## 3. Estrutura e Convenções de Código

*   **Estrutura de Arquivos:**
    *   Páginas devem ir para `src/pages/`.
    *   Componentes reutilizáveis devem ir para `src/components/`.
    *   Hooks devem ir para `src/hooks/`.
    *   Utilitários devem ir para `src/lib/`.
*   **Idioma:** Mantenha o Português (pt-BR) para todo o texto voltado para o usuário, conforme estabelecido no código existente.