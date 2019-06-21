from django.contrib import admin
from django.contrib.auth.models import User

from .models import OJTopic, Category


class OJTopicAdmin(admin.ModelAdmin):

    list_display = ['title', 'id', 'author', 'category', 'created_time', 'modified_time']

    # override get_form() method to set default value in author field
    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields['author'].initial = User.objects.get(username='leo')
        return form

admin.site.register(OJTopic, OJTopicAdmin)
admin.site.register(Category)