# Projeto: TechQuiz

![img.png](img.png "Screenshot do projeto")

Acesso: https://techquizv2-r7rainv4u-pizzuttas-projects.vercel.app/

### Desenvolvedores

Bruna Caetano da Veiga e Vitória Regina Pizzutti Moraes | Sistemas de Informação

### Nosso produto

Uma das formas mais básicas de avaliar o seu aprendizado em alguma área é por meio de perguntas e respostas. É nesse contexto
que surge o TechQuiz, um sistema que permite validar seus conhecimentos em tecnologia por meio de um quiz.

Nesta aplicação, o usuário poderá selecionar tanto a categoria a categoria quanto a dificuldade das questões a serem
respondidas. Ao concluir o quiz, o usuário recebe um feedback sobre seu desempenho, além de ter a opção de refazer o quiz ou
avançar para níveis mais desafiadores de perguntas.

#### API escolhida

Para desenvolver este projeto, foi utilizada a [QuizAPI](https://quizapi.io/), uma API REST que provê questões da área de tecnologia.

A autenticação para ter acesso aos resultados dos _endpoints_ é feita passando uma _key_ como parâmetro por meio de _query string_.

O principal _endpoint_ dessa API é ``/api/v1/questions``, que retorna as questões em si. Através dele, é possível filtrar as
questões também utilizando parâmetros em _query string_.

As possibilidades de filtro são: categoria, dificuldade, tags e limite do número de questões.

Também será utilizado o _endpoint_ ``/api/v1/categories`` para receber todas as categorias de questões disponíveis na API.

### Desenvolvimento

Antes de iniciar o projeto, foi decidido que o desenvolvimento seria feito utilizando o framework Angular, pois as duas desenvolvedoras 
tinham familiaridade com a tecnologia e enxergaram uma oportunidade de aplicar seus conhecimentos.

Inicialmente, havia sido escolhida a biblioteca Angular Material para facilitar a estilização da aplicação, pois ela oferece diversos 
componentes prontos. Entretanto, encontrou-se dificuldade em algumas questões, como por exemplo o sistema de Grid. Ao pesquisar sobre o 
assunto, descobriu-se que a implementação do Material Design para Angular não é ideal. Portanto, optou-se por substituir esta biblioteca.

Assim, passou-se a utilzar o Clarity Design System, que é altamente compatível com Angular e correspondia às expectativas das desenvolvedoras. 
Esta escolha facilitou o desenvolvimento da aplicação.

Quanto às regras de negócio, optou-se por não utilizar as tags providas pela API, para facilitar a configuração do quiz. No entanto, 
encontrou-se dificuldade em tratar as questões que possuíam múltiplas respostas, pois sua validação seria mais complexa. Portanto, as questões 
da API foram filtradas pela aplicação para que somente fossem mostradas questões com resposta única.

#### Tecnologias

- HTML
- CSS
- Angular
- Clarity Design System

#### Ambiente de desenvolvimento

- WebStorm

#### Referências e créditos

- https://angular.dev/
- https://clarity.design/
- https://developer.mozilla.org/

---
Projeto entregue para a disciplina de [Desenvolvimento de Software para a Web](http://github.com/andreainfufsm/elc1090-2024a) em 2024a
