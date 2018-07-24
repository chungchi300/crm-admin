# TARGET = an
FROM node:10
COPY . /home/node/app
WORKDIR /home/node/app
RUN ["npm","install"]
RUN ["npm","run","build"]
EXPOSE 8001
ENTRYPOINT [ "npm","run","serve" ]