from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from first.models import Attended
from django.contrib.auth.models import User
import datetime


# Create your views here.
def index(request):
    template = loader.get_template('first/all/index/index.html')
    # render function is html code extract
    return HttpResponse(template.render())


def attended(request):
    template = loader.get_template('first/all/index/attended.html')
    # render function is html code extract
    users = User.objects.all()
    data_att = {}
    for user in users:
        Att = Attended.objects
        if Att.count() != 0:
            user.att = Attended.objects.get(id=user.id)
        else:
            user.att = 'd'

    return HttpResponse(template.render({'users': users, 'data_att': data_att}))
