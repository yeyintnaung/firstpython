from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^f', views.login, name='login'),
]
