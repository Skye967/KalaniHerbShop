# Generated by Django 4.0.4 on 2022-05-24 18:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_rename_shippingadress_shippingaddress'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, default='../static/images/sample.jpg', null=True, upload_to=''),
        ),
    ]
