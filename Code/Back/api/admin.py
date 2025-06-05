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
            # 若 result 是 list 不是字符串，先转换
            data = obj.result
            if isinstance(data, list):  # 如果是 list，就不用 json.loads
                formatted_json = json.dumps(data, indent=2, ensure_ascii=False)
            elif isinstance(data, str):
                parsed = json.loads(data)
                formatted_json = json.dumps(parsed, indent=2, ensure_ascii=False)
            else:
                return "⚠️ 无法解析 result 类型：不是 list 也不是 str"

            return format_html('<pre style="white-space: pre-wrap;">{}</pre>', formatted_json)
        except Exception as e:
            return f"⚠️ 无法解析 JSON：{e}"



