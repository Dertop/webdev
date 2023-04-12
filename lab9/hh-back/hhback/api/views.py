from django.contrib import admin
from django.urls import path, include
from django.http.response import HttpResponse, JsonResponse

companies = [
    {
        'id': _id,
        'name': f'Company {_id}'
    }
    for _id in range(1, 10)
]
vacancies = [
    {
        'id': _id,
        'name': f'Vacancy {_id}'
    }
    for _id in range(1, 10)
]
def companies_list(request):
    return JsonResponse(companies, safe=False
    )

def companies_get(request, companies_id):
    for company in companies:
        if company['id'] == companies_id:
           return JsonResponse(company)
    return JsonResponse({'error': 'Company not found'})

def vacancies_list(request):
    return JsonResponse(vacancies, safe=False)

def vacancies_get(request, vacancies_id):
    for vacancy in vacancies:
        if vacancy['id'] == vacancies_id:
            return JsonResponse(vacancy)
    return JsonResponse({'error': 'Vacancy not found'})