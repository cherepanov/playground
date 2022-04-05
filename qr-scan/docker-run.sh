NAME=qr-scan

docker rm -f ${NAME}
docker rmi -f ${NAME}
docker build -t ${NAME} .
docker run -it -p 8083:80 --name ${NAME} ${NAME}
