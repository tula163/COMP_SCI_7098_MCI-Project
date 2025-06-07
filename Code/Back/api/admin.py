from django.contrib import admin

# Register your models here.
from import_export.admin import ExportMixin
from .models import Agent
from django.db import models
from .models import RecommendationRecord
import json

@admin.register(Agent)
class AgentAdmin(ExportMixin, admin.ModelAdmin):
    list_display = ('full_name', 'location', 'experience_years', 'language', 'google_rating')
    search_fields = ('full_name', 'location')
    list_filter = ('location', 'language', 'employment_type')

    
@admin.register(RecommendationRecord)
class RecommendationRecordAdmin(admin.ModelAdmin):
    list_display = ('id', 'timestamp', 'input_data_summary', 'result_summary')
    readonly_fields = ('input_data', 'result', 'pretty_result')

    def input_data_summary(self, obj):
        return str(obj.input_data)[:100]
    input_data_summary.short_description = 'Input Params'

    def result_summary(self, obj):
        return str(obj.result)[:100]
    result_summary.short_description = 'Returned Result'

    def pretty_result(self, obj):
 
        from django.utils.html import format_html

        try:
            # If the result is a list rather than a string, convert it first
            data = obj.result
            if isinstance(data, list):  # If it is a list, json.loads is not used
                formatted_json = json.dumps(data, indent=2, ensure_ascii=False)
            elif isinstance(data, str):
                parsed = json.loads(data)
                formatted_json = json.dumps(parsed, indent=2, ensure_ascii=False)
            else:
                return "⚠️ The result type cannot be parsed: neither a list nor a str"

            return format_html('<pre style="white-space: pre-wrap;">{}</pre>', formatted_json)
        except Exception as e:
            return f"unable to parse JSON：{e}"



