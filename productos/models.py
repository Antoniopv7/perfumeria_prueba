from django.db import models

# Create your models here.

class Producto(models.Model):
    numero = models.IntegerField()
    descripcion = models.CharField(max_length=300)
    precio = models.IntegerField()
    oferta = models.FloatField(max_length=1)
    cantidad = models.IntegerField()
    ml = models.IntegerField()
    def __str__(self):
        return self.descripcion

class Imagen(models.Model):
    producto = models.ForeignKey(Producto,related_name='imagen',on_delete=models.CASCADE)
    imagen = models.ImageField(upload_to='./static/productos/imagenes',default="")

    class Meta:
        verbose_name = 'Imagen'
        verbose_name_plural = 'Imagenes'

class Cotizacion(models.Model):
    total = models.IntegerField()

class Productos_cotizados(models.Model):
    producto = models.ForeignKey(Producto,on_delete=models.CASCADE)
    cotizacion = models.ForeignKey(Cotizacion, on_delete=models.CASCADE)
