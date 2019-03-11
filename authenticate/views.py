from django.contrib.auth import authenticate
from django.http import *
# Create your views here.
from django.template import loader
from django.contrib.auth.forms import AuthenticationForm

from .form import LoginForm


def login(request):
    if request.method == 'GET':
        template = loader.get_template('login.html')
        form = LoginForm()
        if 'next' in request.GET:
            next = request.GET['next']
        else:
            next = ''
        return HttpResponse(template.render({'next': next, 'form': form}))
    else:
        # check and validate form

        form1 = LoginForm(request.POST)
        # if valid
        if form1.is_valid():
            # authenciate user

            user = authenticate(username=request.POST['username'], password=request.POST['password'])
            if user:
                # if user can pass
                return HttpResponse('http://www.google.com')
            else:
                # user fail
                return HttpResponse('http://www.google.com')
        else:
            # if form validation fail
            template = loader.get_template('login.html')
        return HttpResponse(template.render({'form': form1}))
