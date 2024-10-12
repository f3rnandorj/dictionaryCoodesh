# Dictionary Coodesh 📱
Este é um projeto desenvolvido como parte de um desafio da **Coodesh**. O aplicativo oferece funcionalidades para buscas, visualização de definições de palavras e pronuncia de palavras. Utiliza uma arquitetura bem organizada, baseada nos princípios do **DDD (Domain-Driven Design)**, com a separação clara de camadas de responsabilidade e conceitos de clean code.


https://github.com/user-attachments/assets/a2d321cb-b055-429f-88f8-d56c7766480e


Video em x1.1 e qualidade 480p


## **Linguagem | Tecnologias | Frameworks**
● Typescript <br/>
● React Native <br/>
● React Navigation + material top tabs <br/>
● Shopify/restyle <br/>
● Tanstack react-query <br/>
● Axios <br/>
● React Native mmkv <br/>
● React Native Reanimated <br/>
● React Native tts <br/>
● Jest <br/>
● React Native Testing Library <br/>
● React Test Render <br/>
● Context API <br/>

## **Passos para clonar e executar o projeto**
1. Execute o seguinte comando no terminal para clonar o repositório em sua máquina local:
```bash
git clone https://github.com/f3rnandorj/dictionaryCoodesh.git
```
2. Navegue até o diretório do projeto e execute o comando para instalar todas as dependências:
```bash
cd dictionaryCoodesh
yarn install
```
3. Após instalar as dependências, você pode rodar o aplicativo no seu emulador ou dispositivo físico com o seguinte comando:
```bash
yarn android
```
Ou, para iOS:
```bash
yarn ios
```
Nota: Certifique-se de ter o ambiente de desenvolvimento React Native corretamente configurado em sua máquina.

## **Arquitetura do Projeto**
Este projeto segue uma arquitetura baseada em DDD (Domain-Driven Design), separando as responsabilidades em camadas distintas, o que facilita a manutenção, evolução e escalabilidade da aplicação.

### **Camadas de Responsabilidade**
API Layer (Camada de API), camada responsável pela comunicação com APIs externas. Aqui, são feitas as requisições HTTP e manipuladas as respostas que alimentam o restante do sistema.

Service Layer (Camada de Serviços), esta camada contém a lógica de negócios intermediária. É responsável por conectar a API com a lógica de aplicação e transformar os dados conforme necessário.

Adapter Layer (Camada de Adaptadores), daptadores que garantem que os dados obtidos das APIs ou outros serviços estão no formato correto para serem utilizados pela aplicação.

Use Cases, Esta camada define os casos de uso da aplicação, encapsulando toda a lógica de fetching e específica as regras de negócios de alto nível.

Interface Layer (Camada de Interface), a camada de interface inclui toda a lógica de UI (interface do usuário), composta por componentes React Native e navegação entre telas.

## **Testes Automatizados**
O projeto possui um setup para testes unitarios, ferramentas utilizadas:

Jest: Utilizado como framework principal para a execução dos testes. <br/>
react-testing-library: Empregado para testar a UI e a interação do usuário com os componentes. <br/>

Para rodar os testes, utilize o seguinte comando:
```bash
yarn test
```
### **Setup de Testes**
O arquivo jest.config.ts está configurado para lidar com TypeScript, nesse arquivo temos as configurações basicas do Jest.

No caminho src/test temos outros dois arquivos de setup, são eles: 

- jestSetup.ts, guarda os mocks de metodos de modulos da aplicação. 

- test-utils.ts, contem provedores que envolvem todos os testes com os principais provedores e contextos necessários para que os componentes possam funcionar corretamente durante os testes. bem como tambem funções customizadas que utilizam esses provedores como wrapper e retornam os metodos render e renderHook.

## **Planejamento e tomada de decisões**
1. Criação do projeto e dos componentes basicos.
2. Instalação e configuração React Navigation.
3. Instalação e configuraçao Material Top Tab, para criação das tabs de navegação.
4. Instalação e configuração do React Query para lidar com fetching e cash das chamadas a API.
5. Criação de camadas de domínio do dicionário (interface, API, service, adapter and use cases).
6. Criação de camadas de serviço modal (interface, context, provider, component).
7. Criação da tela de detalhes usada com o serviço de modal (WorkDetails).
8. Criação de camadas de WordDetails (interface, API, service, adapter and use cases).
9. Tratar possíveis erros com definições inexistentes para uma palavra específica.
10. Criação do serviço de armazenamento local usando MMKV.
11. Criação do serviço de palavras favoritas utilizando a context API e o MMKV.
12. Criação da tela de Favoritos.
13. Criação do serviço de histórico de palavras visualizadas utilizando a context API e o MMKV.
14. Criação da tela HistoryScreen.
15. Criar barra de progresso animada.
16. Implementação de scroll para o topo nas listas.
17. Criação da lógica para botões de ir adiante e voltar na tela WordDetails.
18. Criação do componente Input para permitir buscas na lista principal.
19. Implementação de testes unitários para errorUtils.
20. Instalação e configuração a biblioteca de testes para componentes do React Native.
21. Implementação de testes para o componente TextInput e Button.
22. Criação de testes para o hook useAppSafeArea.
23. Optmizar a animação da barra de progresso ao reproduzir palavra.


> This is a challenge by [Coodesh](https://coodesh.com/)
