import express from 'express';
import sequelize from './config/database';
import adminRoutes from './routes/admin';
import userRoutes from './routes/user';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
sequelize.sync()
  .then(() => {
    console.log('Database synchronized successfully');
  })
  .catch(error => {
    console.error('Database synchronization failed:', error);
  });

app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

