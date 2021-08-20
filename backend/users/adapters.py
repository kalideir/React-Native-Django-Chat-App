from allauth.account.adapter import DefaultAccountAdapter


class CustomAccountAdapter(DefaultAccountAdapter):

    def save_user(self, request, user, form, commit=False):
        user = super().save_user(request, user, form, commit)
        print(user)
        data = form.cleaned_data
        user.firstName = data.get('full_name')
        user.username = data.get('username') 
        user.save()
        return user