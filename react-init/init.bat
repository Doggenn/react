@echo off
cd /d %~dp0

rem Instalar dependencias con npm
npm run dev
if errorlevel 1 (
    echo Error al instalar dependencias. Presiona cualquier tecla para salir.
    pause >nul
    exit /b
)
pause

rem Ejecutar comando npm run dev después de que finalice el servidor JSON
start /b npm i

pause