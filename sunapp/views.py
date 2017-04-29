from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.
class IndexView(TemplateView):
    # Displays the main page
    template_name = "index.html"
