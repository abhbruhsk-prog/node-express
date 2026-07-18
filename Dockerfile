FROM node:latest

RUN mkdir /home/app

COPY ./express_api /home/app

WORKDIR /home/app

RUN <<EOF
npm init -y
npm install express --save
EOF

CMD node app.js