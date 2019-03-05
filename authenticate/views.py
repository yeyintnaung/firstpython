from django.contrib.auth import authenticate
from django.http import HttpResponse
# Create your views here.
from django.template import loader

from authenticate.form import LoginForm


def login(request):
    if request.method == 'GET':
        template = loader.get_template('first/all/index/login.html')
        return HttpResponse(template.render())
    else:
        user = authenticate(username=request.POST['username'], password=request.POST['password'])
        formv = LoginForm(request.POST)
        template = loader.get_template('first/all/index/login.html')
        return HttpResponse('nice')
