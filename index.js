const { spawn } = require('child_process');
spawn('chmod', ['+x', 'start.sh']);
spawn('bash', ['start.sh'], { stdio: 'inherit' });
