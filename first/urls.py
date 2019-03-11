from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^dashboard', views.index, name='index'),
    url(r'^attended$', views.attended, name='attended'),
    url(r'^attended/add$', views.add, name='add'),
]
