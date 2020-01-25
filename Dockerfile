FROM node:12.10-alpine
RUN apk add speedtest-cli python

COPY packages/wifi-mon-server/speedtest /etc/cron.d/
RUN chmod 0644 /etc/cron.d/speedtest
RUN crontab /etc/cron.d/speedtest
RUN touch /var/log/cron.log
RUN speedtest-cli --csv-header > /speed.csv

COPY packages /packages
COPY package.json lerna.json /

RUN npm install -g lerna
RUN lerna exec npm i && lerna run build
# RUN cd packages/wifi-mon-ui && npm run-script build

CMD crond && npm start