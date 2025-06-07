from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.http import JsonResponse
from .models import Agent
from .models import RecommendationRecord
from ha1.utils.response import success, error


def home(request):
    return HttpResponse("Welcome to the Pattern Replacer Backend!")


from rest_framework import generics, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Agent
from .serializers import AgentSerializer
from .ai_model import predict_agent
class AgentListView(generics.ListAPIView):
    queryset = Agent.objects.all()
    serializer_class = AgentSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['location', 'language', 'employment_type']  # Selectable fields
    search_fields = ['full_name', 'location', 'language']           # Searchable field


from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import AgentSerializer

class AgentListAllView(APIView):
    def get(self, request):
        agents = Agent.objects.all()
        serializer = AgentSerializer(agents, many=True)
        return Response(serializer.data)



class AgentAIRecommendView(APIView):
    def post(self, request):
        try:
            user_input = request.data

            # If all fields are empty
            if not any(user_input.values()):
                return error("At least one field must be filled in to make a recommendation", code=400)

            result = predict_agent(user_input)

            # Save it in the recommendation record form
            RecommendationRecord.objects.create(
                input_data=user_input,
                result=result
            )

            # Successfully unified the return structure
            return success(result)

        except Exception as e:
            return error(f"Server anomaly：{str(e)}", code=500)

