from django.db import models


# Create your models here.


class User(models.Model):
    name = models.CharField(max_length=222)
    time = models.DateTimeField(max_length=6)
    abscent = models.CharField(max_length=222)
    created_at = models.DateTimeField(max_length=6)
    updated_at = models.DateTimeField(max_length=6)
