# backend/api/urls.py
from django.urls import path
from . import views
from .views import AgentListView,AgentListAllView,AgentAIRecommendView

urlpatterns = [
    path('agents/', AgentListView.as_view()),  # split page
    path('agents/all/', AgentListAllView.as_view()),   # no split page
    path('agents/recommend/', AgentAIRecommendView.as_view()),
]

