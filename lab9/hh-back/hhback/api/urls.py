from django.urls import path, include
from django.http.response import HttpResponse
from api import views

urlpatterns = [
    path('companies/', views.companies_list),
    path('companies/<int:companies_id>/', views.companies_get),

    path('vacancies/', views.vacancies_list),
    path('vacancies/<int:companies_id>/', views.vacancies_get),
]
