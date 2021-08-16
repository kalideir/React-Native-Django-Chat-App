from django.db import models
from django.db.models import (Model, TextField, DateTimeField, ForeignKey, ManyToManyField,
                              CASCADE)
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
# import custom User model
from users.models import User


class Chatroom(Model): # Chatroom == Group == one-to-one | on-to-many users
    name = TextField(max_length=150)
    users = ManyToManyField(User, on_delete=CASCADE, verbose_name='recipients', related_name='recipients')
    timestamp = DateTimeField('timestamp', auto_now_add=True, editable=False)

    def __str__(self):
        return str(self.id)


class Message(Model):
    user = ForeignKey(User, on_delete=CASCADE, verbose_name='user', related_name='from_user')
    chatroom = ForeignKey(User, on_delete=CASCADE, verbose_name='chatroom', related_name='chatroom')
    timestamp = DateTimeField('timestamp', auto_now_add=True, editable=False)
    body = TextField(max_length=2000)

    def __str__(self):
        return str(self.id)

    def characters(self):
        return len(self.body)

    def notify_ws_clients(self):
        """
        Inform client there is a new message.
        """
        notification = {
            'type': 'recieve_group_message',
            'message': '{}'.format(self.id)
        }

        channel_layer = get_channel_layer()
        print("user.id {}".format(self.user.id))
        print("user.id {}".format(self.recipient.id))

        async_to_sync(channel_layer.group_send)("{}".format(self.user.id), notification)
        async_to_sync(channel_layer.group_send)("{}".format(self.recipient.id), notification)

    def save(self, *args, **kwargs):
        """
        Trims white spaces, saves the message and notifies the recipient via WS
        if the message is new.
        """
        new = self.id
        self.body = self.body.strip()  # Trimming whitespaces from the body
        super(Message, self).save(*args, **kwargs)
        if new is None:
            self.notify_ws_clients()
