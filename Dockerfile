FROM node:14.17.6-buster-slim

ENV REACT_APP_BACKEND_URI $REACT_APP_BACKEND_URI
ENV REACT_APP_PORT $REACT_APP_PORT

WORKDIR /app
COPY . /app/
RUN chmod +x /app/docker-entrypoint.sh
ENTRYPOINT ["/app/docker-entrypoint.sh"]