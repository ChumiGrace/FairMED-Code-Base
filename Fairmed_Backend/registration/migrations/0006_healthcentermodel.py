# Generated by Django 4.2.7 on 2023-12-27 07:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0005_alter_physicianmodel_phone'),
    ]

    operations = [
        migrations.CreateModel(
            name='HealthCenterModel',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=150)),
                ('is_active', models.BooleanField(default=False)),
                ('is_staff', models.BooleanField(default=False)),
            ],
        ),
    ]