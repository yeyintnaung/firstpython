from django import forms


# is like laravel validation

class LoginForm(forms.Form):
    # this is for html form when useragent get
    username = forms.CharField(
        widget=forms.TextInput(attrs={'class': "form-control empty", 'id': "inputPassword", 'placeholder': 'username',
                                      'name': "username"}), required=True, max_length='100')
    password = forms.CharField(
        widget=forms.TextInput(attrs={'class': "form-control empty", 'id': "inputPassword", 'placeholder': 'password',
                                      'name': "password"}), max_length=100, required=True)

    # this function is to validate
    def clean(self):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')
        if password == '':
            raise forms.ValidationError('This password field is required')

        if username == '':
            raise forms.ValidationError('This user field is required')

        return self.cleaned_data
