# from rest_framework import serializers, generics
# from .models import Company, Vacancy
#
#
# class CompanySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Company
#         fields = ('id', 'name', 'description', 'city', 'address')
#
#
# class VacancySerializer(serializers.Serializer):
#     id = serializers.ReadOnlyField()
#     name = serializers.CharField(max_length=255)
#     description = serializers.CharField()
#     company = CompanySerializer()
#     salary = serializers.FloatField()
#
#     def create(self, validated_data):
#         company = Company.objects.create(**validated_data)
#         return company
#
#     def update(self, instance, validated_data):
#         instance.name = validated_data.get('name', instance.name)
#         instance.description = validated_data.get('description', instance.description)
#         instance.city = validated_data.get('city', instance.city)
#         instance.address = validated_data.get('address', instance.address)
#         instance.save()
#         return instance
from rest_framework import serializers
from api.models import Company, Vacancy


class CompanySerializer(serializers.Serializer):
    id = serializers.ReadOnlyField()
    name = serializers.CharField()
    description = serializers.CharField()
    address = serializers.CharField()
    city = serializers.CharField()

    def create(self, validated_data):
        company = Company.objects.create(**validated_data)
        return company

    def update(self, instance, validated_data):
        instance.id = instance.id
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.address = validated_data.get('address', instance.address)
        instance.city = validated_data.get('city', instance.city)
        instance.save()
        return instance


class VacancySerializer(serializers.ModelSerializer):
    company = serializers.SlugRelatedField(queryset=Company.objects.all(), slug_field='name')

    class Meta:
        model = Vacancy
        fields = ('id', 'name', 'description', 'salary', 'company')
        read_only_field = ['id']