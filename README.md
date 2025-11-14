# Manda Tudo - Website Institucional

Site institucional da **Manda Tudo**, empresa estabelecida em Taubaté-SP com duas unidades de atendimento.

## 🎯 Sobre o Projeto

Este é o website oficial da Manda Tudo, desenvolvido para apresentar a empresa, sua história, valores e facilitar o contato com clientes através de um formulário integrado com WhatsApp.

## ✨ Funcionalidades

- **Página Inicial**: Apresentação da empresa com design moderno e responsivo
- **Nossa História**: Timeline com a trajetória da empresa
- **Quem Somos**: Informações sobre missão, visão e valores
- **Contato**: 
  - Formulário de contato integrado com WhatsApp
  - Mapas interativos das duas unidades
  - Links diretos para Google Maps
  - Informações de contato e redes sociais

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org/) - Biblioteca JavaScript para interfaces
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [Vite](https://vitejs.dev/) - Build tool e dev server ultrarrápido
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [shadcn/ui](https://ui.shadcn.com/) - Componentes React reutilizáveis
- [React Router](https://reactrouter.com/) - Navegação entre páginas
- [Lucide React](https://lucide.dev/) - Biblioteca de ícones

## 📦 Instalação

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos para instalação

1. Clone o repositório:
```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

## 📁 Estrutura do Projeto

```
src/
├── assets/              # Imagens e recursos estáticos
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes da biblioteca shadcn/ui
│   ├── Header.tsx      # Cabeçalho do site
│   ├── Footer.tsx      # Rodapé do site
│   └── NavLink.tsx     # Links de navegação
├── hooks/              # Hooks customizados
├── lib/                # Utilitários e configurações
├── pages/              # Páginas da aplicação
│   ├── Index.tsx       # Página inicial
│   ├── NossaHistoria.tsx
│   ├── QuemSomos.tsx
│   ├── Contato.tsx
│   └── NotFound.tsx
├── App.tsx             # Componente principal
├── main.tsx            # Ponto de entrada
└── index.css           # Estilos globais e design system
```

## 🎨 Design System

O projeto utiliza um design system customizado baseado em:
- **Cores**: Paleta com laranja primário (#F2801F) e variações
- **Tipografia**: Sistema de fontes responsivo
- **Componentes**: Biblioteca shadcn/ui customizada
- **Animações**: Transições suaves e efeitos visuais

Todas as cores e estilos são gerenciados através de variáveis CSS no arquivo `src/index.css` e configurações do Tailwind em `tailwind.config.ts`.

## 📜 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o linter

## 📍 Nossas Unidades

### Loja 1 - Santa Luzia
Rua Bom Jardim, 139 - Santa Luzia  
Taubaté - SP

### Loja 2 - Centro
Rua Coronel João Afonso, 36 - Centro  
Taubaté - SP

## 📞 Contato

- **WhatsApp**: (12) 98130-5757
- **Website**: [mandatudo.com.br](https://mandatudo.com.br)

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é propriedade da **Manda Tudo**. Todos os direitos reservados.

---

Desenvolvido com ❤️ pela equipe Manda Tudo
