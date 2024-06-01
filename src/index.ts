/*import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});*/

//--------------------------------------------------------
import express from 'express';
import { connectDB } from './config/database';

const app = express();
const PORT = 3000;

connectDB(); // Conectar a MongoDB

app.get('/', (req, res) => {
  res.send('PRUEBA TÉCNICA APRENDIZ SENA BACKEND DEVELOPER');
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en el puerto ${PORT}`);
});


//----------------------------------------------------------------
/*
import express from 'express';
import { connectDB } from './config/database';
import authRoutes from './routes/auth';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);

// Ruta protegida de ejemplo
import { authMiddleware } from './middlewares/auth';

app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Acceso concedido' });
});

connectDB();

app.listen(PORT, () => {
  console.log(`servidor corriendo en puerto ${PORT}`);
});*/