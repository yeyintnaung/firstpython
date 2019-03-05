from django import forms
# is like laravel validation

class LoginForm(forms.Form):
    username = forms.CharField(label='username', max_length=100, required=True)
    password = forms.PasswordInput()

    def clean(self):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')
        if password.is_valid():
            raise forms.ValidationError('This ps is required')
        if username == '':
            raise forms.ValidationError('This Field is required')
        return username


