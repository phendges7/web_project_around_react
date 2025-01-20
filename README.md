# Documentação do Projeto Web ReactJS

## Visão Geral

Este projeto é uma aplicação web inicial em ReactJS que foca na implementação de popups e criação de cartões com imagens. O design segue a metodologia pixel-perfect, com base em layouts fornecidos pelo Figma, garantindo uma reprodução fiel do design.

### Componentes Incluídos:

- **Popup**: Um componente genérico reutilizável para popups.
- **ImagePopup**: Um componente especializado para exibir imagens em popups.

## Instalação

Para utilizar o projeto, clone o repositório e instale as dependências necessárias.

```bash
# Clone o repositório
git clone https://github.com/seuusuario/web-react-project.git

# Navegue até o diretório
cd web-react-project

# Instale as dependências
npm install
```

## Desenvolvimento

### Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm start
```

O projeto será iniciado em `localhost:3000`.

### Construindo para Produção

Para criar uma build para produção:

```bash
npm run build
```

Os arquivos otimizados serão colocados no diretório `build`.

## Estrutura de Pastas

```
node_modules/
public/
src/
  assets/
  blocks/
  components/
    Footer/
      Footer.jsx
    Header/
      Header.jsx
    Main/
      components/
        Card/
          Card.jsx
        ImagePopup/
          ImagePopup.jsx
        Popup/
          components/
            EditAvatar/
              EditAvatar.jsx
            EditProfile/
              EditProfile.jsx
            NewCard/
              NewCard.jsx
          Popup.jsx
  App.jsx
  images/
  vendor/
  index.css
  main.jsx
.gitignore
.eslintrc.js
index.html
package-lock.json
package.json
README.md
vite.config.js
```

## Descrição dos Arquivos

### Estrutura Principal

- **src/components/Footer/Footer.jsx**: Componente de rodapé do site.
- **src/components/Header/Header.jsx**: Componente de cabeçalho do site.
- **src/components/Main/components/Card/Card.jsx**: Componente para exibição de cartões.
- **src/components/Main/components/ImagePopup/ImagePopup.jsx**: Componente especializado para exibir imagens em popups.
- **src/components/Main/components/Popup/components/EditAvatar/EditAvatar.jsx**: Componente para edição de avatar.
- **src/components/Main/components/Popup/components/EditProfile/EditProfile.jsx**: Componente para edição de perfil.
- **src/components/Main/components/Popup/components/NewCard/NewCard.jsx**: Componente para criação de novos cartões.
- **src/components/Main/components/Popup/Popup.jsx**: Componente genérico de popup reutilizável.

### Outros Arquivos

- **App.jsx**: Componente raiz da aplicação.
- **index.css**: Estilos globais da aplicação.
- **main.jsx**: Ponto de entrada principal da aplicação.
- **images/**: Contém imagens utilizadas na aplicação.
- **vendor/**: Bibliotecas de terceiros.
- **.gitignore**: Arquivo para especificar arquivos a serem ignorados pelo Git.
- **.eslintrc.js**: Configuração do ESLint para padronização de código.
- **index.html**: Estrutura HTML principal.
- **package-lock.json** e **package.json**: Gerenciamento de dependências do projeto.
- **vite.config.js**: Configuração do Vite para a aplicação.

## Melhores Práticas

- **Componentes Reutilizáveis**: O `Popup` foi projetado para ser reutilizável e flexível, acomodando diferentes tipos de conteúdo.
- **Composição de Componentes**: O `ImagePopup` aproveita o `Popup` para assegurar consistência de estilo e comportamento.
- **Design Pixel-Perfect**: A aplicação segue fielmente os layouts do Figma, garantindo uma correspondência exata ao design.

## Funcionalidades do Projeto

### Fontes Locais

Integração da fonte "Inter" com diferentes estilos.

### Metadados HTML

Incorporação de metadados para SEO, como autor, palavras-chave e descrição.

### Responsividade

Adaptação a diferentes tamanhos de tela usando `@media` queries.

### Grid Layout

Utilização de layout em grid para organização eficiente do conteúdo.

## ReactJS

Esta aplicação utiliza React para criar componentes reutilizáveis e modulares, facilitando a manutenção e expansão do código.

## Dependências

Fonte Inter do [site oficial](https://rsms.me/inter/).

Link do website: [https://phendges7.github.io/web_project_around/](https://phendges7.github.io/web_project_around-react/)

## Autor

Pedro Henrique

## Meta

Este projeto demonstra o uso inicial do ReactJS com foco em popups e criação de cartões, seguindo boas práticas de desenvolvimento web e design pixel-perfect.

## Licença

Este projeto é de uso livre para fins educacionais e pessoais.
