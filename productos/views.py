from django.shortcuts import render
from django.views.generic.base import TemplateView

from productos.serializers import ProductoSerializer, ImagenSerializer
from .models import *

from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import *


class IndexView(TemplateView):
    template_name = 'productos/index.html'
    
    def get_context_data(self,*args, **kwargs):
        context = super(IndexView,self).get_context_data(*args,**kwargs)
        context['productos'] = Producto.objects.all()
        context['imagenes'] = Imagen.objects.all()
        return context

class IndexViewDos(TemplateView):
    template_name = 'productos/index2.html'
    
class ProductsView(TemplateView):
    template_name = 'productos/products.html'

class StoreView(TemplateView):
    template_name = 'productos/store.html'

class AboutView(TemplateView):
    template_name = 'productos/about.html'

#REST VIEWS

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
    #permission_classes = [permissions.IsAuthenticated]

class ImagenViewSet(viewsets.ModelViewSet):
    queryset = Imagen.objects.all()
    serializer_class = ImagenSerializer
    #permission_classes = [permissions.IsAuthenticated]