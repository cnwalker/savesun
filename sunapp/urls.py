"""pollock_server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin

from sunapp import views

urlpatterns = [
    url(r'^$', views.IndexView.as_view(), name='index'),
    url(r'^about/', views.AboutView.as_view()),
    url(r'^examples/', views.ExampleView.as_view()),
    url(r'^another_one/', views.AnotherPageView.as_view()),
    url(r'^page/', views.StandardPageView.as_view()),
    url(r'^analytics', views.AnalyticsView.as_view()),
    url(r'^usage/', views.predict_view),
    url(r'^current_resources/', views.decrement_resources),
    url(r'^resources/', views.ResourceView.as_view()),
]
