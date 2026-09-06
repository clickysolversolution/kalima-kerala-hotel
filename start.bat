@echo off
title Kalima Kerala Kitchen Hotel Server
echo ========================================================
echo   Starting Kalima Kerala Kitchen Hotel Local Server...
echo ========================================================
echo.
echo Open your browser at: http://localhost:8080/
echo Press Ctrl+C in this window to stop the server.
echo.
powershell -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
pause
