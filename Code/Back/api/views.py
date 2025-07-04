from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.http import JsonResponse
from .models import Agent
from .models import RecommendationRecord
from ha1.utils.response import success, error

from rest_framework import generics, filters
from django_filters.rest_framework import DjangoFilterBackend
from .serializers import AgentSerializer
from .ai_model import predict_agent
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework import filters
from .filters import AgentFilter
from django.db.models import Q
from django.core.cache import cache
import json


def home(request):
    return HttpResponse("Welcome to the Pattern Replacer Backend!")



#  paginate
class AgentListView(generics.ListAPIView):
    queryset = Agent.objects.all()
    serializer_class = AgentSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = AgentFilter

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        # paginate
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return Response({
                "code": 200,
                "msg": "Success",
                "data": {
                    "count": self.paginator.page.paginator.count,
                    "next": self.paginator.get_next_link(),
                    "previous": self.paginator.get_previous_link(),
                    "results": serializer.data
                }
            }, status=status.HTTP_200_OK)

        # no paginate
        serializer = self.get_serializer(queryset, many=True)
        return Response({
            "code": 200,
            "msg": "Success",
            "data": serializer.data
        }, status=status.HTTP_200_OK)
        

#  all
class AgentListAllView(APIView):
    def post(self, request):
        query = request.data.get('q', '')  

        if query:
            agents = Agent.objects.filter(
                Q(full_name__icontains=query) | Q(marn__icontains=query)
            )
        else:
            agents = Agent.objects.all()

        serializer = AgentSerializer(agents, many=True)
        return Response({
            "code": 200,
            "msg": "Success",
            "data": serializer.data
        }, status=status.HTTP_200_OK)




class AgentAIRecommendView(APIView):
    def post(self, request):
        try:
            user_input = request.data

            # If all fields are empty
            if not any(user_input.values()):
                return error("At least one field must be filled in to make a recommendation", code=400)

            cache_key = f"recommend:{hash(json.dumps(user_input, sort_keys=True))}"

            cached_result = cache.get(cache_key)
            if cached_result:
                result = json.loads(cached_result)
            else:
                result = predict_agent(user_input)
                cache.set(cache_key, json.dumps(result), timeout=600)

            RecommendationRecord.objects.create(
                input_data=user_input,
                result=result
            )
            return success(result)

        except Exception as e:
            return error(f"Server anomaly: {str(e)}", code=500)


