# chatbot/views.py
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json

@csrf_exempt
def chatbot_api(request):
    if request.method == "POST":
        data = json.loads(request.body)
        message = data.get("message", "")
        # Aquí integras la lógica de tu chatbot
        return JsonResponse({"reply": f"Recibí tu mensaje: {message}"})
    return JsonResponse({"error": "Método no permitido"}, status=405)
