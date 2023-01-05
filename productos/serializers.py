from django.contrib.auth.models import User, Group
from .models import *

from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name="productos:user-detail")
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name="productos:group-detail")
    class Meta:
        model = Group
        fields = ['url', 'name']

class ImagenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Imagen
        exclude=['producto']

class ProductoSerializer(serializers.ModelSerializer):
    imagen = ImagenSerializer(many=True,read_only=True)
    #imagen = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    #imagen = serializers.HyperlinkedIdentityField(view_name='imagen')

    class Meta:
        model = Producto
        #many = True
        #depth = 3
        fields = ['id','numero','descripcion','precio','oferta','cantidad','ml','imagen'] 



