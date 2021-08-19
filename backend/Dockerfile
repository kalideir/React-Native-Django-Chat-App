FROM python:3.8.9-buster

ENV PYTHONUNBUFFERED 1

WORKDIR /home/user/app/

COPY requirements.txt ./requirements.txt
# pip install --upgrade pip setuptools wheel && \
RUN  pip install --no-cache-dir  --prefer-binary -r requirements.txt && \
    pip install psycopg2-binary

COPY . .

RUN python3 manage.py makemigrations && python3 manage.py migrate

USER root
