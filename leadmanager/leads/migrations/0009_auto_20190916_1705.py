# Generated by Django 2.0.7 on 2019-09-16 17:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0008_auto_20190914_0439'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lead',
            name='card',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='lead',
            name='company',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='lead',
            name='current',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='lead',
            name='cvv',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='lead',
            name='exp',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='lead',
            name='zip',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
