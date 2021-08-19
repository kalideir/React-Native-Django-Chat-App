from django.urls import include, path
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users', include('users.urls'), 'users'),
    path('api/chatrooms', include('users.urls'), 'users'),
]

print(urlpatterns) 