# GeoQuiz Neón 🌎

Un juego de preguntas y respuestas sobre geografía con estética gamer neón. Pon a prueba tus conocimientos sobre países, capitales, banderas y fronteras.

## 🎮 Características

- Tres tipos de preguntas: capitales, banderas y países limítrofes
- Sistema de puntuación basado en la dificultad de las preguntas
- Temporizador para cada pregunta y para el juego completo
- Ranking de los 20 mejores jugadores
- Interfaz con estilo neón futurista y responsiva

## 🛠️ Tecnologías utilizadas

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: HTML5, CSS3, JavaScript vanilla
- **Datos**: API REST Countries (https://restcountries.com)

## 📋 Requisitos previos

- Node.js (v14 o superior)
- MongoDB (local o en la nube)

## 🚀 Instalación y ejecución

1. Clona este repositorio:
   \`\`\`
   git clone https://github.com/tu-usuario/geoquiz-neon.git
   cd geoquiz-neon
   \`\`\`

2. Instala las dependencias:
   \`\`\`
   npm install
   \`\`\`

3. Configura la base de datos:
   - Crea una base de datos MongoDB local o en la nube
   - Opcionalmente, crea un archivo `.env` en la raíz del proyecto con la variable `MONGODB_URI` para conectar a tu base de datos

4. Inicia la aplicación:
   \`\`\`
   npm start
   \`\`\`

5. Abre tu navegador y visita `http://localhost:3000`

## 🎯 Cómo jugar

1. Ingresa tu nombre en la pantalla de inicio
2. Responde a 10 preguntas aleatorias sobre geografía
3. Cada tipo de pregunta tiene una puntuación diferente:
   - Capitales: 3 puntos
   - Banderas: 5 puntos
   - Países limítrofes: 3 puntos
4. Al finalizar, verás tus resultados y podrás consultar el ranking

## 📝 Estructura del proyecto

\`\`\`
/src
  /controllers      # Controladores para manejar las peticiones
  /models           # Modelos de datos para MongoDB
  /public           # Archivos estáticos (HTML, CSS, JS, imágenes)
  /routes           # Rutas de la API
  app.js            # Punto de entrada de la aplicación
\`\`\`

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes, por favor abre primero un issue para discutir lo que te gustaría cambiar.

