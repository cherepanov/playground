NAME=pdf-serial

docker rm -f ${NAME}
docker rmi -f ${NAME}
docker build -t ${NAME} .
docker run -it -p 8084:80 --name ${NAME} ${NAME}
