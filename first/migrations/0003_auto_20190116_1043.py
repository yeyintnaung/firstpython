# Generated by Django 2.1.5 on 2019-01-16 04:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('first', '0002_auto_20190116_1042'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attended',
            name='user_id',
            field=models.CharField(max_length=222),
        ),
    ]
