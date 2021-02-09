import express from 'express';
import languagesRoutes from './routes/languages.js';
import projectsRoutes from './routes/projects.js';
import aestheticsRoutes from './routes/aesthetics.js';
import cors from 'cors';

const app = express();
const PORT = 5000;

 
app.use(cors());

app.use('/languages', languagesRoutes);
app.use('/projects', projectsRoutes);
app.use('/aesthetics', aestheticsRoutes);

app.get('/', (req, res) => res.send({ message: "We did it!" }));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))

