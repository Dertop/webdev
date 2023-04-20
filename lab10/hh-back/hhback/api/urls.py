from django.urls import path, include
from api import views
from .views import VacancyDetail, VacancyTopTen

urlpatterns = [
    path('companies/', views.companies_list),
    path('companies/<int:id>/', views.company_detail),
    path('companies/<int:id>/vacancies/', views.company_vacancies),
    path('vacancies/', views.vacancies_list),
    path('vacancies/<int:pk>/', VacancyDetail.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', VacancyTopTen.as_view(), name='vacancy-top-ten'),
]
