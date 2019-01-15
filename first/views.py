from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
import datetime


# Create your views here.
def index(request):
    template = loader.get_template('first/all/index/index.html')
    # render function is html code extract
    return HttpResponse(template.render())


def attended(request):
    template = loader.get_template('first/all/index/attended.html')
    # render function is html code extract
    return HttpResponse(template.render())
