import json
from rest_framework import status
from rest_framework.test import APITestCase
from escola.models import Aluno

class NovoAlunoTestCase(APITestCase):
    def test_response_novo_aluno(self):
        data = {
            "nome": "test case",
            "rg": "0000000",
            "cpf": "000000",
            "data_nascimento": "2000-04-08"
        }

        response = self.client.post('/alunos/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_data_novo_aluno(self):
        data = {
            "id": 1,
            "nome": "test case",
            "rg": "0000000",
            "cpf": "000000",
            "data_nascimento": "2000-04-08"
        }

        response = self.client.post('/alunos/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data, data)


class ListaAlunoTestCase(APITestCase):
    
    def setUp(self):
        self.aluno = Aluno.objects.create(
            nome="Test Case",
            rg="00000",
            cpf="00000",
            data_nascimento="2000-04-08"
        )

    def test_response_lista_alunos(self):
        response = self.client.get('/alunos/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_detalhes_aluno_existente(self):
        response = self.client.get('/alunos/1/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["nome"], "Test Case")

    def test_detalhes_aluno_nao_existente(self):
        response = self.client.get('/alunos/2/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

class AlteraAlunoTestCase(APITestCase):
    def setUp(self):
        self.aluno = Aluno.objects.create(
            nome="Test Case",
            rg="00000",
            cpf="00000",
            data_nascimento="2000-04-08"
        )

    def test_altera_aluno_existente(self):
        data = {
            "id": 1,
            "nome":"Test Changed",
            "rg":"11111",
            "cpf":"11111",
            "data_nascimento":"2000-04-09"
        }

        response = self.client.put('/alunos/1/', data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(json.loads(response.content), data)

    def test_altera_aluno_nao_existente(self):
        data = {
            "nome":"Test Changed",
            "rg":"11111",
            "cpf":"11111",
            "data_nascimento":"2000-04-09"
        }

        response = self.client.put('/alunos/2/', data)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

class ExcluiAlunoTestCase(APITestCase):
    def setUp(self):
        self.aluno = Aluno.objects.create(
            nome="Test Case",
            rg="00000",
            cpf="00000",
            data_nascimento="2000-04-08"
        )

    def test_exclui_aluno_existente(self):
        response = self.client.delete('/alunos/1/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_exclui_aluno_nao_existente(self):
        response = self.client.delete('/alunos/2/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


    




