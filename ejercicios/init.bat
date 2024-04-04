@echo off
cd /d %~dp0

rem Instalar dependencias con npm
npm i
if errorlevel 1 (
    echo Error al instalar dependencias. Presiona cualquier tecla para salir.
    pause >nul
    exit /b
)
pause
rem Esperar unos segundos para asegurar que el servidor se inicie correctamente
timeout /t 10

rem Ejecutar comando npm run dev después de que finalice el servidor JSON
start /b npm run dev

pause