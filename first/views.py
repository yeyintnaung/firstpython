from django.http import HttpResponse
from django.http import JsonResponse
from django.template import loader
from first.models import Attended
from datetime import datetime
from django.contrib.auth.models import User
import time


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
            user.att = ''
    return HttpResponse(template.render({'users': users, 'data_att': data_att}))


def add(request):
    # ts = json.loads(request.body).get('timestamp')
    # userid = json.loads(request.body).get('user_id')
    # readable = datetime.fromtimestamp(ts / 1000)
    ts = time.time()
    timestamp = datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S.%f')
    a = Attended.objects.create(start=timestamp, end=timestamp, status='fff')
    a.save()
    return JsonResponse({'time': timestamp})

