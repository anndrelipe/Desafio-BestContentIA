# Etapa de Desafio - Estágio em Desenvolvimento de Software da Best Content AI

Este projeto é dedicado para cumprir o desafio proposto pelo edital da Etapa de Desafio da Best Content AI para a vaga de Estagiário em engenharia de software. 

# Objetivo do Desafio:

Conforme o edital,
"Este desafio é projetado para te tirar da zona de conforto e avaliar suas habilidades em diversas áreas, como qualidade de código, criatividade, resolução de problemas, senso de design, versatilidade, adaptabilidade,
pensamento crítico, assertividade na pesquisa, capacidade de aprendizado e aplicação de metodologias."

# Tecnologias obrigatórias para a realização do desafio:

● API em NodeJs com ExpressJs ;

● Front-end em VueJs (NuxtJs Opcional) ;

● Firebase (para armazenamento de imagens e banco de dados).

# Contexto do desafio:

"Imagine que você precisa desenvolver uma funcionalidade de um chatbot com inteligência artificial, onde os usuários poderão realizar perguntas sobre os esportes das olimpíadas, e esse chat sempre responde com texto e imagem. Além desse chatbot, você precisará desenvolver uma tela administrativa para que seja possível adicionar imagens com palavras-chaves, essa tela será gerenciada pelos administradores do sistema."

Informações Relevantes:

● Esse chat é exclusivo para o assunto “Esportes das Olimpíadas”.

● Os usuários costumam perguntar sobre cada esporte das olimpíadas, isso implica em você precisar garantir que imagens de cada esporte sejam cadastradas pelo formulário administrativo, e serão retornadas pelo chat quando solicitado algo referente a um esporte.

● Você precisa hospedar sua aplicação e ser possível que o gestor da vaga consiga acessar online sua criação. Você pode usar o serviço https://render.com para hospedar seu back-end e front-end (fique à vontade para utilizar outro serviço).

# Requisitos Chatbot Front-end:

● Precisa ter um visual bonito e fácil de mexer, pensando no usuário final.

● Precisa estar em modo tela cheia e ser responsivo para boa visualização no celular.

● Precisa ter algum seletor de idioma, onde a resposta dos textos virão no idioma selecionado (adicione quantos idiomas quiser).

# Requisitos tela do Admin Front-end:

● Precisa ter um formulário com os seguintes campos:

	○ Input de upload ou para inserir link de imagem (pode ser de qualquer fonte de imagens, como google, unsplash…).
	○ Input para adicionar keywords relacionadas a essa imagem (essas keywords servirão para ajudar a encontrar as imagens solicitadas pelos clientes)
	

● Ao clicar no botão de enviar, sua api precisa salvar a imagem no
storage do firebase e em seguida no firestore juntamente com as
keywords.

# Requisitos Back-end:

● Toda a lógica de negócio precisa estar no backend e apenas usar no front-end a integração com a sua própria API do back-end criada em NodeJs.

● Utilize o firebase (Storage) para armazenamento de imagens do formulário administrativo, e também como banco de dados para salvar informações relacionadas às imagens (Firestore)

● Realize a integração com a Openai, utilizando o modelo para gerar textos para as legendas “gpt-4o-mini” ou “gpt-3.5-turbo” (fique à vontade para utilizar outro serviço).

● Realize a integração com a classe que você utilizou para receber as imagens usadas pelos administradores na tela com o formulário administrativo, identifique qual imagem é melhor para o esporte solicitado no chat baseada nas imagens que você fez upload dando match com as keywords.

# Dicas:

● Crie uma conta no site da openai (ou qualquer IA generativa q achar necessário), se você precisar de créditos da Openai para continuar realizando seus testes, entre em contato com o gestor da vaga para receber uma chave de api.

● Em casos de dúvidas relacionada a algo que ficou confuso na explicação do contexto do desafio, entre em contato com o gestor da vaga (não será respondido dúvidas relacionadas a assuntos que poderão lhe beneficiar no teste).

● Fique à vontade para ser criativo e utilizar qualquer integração com terceiros ou melhorias que não foram solicitadas explicitamente.
