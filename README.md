# ECOM — Postos de Combustíveis

Aplicativo mobile desenvolvido com **React Native** e **Expo** como projeto de TCC. O objetivo é ajudar o usuário a encontrar postos de combustível próximos, comparar preços e salvar os postos de que mais gosta.

Esta é a versão mobile do projeto. A versão web, feita depois para treinar outras ferramentas, está em [Ecom-Web](https://github.com/JuhhSobrinho/Ecom-Web).

## Funcionalidades

- **Mapa (Local):** mostra os postos em um mapa interativo, usando `react-native-maps`
- **Lista de postos (Posto):** lista os postos com endereço e preço
- **Salvos:** guarda os postos favoritos do usuário
- **Mais:** área de configurações, com:
  - Edição de perfil
  - Segurança
  - Notificações
  - Idioma (português e inglês, com `i18next`)
  - Ajuda e Sobre
- **Cartão:** tela de card com informações do posto

## Tecnologias

- React Native 0.69 e Expo 44
- React Navigation (bottom tabs e stack)
- react-native-maps
- i18next e react-i18next (internacionalização)
- expo-print, expo-file-system e expo-sms
- nodemailer

## Estrutura

```
TCC/
├── App.js                  # Stack de navegação e telas de configuração
├── router.js               # Abas inferiores (Local, Posto, Salvo, Mais)
├── assets/                 # Ícones e imagens
├── MeuComponente/          # Componentes reutilizáveis (Card, MapPes, Pesquisa, ModalFilter)
└── src/
    ├── pages/              # Telas: Local, posto, salvo, Mais
    │   └── Configuracao/   # Config, EditPerfil, Idioma, Notif, Segura, Ajuda, Sobre
    └── utils/              # i18n.js, pt.json e en.json
```

## Como executar

Pré-requisitos: Node.js e o aplicativo **Expo Go** no celular (ou um emulador Android/iOS).

```bash
npm install
npm start
```

Depois, leia o QR code com o Expo Go. Para o emulador, use `npm run android` ou `npm run ios`.

## Observações

- A origem dos dados dos postos (API ou banco) não está documentada no código principal. Confirme antes de usar (a confirmar).
- Algumas dependências são de versões antigas do Expo 44, então pode ser preciso ajustes para rodar em versões mais recentes do Expo.
- O projeto foi feito como estudo e não está em produção.

## Autor

Desenvolvido por [Juliano Sobrinho](https://github.com/JuhhSobrinho).
