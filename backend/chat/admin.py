from django.contrib import admin
from .models import Chatroom, Message, Request

admin.site.register(Chatroom)
admin.site.register(Message)
admin.site.register(Request)