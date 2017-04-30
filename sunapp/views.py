import json

from django.utils import timezone
from django.shortcuts import render
from django.views.generic import TemplateView

from dateutil.relativedelta import relativedelta
from models import Prediction
from django.http import HttpResponse

# Create your views here.
class IndexView(TemplateView):
    # Displays the main page
    template_name = "index.html"

class AboutView(TemplateView):
    template_name = "about.html"

class ExampleView(TemplateView):
    template_name = "examples.html"

class AnotherPageView(TemplateView):
    template_name = "another_page.html"

class StandardPageView(TemplateView):
    template_name = "page.html"

def predict_view(request):
    if request.method == "GET":
        end_time = timezone.now()
        start_time = end_time + relativedelta(hours=-1)
        predicitons = Prediction.objects.filter(date__range=(start_time, end_time))
        if len(predicitons) == 0:
            new_prediction = Prediction(current_power=40000)
            new_prediction.save()
        all_predictions = Prediction.objects.all()
        return HttpResponse(json.dumps({
            'total': float(reduce(lambda x, y: x.current_power + y.current_power, all_predictions).current_power)/len(all_predictions)
        }))
