# Reglas del recreo

![Reglas v1](./docs/render-reglas-01.jpg)

**Ordenador y pantalla con visualización de datos.**

El primero se encarga de generar y comunicar un set de atributos o patrón de comportamiento, las reglas del recreo, al resto de las instalaciones. Se ocupa también de almacenar sus registros de actividad en memoria. El display exterioriza este set de reglas.

Cada recreo implica un set de reglas nuevas, variaciones alimentadas por la memoria de recreos anteriores y pequeñas dosis de caos. Estos patrones son dispuestos en un servicio API para ser consumido por el resto de las estaciones, quienes actúan en consecuencia.
Estas son ideas tempranas para posibles sets de reglas: [duración, intensidad, tono, frecuencia, ritmo, color, forma, gravedad], o [agresividad, tristeza, furia, temor, alegría, desagrado, extrañamiento].

---

## Indice

- [Instrucciones](#instrucciones)
  - [Como montar el Servidor](#como-montar-el-servidor)
  - [Como montar el Cliente](#como-montar-el-cliente)
  - [Testing](#testing)
- [API](#api)
- [Flujo de trabajo](#flujo-de-trabajo)
- [Circuito](#circuito)
- [Hardware](#hardware)
- [Código](#código)
  - [Drivers](#drivers)
  - [Librerías](#librerías)
  - [Ejemplos](#ejemplos)
- [Bibliografía](#bibliografia)
- [Enlaces útiles](#enlaces-útiles)

---

## Instrucciones

"Reglas" es el cerebro. Se divide en 2 etapas, el servidor y el cliente.

La manera más sencilla para montar la arquitectura es utilizando [Docker](https://www.docker.com/).
Con este servicio se pueden montar todo en una sóla línea de comando.

1. Instalar e inicializar Docker
2. Ingresar desde la terminal a la carpeta del proyecto
3. Ejecutar: `docker-compose up --build`

#### Otros comandos útiles:

- `docker-machine ip`: Obtener IP de la máquina
- `docker-compose up -d`: Montar servidor en silencio
- `docker-compose exec server bash`: Ingresar a la consola del servidor
- `docker-compose down`: Bajar el servidor

### Como montar el Servidor

1. Ingresar desde la terminal a la carpeta `server`

### Como montar el Cliente

1. asd

### Testing

## API

**[Documentación API](https://colormono.com/recreo/api/reference/)**

### Servidor

Endpoints dispuestos por el servidor:

| Endpoint            | Verb | Description                                        |
| ------------------- | ---- | -------------------------------------------------- |
| `/v1/recreo`        | GET  | If set to true, the result will also include cats. |
| `/v1/recreo/estado` | GET  | If set to true, the result will also include cats. |
| `/v1/recreo/estado` | PUT  | If set to true, the result will also include cats. |

### Cliente

Endpoints consumidos por el cliente:

| Endpoint            | Verb | Description                                        |
| ------------------- | ---- | -------------------------------------------------- |
| `/v1/recreo`        | GET  | If set to true, the result will also include cats. |
| `/v1/recreo/estado` | GET  | If set to true, the result will also include cats. |
| `/v1/recreo/estado` | PUT  | If set to true, the result will also include cats. |

## Flujo de trabajo

## Circuito

## Código

Qué son los Websockets? (adaptar resumen desde acá https://youtu.be/lcJzVP20McM?t=3m4s)

- [Nombre](#examples/nombre) - Descripción
- [Nombre](#examples/nombre) - Descripción
- [Nombre](#examples/nombre) - Descripción

## Bibliografía

- Socket.IO Real-time Web Application Development, Rohit Rai. Packtpub, 2013.

## Enlaces útiles

- [RESTful API Designing guidelines](https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9)
- [Spotify Analysis in GO](https://github.com/zmb3/spotify/blob/master/audio_features.go)
- [Socket.IO](https://socket.io/)
- [Real Time Web App | React.js + Express + Socket.io](https://codeburst.io/isomorphic-web-app-react-js-express-socket-io-e2f03a469cd3)
- [React Material Components](https://material-ui-next.com/getting-started/usage/)
- [React Color Component](http://casesandberg.github.io/react-color/)
- https://www.dlighthouse.co/2017/09/docker-node-express-mongo.html
- https://medium.com/statuscode/dockerising-a-node-js-and-mongodb-app-d22047e2806f
- https://codeburst.io/develop-create-react-app-with-docker-fb7fa3869ba

## Get All Kittens

Del análisis del track me voy a quedar con:

```json
"track": {
  "num_samples": 8149680,
  "duration": 369.6,
  "offset_seconds": 0,
  "window_seconds": 0,
  "analysis_sample_rate": 22050,
  "end_of_fade_in": 0.52807,
  "start_of_fade_out": 358.10975,
  "loudness": -6.836,
  "tempo": 95.261,
  "tempo_confidence": 0.398,
  "time_signature": 4,
  "time_signature_confidence": 0.948
},
```

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get()
```

```shell
curl "http://example.com/api/kittens"
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let kittens = api.kittens.get();
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "name": "Fluffums",
    "breed": "calico",
    "fluffiness": 6,
    "cuteness": 7
  },
  {
    "id": 2,
    "name": "Max",
    "breed": "unknown",
    "fluffiness": 5,
    "cuteness": 10
  }
]
```

This endpoint retrieves all kittens.

### HTTP Request

`GET http://example.com/api/kittens`

### Query Parameters

| Parameter    | Default | Description                                                                      |
| ------------ | ------- | -------------------------------------------------------------------------------- |
| include_cats | false   | If set to true, the result will also include cats.                               |
| available    | true    | If set to false, the result will include kittens that have already been adopted. |

<aside class="success">
Remember — a happy kitten is an authenticated kitten!
</aside>

## Get a Specific Kitten

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get(2)
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get(2)
```

```shell
curl "http://example.com/api/kittens/2"
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let max = api.kittens.get(2);
```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "name": "Max",
  "breed": "unknown",
  "fluffiness": 5,
  "cuteness": 10
}
```

This endpoint retrieves a specific kitten.

<aside class="warning">Inside HTML code blocks like this one, you can't use Markdown, so use <code>&lt;code&gt;</code> blocks to denote code.</aside>

### HTTP Request

`GET http://example.com/kittens/<ID>`

### URL Parameters

| Parameter | Description                      |
| --------- | -------------------------------- |
| ID        | The ID of the kitten to retrieve |

## Delete a Specific Kitten

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.delete(2)
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.delete(2)
```

```shell
curl "http://example.com/api/kittens/2"
  -X DELETE
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let max = api.kittens.delete(2);
```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "deleted": ":("
}
```

This endpoint deletes a specific kitten.

### HTTP Request

`DELETE http://example.com/kittens/<ID>`

### URL Parameters

| Parameter | Description                    |
| --------- | ------------------------------ |
| ID        | The ID of the kitten to delete |
