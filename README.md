API de Check-in em Eventos
Esta API RESTful foi desenvolvida para gerenciar eventos e participantes, permitindo realizar operações de CRUD (Create, Read, Update, Delete) e registrar check-in em eventos.
Projeto desenvolvido como parte da avaliação da disciplina Desenvolvimento Web.

Tecnologias Utilizadas

Node.js

Express.js

MySQL

mysql2 (connection pool)

Dotenv (variáveis de ambiente)

Estrutura do Projeto

src/

config/db.js

controllers/EventosController.js

controllers/ParticipantesController.js

routes/eventosRoutes.js

routes/participantesRoutes.js

server.js

Arquivos principais na raiz:

.env

package.json

Banco de Dados – Estrutura

Tabela: eventos

id: INT, chave primária, auto incremento

nome: VARCHAR(255), obrigatório

local: VARCHAR(255)

data: DATE, obrigatório

Tabela: participantes

id: INT, chave primária, auto incremento

nome: VARCHAR(255), obrigatório

horario_checkin: DATETIME, padrão CURRENT_TIMESTAMP

evento_id: INT, chave estrangeira referenciando eventos.id

Relação: 1 evento possui N participantes.

Script SQL do Banco de Dados (para criação da estrutura)

CREATE DATABASE event_checkin;
USE event_checkin;

CREATE TABLE eventos (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
local VARCHAR(255),
data DATE NOT NULL
);

CREATE TABLE participantes (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
horario_checkin DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
evento_id INT NOT NULL,
FOREIGN KEY (evento_id) REFERENCES eventos(id)
);

Arquivo .env

(Nota: incluído apenas para fins acadêmicos conforme solicitado pelo professor. Não deve ser enviado em projetos reais.)

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=teste123
DB_DATABASE=event_checkin
DB_PORT=3306

Como Executar o Projeto

Instale as dependências:
npm install

Inicie o servidor:
npm start

A API ficará disponível em:
http://localhost:3000

Endpoints da API

Eventos

GET /eventos — lista todos os eventos

GET /eventos/:id — busca um evento por ID

POST /eventos — cria um novo evento
Corpo JSON esperado:
nome, local, data

PUT /eventos/:id — atualiza um evento existente

DELETE /eventos/:id — remove um evento

Participantes

GET /participantes — lista todos os participantes

GET /participantes/evento/:eventoId — lista participantes de um evento específico

POST /participantes — cria um participante (check-in)
Corpo JSON esperado:
nome, evento_id

PUT /participantes/:id — atualiza participante

DELETE /participantes/:id — remove participante

Conclusão
A API foi implementada com sucesso, seguindo os requisitos da disciplina.
Principais pontos concluídos:

Estrutura organizada (MVC)

Banco relacional MySQL

CRUD completo de eventos e participantes

Rotas bem organizadas

Variáveis de ambiente funcionando

Documentação completa para avaliação

Autor
Desenvolvido por João Pedro para a disciplina de Desenvolvimento Web.
