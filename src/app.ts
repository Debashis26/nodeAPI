import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRout/authRoute';
const app = express();
const port =process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use('/', authRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
