from fastapi import FastAPI
from controllers import paciente_controller, medico_controller, cita_controller, historial_controller

app = FastAPI(
    title="API de Gestión de Citas Médicas",
    description="Backend para el sistema de citas médicas (T02_03)",
    version="1.0"
)

app.include_router(paciente_controller.router)
app.include_router(medico_controller.router)
app.include_router(cita_controller.router)
app.include_router(historial_controller.router)
@app.get("/")
def root():
    return {"mensaje": "API de Citas Médicas funcionando"}


from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # O especifica ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Este bloque NO es necesario para FastAPI, pero si quieres ejecutar con python main.py:
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
    
