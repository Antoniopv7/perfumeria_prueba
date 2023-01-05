from django.contrib import admin
from django.utils.safestring import mark_safe

# Register your models here.
from .models import Producto,Imagen

class ImagenInline(admin.StackedInline):
    model = Imagen
    extra = 1
    def image_preview(self,obj):
        if obj.image:
            return mark_safe('<img src="{0}" width="150" height="150" style="object-fit:contain" />'.format(obj.image.url))
        else:
            return '(No image)'
    image_preview.short_description = 'Preview'


class ProductoAdmin(admin.ModelAdmin):
    list_display = ('numero','descripcion',
                    'precio','oferta','cantidad','ml')
    inlines = [ImagenInline]

admin.site.register(Producto,ProductoAdmin)
admin.site.register(Imagen)