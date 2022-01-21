# Portfolio

Build the docker image
```bash
docker build . -t paracetamol56/portfolio
```

Run the docker container
```bash
docker run -p 8881:8881 -v .:/usr/src/app -d paracetamol56/portfolio
```

Or run with pm2
```bash
pm2 start index.js --name Portfolio --watch
```