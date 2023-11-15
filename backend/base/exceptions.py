class FormDataNotFoundException(Exception):

    def __init__(self, message):
        super().__init__(message)
        self.message = message

class FormDataValidationException(Exception):

    def __init__(self, message):
        super().__init__(message)
        self.message = message