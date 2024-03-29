from django.http.response import JsonResponse
from api.models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt
from .serializers import CompanySerializer, VacancySerializer
from rest_framework import generics
import json


# Create your views here.
@csrf_exempt
def companies_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [c.to_json() for c in companies]
        return JsonResponse(companies_json, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        company_name = data.get('name', '')
        company_desc = data.get('description', '')
        company_city = data.get('city', '')
        company_address = data.get('address', '')
        company = Company.objects.create(name=company_name, description=company_desc, city=company_city, address=company_address)
        return JsonResponse(company.to_json())

@csrf_exempt
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return JsonResponse(f"Company with id:{id} not found", safe=False, status=400)
    if request.method == "GET":
        company_json = company.to_json()
        return JsonResponse(company_json, safe=False)
    if request.method == 'PUT':
        data = json.loads(request.body)
        company_name = data.get('name', company.name)
        company_desc = data.get('description', company.description)
        company_city = data.get('city', company.city)
        company_address = data.get('address', company.city)
        company.name = company_name
        company.description = company_desc
        company.city = company_city
        company.address = company_address
        company.save()
        return JsonResponse(company.to_json())
    if request.method == 'DELETE':
        company.delete()
        return JsonResponse(f'Company with id:{id} successfully deleted', safe=False)



def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return JsonResponse(f"company with id:{id} not found", safe=false, status=400)
    companyV_json = [v.to_json() for v in company.vacancies.all()]
    return JsonResponse(companyV_json, safe=False)


@csrf_exempt
def vacancies_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies_json = [v.to_json() for v in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        vacancy_name = data.get('name', '')
        vacancy_desc = data.get('description', '')
        vacancy_salary = data.get('salary', '')
        vacancy_company_id = data.get('company', '')
        try:
            vacancy_company = Company.objects.get(id=vacancy_company_id)
        except:
            return JsonResponse(f"company with id:{vacancy_company_id} not found", safe=False, status=400)
        vacancy = Vacancy.objects.create(name=vacancy_name, description=vacancy_desc, salary=vacancy_salary,
                                         company=vacancy_company)
        return JsonResponse(vacancy.to_json())



class VacancyList(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


class VacancyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


class VacancyTopTen(generics.ListAPIView):
    queryset = Vacancy.objects.order_by('-salary')[:10]
    serializer_class = VacancySerializer
