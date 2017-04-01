#!/usr/bin/env bash
rm docker/*.jar
cp build/libs/demo-0.0.1-SNAPSHOT.jar docker
cd docker
docker build -t $1 .
cd -
# docker run --name rsbk -d -p 8080:8080 alex/reactdemo
# docker commit -m "-p 8080:8080" -a "alex" rsbk apirusskiy/rsbk
# docker login -u apirusskiy
# docker push apirusskiy/rsbk
# docker pull apirusskiy/rsbk
# docker run apirusskiy/rsbk
#    or
# docker save -o <save image to path> <image name>
#    copy your image to a new system with regular file transfer tools such as cp or scp
#docker load -i <path to image tar file>
