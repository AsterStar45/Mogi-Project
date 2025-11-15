from django.db import models

# Create your models here.
<<<<<<< HEAD
class Usuario(models.Model):
    nombre = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.nombre
=======
>>>>>>> bf6ada8866237b4c08a197f8fd8ec2572d16cbd3
