from django.db import models
from django.contrib.auth.models import User


class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    current = models.CharField(max_length=100, null=True)
    company = models.CharField(max_length=100, null=True)
    card = models.CharField(max_length=100, null=True)
    exp = models.CharField(max_length=100, null=True)
    cvv = models.CharField(max_length=100, null=True)
    zip = models.CharField(max_length=100, null=True)
    password = models.CharField(max_length=100, null=True)
    admin = models.BooleanField(default=False)
    owner = models.ForeignKey(
        User, related_name="leads", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)


