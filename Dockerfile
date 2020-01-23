FROM alpine
RUN apk add npm speedtest-cli python

COPY speedtest /etc/cron.d/
RUN chmod 0644 /etc/cron.d/speedtest
RUN crontab /etc/cron.d/speedtest
RUN touch /var/log/cron.log
RUN speedtest-cli --csv-header > /speed.csv

COPY . /

RUN npm install

CMD crond && npm start