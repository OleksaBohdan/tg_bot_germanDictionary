const app = require('./src/app');
const config = require('./config/config');

app.listen(config.PORT, () => {
  console.log(`Server started on port ${config.PORT}`);
});
