FROM nginx
ADD dist /sites/demo/
COPY nginx.conf /etc/nginx/nginx.conf