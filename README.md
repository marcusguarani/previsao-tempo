# 🌤️ Previsão do Tempo

Aplicação web para consulta da previsão do tempo em tempo real, por cidade, exibindo temperatura, descrição do clima, umidade e velocidade do vento.

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-blue)

## 📸 Demonstração

<!-- Adicione aqui um print ou GIF do projeto funcionando -->
<!-- ![preview](./preview.png) -->

## ✨ Funcionalidades

- 🔎 Busca de clima por nome de cidade
- 🌡️ Exibição da temperatura atual em °C
- ☁️ Descrição textual e ícone das condições climáticas
- 🏳️ Exibição da bandeira do país da cidade pesquisada
- 💧 Percentual de umidade do ar
- 💨 Velocidade do vento (km/h)
- 📱 Layout responsivo (desktop e mobile)
- ⌨️ Busca também pela tecla Enter, além do botão

## 🛠️ Tecnologias utilizadas

- **HTML5**
- **CSS3** (Flexbox, Media Queries para responsividade)
- **JavaScript** (Vanilla JS, `fetch` assíncrono com `async/await`)
- [**OpenWeatherMap API**](https://openweathermap.org/api) — dados de clima
- [**FlagsAPI**](https://flagsapi.com/) — bandeiras dos países
- [**Font Awesome**](https://fontawesome.com/) — ícones
- [**Google Fonts**](https://fonts.google.com/) — fonte Ubuntu

## 🚀 Como executar o projeto

Por ser um projeto front-end puro (sem build), basta:

1. Clonar o repositório:
   ```bash
   git clone https://github.com/marcusguarani/previsao-tempo.git
   ```
2. Gerar sua própria chave de API gratuita (veja passo a passo abaixo).
3. Colar sua chave no arquivo `js/scripts.js` (instruções abaixo).
4. Abrir o arquivo `index.html` diretamente no navegador — ou, se preferir recarregamento automático, usar a extensão **Live Server** no VS Code.

## 🔑 Gerando e configurando sua chave de API

Este projeto consome a API gratuita da OpenWeatherMap. Cada pessoa que for rodar o projeto precisa da sua própria chave:

1. Crie uma conta gratuita em [openweathermap.org/users/sign_up](https://home.openweathermap.org/users/sign_up) (não pede cartão de crédito).
2. Faça login e acesse [home.openweathermap.org/api_keys](https://home.openweathermap.org/api_keys).
3. Copie a chave "Default" que já vem criada (ou gere uma nova).
4. Chaves novas podem levar até 2 horas para ativar.
5. Abra o arquivo `js/scripts.js` e substitua o valor da constante `apiKey`:
   ```js
   const apiKey = "SUA_CHAVE_AQUI";
   ```

> ⚠️ **Nota de segurança:** por ser uma aplicação 100% front-end (sem backend), essa chave fica visível no código-fonte enviado ao navegador — isso é uma limitação natural de projetos client-side simples como este. Por isso o repositório é publicado **sem** uma chave real funcional; use a sua própria, gratuita, para testar.

## 📁 Estrutura do projeto

```
previsao-tempo/
├── index.html
├── favicon-clima.png
├── bg.png
├── css/
│   └── style.css
└── js/
    └── scripts.js
```

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, estudar e modificar.

## 👤 Autor

[![GitHub](https://img.shields.io/badge/-181717?style=flat&logo=github&logoColor=white)](https://github.com/marcusguarani)
[![LinkedIn](https://img.shields.io/badge/-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marcusguarani)
[![Portfólio](https://img.shields.io/badge/-000000?style=flat&logo=googlechrome&logoColor=white)](https://marcusguarani.com.br)
