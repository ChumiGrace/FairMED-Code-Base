# Generated by Django 4.2.7 on 2024-01-01 13:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rate_and_review', '0006_alter_healthcenterratesandreviews_rate'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='physicianaveragerate',
            name='physicianId',
        ),
        migrations.DeleteModel(
            name='HealthCenterAverageRate',
        ),
        migrations.DeleteModel(
            name='PhysicianAverageRate',
        ),
    ]