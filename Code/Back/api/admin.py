from django.contrib import admin

# Register your models here.
from import_export.admin import ExportMixin
from .models import Agent
from django.db import models
from .models import RecommendationRecord

@admin.register(Agent)
class AgentAdmin(ExportMixin, admin.ModelAdmin):
    list_display = ('full_name', 'location', 'experience_years', 'language', 'google_rating')
    search_fields = ('full_name', 'location')
    list_filter = ('location', 'language', 'employment_type')

@admin.register(RecommendationRecord)
class RecommendationRecordAdmin(admin.ModelAdmin):
    list_display = ('id', 'timestamp')
    ordering = ('-timestamp',)
    readonly_fields = ('input_data', 'result', 'timestamp')
