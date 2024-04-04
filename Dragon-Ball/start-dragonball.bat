@echo off
cd /d %~dp0
json-server --watch planets.json
pause