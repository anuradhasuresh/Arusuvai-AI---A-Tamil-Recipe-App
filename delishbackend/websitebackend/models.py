from django.db import models

class Recipe(models.Model):
    name = models.CharField(max_length = 100)
    description = models.TextField()
    cooking_time = models.IntegerField()  # in minutes
    servings = models.IntegerField()
    ingredients = models.TextField()
    instructions = models.TextField()
    image_url = models.URLField(max_length=200, blank=True, null=True)
        
    def __str__(self):
        return self.name
