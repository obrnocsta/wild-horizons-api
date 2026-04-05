# The Wild Horizons API

Uma API em Node.js puro que fornece dados sobre os destinos de viagem mais intrigantes do mundo. Construída utilizando apenas o módulo HTTP nativo para o aprendizado de conceitos fundamentais de backend.

## 🚀 Primeiros Passos

### Instalação

```bash
npm install
```

### Executando o Servidor

```bash
npm start
```

O servidor será executado em `http://localhost:8000`

## 📍 Estrutura do Projeto

```
the-wild-horizons-api/
├── server.js          # Arquivo principal do servidor com manipuladores de rotas
├── package.json       # Metadados e scripts do projeto
├── data/
│   └── data.js        # Conjunto de dados dos destinos de viagem
├── database/
│   └── db.js          # Função de recuperação de dados
├── utils/
│   ├── sendJSON.js    # Utilitário para formatação de resposta
│   ├── filterByParams.js # Filtragem baseada em parâmetros de URL
│   └── filterByQueries.js # Filtragem baseada em query strings
```

## 🔗 Endpoints da API

### Listar Todos os Destinos (com filtragem)

**GET** `/api`

Filtre usando parâmetros de consulta (query parameters):
- `continent` - Filtrar por nome do continente
- `country` - Filtrar por nome do país  
- `is_open` - Filtrar por status de abertura (true/false)

Exemplo:
```
GET /api?continent=Asia&is_open=true
```

### Buscar Destino por Campo

**GET** `/api/{field}/{value}`

Filtre dinamicamente por qualquer campo do destino (nome, localização, continente, país, etc.)

Exemplos:
```
GET /api/name/The%20Wave
GET /api/country/New%20Zealand
GET /api/continent/Europe
```

**Exemplo de Resposta:**
```json
[
  {
    "name": "The Wave",
    "location": "Arizona",
    "country": "USA",
    "continent": "North America",
    "is_open": true,
    "uuid": "550e8400-e29b-41d4-a716-446655440007",
    "details": [
      {
        "fun_fact": "As formações de arenito parecem ondas congeladas no tempo."
      },
      {
        "description": "Um local de caminhada muito procurado na área de Coyote Buttes..."
      }
    ]
  }
]
```

### Tratamento de Erros

Rotas inválidas retornam 404:
```json
{
  "error": "not found",
  "message": "A rota solicitada não existe"
}
```

Resultados não encontrados:
```json
{
  "error": "not found",
  "message": "A requisição '{value}' em '{field}' não existe"
}
```

## 📚 Principais Conceitos Aprendidos

- **Módulo HTTP** - Módulo nativo `node:http` do Node
- **Criação de Servidor** - Criar e rodar servidores HTTP
- **Códigos de Status** - Retornar códigos de resposta HTTP apropriados (200, 404, etc.)
- **Headers (Cabeçalhos)** - Definir cabeçalhos de resposta como `Content-Type`
- **Manipulação de Request/Response** - Processar requisições recebidas e enviar respostas
- **Filtragem de Dados** - Múltiplas estratégias de filtragem (query params, URL params)
- **Parâmetros de Consulta** - Extração e análise de parâmetros de busca na URL

## 🎯 Próximos Passos (Stretch Goals)

- [x] Tratamento de erros para rotas inválidas
- [ ] Manipular requisições POST (autenticação a ser adicionada futuramente)
- [ ] Recursos avançados de filtragem
- [ ] Expandir rotas da API e dados
- [ ] Preparar para implantação em produção (deployment)

## 📦 Modelo de Dados

Cada objeto de destino contém:
- `name` - Nome do destino
- `location` - Localização específica/região
- `country` - Nome do país
- `continent` - Nome do continente
- `is_open` - Booleano indicando se está aberto a visitantes
- `uuid` - Identificador único
- `details` - Array com curiosidades e descrições

## 💡 Tecnologias

- **Node.js** - Ambiente de execução JavaScript
- **ES Modules** - Módulos JavaScript modernos
- **Módulo HTTP Nativo** - Sem dependências externas

---

Feito com ❤️ como um projeto de aprendizado
