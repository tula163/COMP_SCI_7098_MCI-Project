import django_filters
from django.db.models import Q
from .models import Agent

class AgentFilter(django_filters.FilterSet):
    q = django_filters.CharFilter(method='search_all')

    def search_all(self, queryset, name, value):
        return queryset.filter(
            Q(full_name__icontains=value) |
            Q(marn__icontains=value)
        )

    class Meta:
        model = Agent
        fields = ['q', 'location', 'availability'] 
