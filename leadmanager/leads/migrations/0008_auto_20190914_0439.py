# Generated by Django 2.0.7 on 2019-09-14 04:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0007_delete_usermetadata'),
    ]

    operations = [
        migrations.AddField(
            model_name='lead',
            name='card',
            field=models.CharField(default=-1, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='lead',
            name='company',
            field=models.CharField(default=-1, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='lead',
            name='cvv',
            field=models.CharField(default=-1, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='lead',
            name='exp',
            field=models.CharField(default=-1, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='lead',
            name='zip',
            field=models.CharField(default=-1, max_length=100),
            preserve_default=False,
        ),
    ]
