# Configuración para el Nginx del servidor host.
# El TLS termina aquí; el contenedor del portfolio escucha en localhost:38742.
server {
    listen 80;
    listen [::]:80;
    server_name jcanas.es www.jcanas.es;

    return 301 https://jcanas.es$request_uri;
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name www.jcanas.es;

    ssl_certificate /etc/letsencrypt/live/jcanas.es/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/jcanas.es/privkey.pem;

    return 301 https://jcanas.es$request_uri;
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name jcanas.es;

    ssl_certificate /etc/letsencrypt/live/jcanas.es/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/jcanas.es/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:38742;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
