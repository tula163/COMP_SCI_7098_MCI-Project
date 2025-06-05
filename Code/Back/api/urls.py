# backend/api/urls.py
from django.urls import path
from . import views
from .views import AgentListView,AgentListAllView,AgentAIRecommendView

urlpatterns = [
    path('agents/', AgentListView.as_view()),  # 分页
    path('agents/all/', AgentListAllView.as_view()),   # 不分页版本
    path('agents/recommend/', AgentAIRecommendView.as_view()),
]

