from django.http.response import JsonResponse
from api.models import Product, Category

# Create your views here.
def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)

def product_detail(request, id):
    product = Product.objects.get(id = id)
    product_json = product.to_json()
    return JsonResponse(product_json, safe = False)


def category_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)

def category_detail(request, id):
    category = Category.objects.get(id=id)
    category_json = category.to_json()
    return JsonResponse(category_json, safe=False)

def category_products(request, id):
    products = Product.objects.filter(category_id = id)
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)
