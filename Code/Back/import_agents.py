import csv
import os
import django

# Setting Django envitonment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ha1.settings')
django.setup()

from api.models import Agent

with open('agents_with_website.csv', newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        Agent.objects.create(
            marn=row['MARN'],
            full_name=row['Full_name'],
            experience_years=int(row['Experience_years']),
            charge=row['Charge'],
            visa_type=row['Visa_type'],
            booking_preference=row['Booking_preference'],
            location=row['Location'],
            success_rate=row['Success_rate'],
            language=row['Language'],
            employment_type=row['Employment_type'],
            google_rating=float(row['Google_rating']),
            availability=row['Availability'],
            website=row['Website'],
        )

<<<<<<< HEAD
print("✅ 数据导入完成")
=======
print("IMPORT FINISHED")
>>>>>>> 963f0b79ae6f620b45255fcbec639c051a0cae2c
