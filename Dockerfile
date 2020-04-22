FROM timbru31/java-node:8-alpine-jre
COPY ./ ./source
WORKDIR ./source
RUN npm install
CMD [ "npm", "run", "test:insidedocker" ]