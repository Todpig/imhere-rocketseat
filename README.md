# imhere

Aplicativo móvel para gerenciamento de presença em eventos.

## 📱 Requisitos

- Node.js 16+
- Expo CLI
- Um dispositivo físico ou emulador para testes

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Todpig/imhere-rocketseat.git
cd imhere-rocketseat
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

## ▶️ Executando o Projeto

Para iniciar o projeto, execute:

```bash
npx expo start
# ou
yarn expo start
```

## 📱 Conectando via Expo Go

1. Instale o aplicativo Expo Go no seu dispositivo:
   - [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)

2. Escaneie o QR Code que aparece no terminal ou na página web do Expo

3. O app será carregado no seu dispositivo

## 🔧 Resolvendo Problemas Comuns

### Metro Bundler não inicia
```bash
# Limpe o cache do Metro
npx expo start --clear
```

### Erro de dependências
```bash
# Remova node_modules e reinstale
rm -rf node_modules
npm install
```

### Expo Go não conecta
1. Verifique se seu dispositivo está na mesma rede Wi-Fi que seu computador
2. Desative temporariamente o firewall
3. Use a opção "Tunnel" no menu do Expo

### Erros de TypeScript
```bash
# Verifique os erros
npx tsc --noEmit
```

## 🛠️ Tecnologias Utilizadas

- React Native
- Expo
- TypeScript
