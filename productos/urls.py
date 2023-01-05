from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'productos', views.ProductoViewSet)
router.register(r'imagenes', views.ImagenViewSet)

app_name = 'productos'
urlpatterns = [
    path('',views.IndexView.as_view(), name='index'),
    path('products',views.ProductsView.as_view(), name='products'),
    path('store', views.StoreView.as_view(), name='store'),
    path('about', views.AboutView.as_view(), name='about'),
    path('index',views.IndexViewDos.as_view(), name='index2'),
    path('rest-api/',include(router.urls)),
    path('api-auth/', include('rest_framework.urls',namespace='rest_framework'))
]