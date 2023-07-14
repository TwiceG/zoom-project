import { exec } from 'child_process';

exec('npm install --force', (error, stdout, stderr) => {
  if (!error) {
  console.log('Install completed successfully');
  }else {
    console.log(error);
    return;
  }
});

