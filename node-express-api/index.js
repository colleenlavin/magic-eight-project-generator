import express from 'express';
import languagesRoutes from './routes/languages.js';
import projectsRoutes from './routes/projects.js';
import aestheticsRoutes from './routes/aesthetics.js';
import prepositionsRoutes from './routes/prepositions.js';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 80;

 
app.use(cors());

app.use('/languages', languagesRoutes);
app.use('/projects', projectsRoutes);
app.use('/aesthetics', aestheticsRoutes);
app.use('/prepositions', prepositionsRoutes);

//app.get('/', (req, res) => res.send({ message: "We did it!" }));
app.use(express.static(path.join( 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join( 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))

