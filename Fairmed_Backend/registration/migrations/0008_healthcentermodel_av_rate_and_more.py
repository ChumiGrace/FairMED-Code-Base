# Generated by Django 4.2.7 on 2023-12-29 12:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0007_physicianmodel_av_rate_physicianmodel_recent_reviews'),
    ]

    operations = [
        migrations.AddField(
            model_name='healthcentermodel',
            name='av_rate',
            field=models.DecimalField(decimal_places=4, max_digits=5, null=True),
        ),
        migrations.AddField(
            model_name='healthcentermodel',
            name='recent_reviews',
            field=models.TextField(blank=True, null=True),
        ),
    ]