@echo off
title AI Agent Watcher - AI Prototyping Learn

echo.
echo ========================================
echo   AI AGENT FILE WATCHER
echo   AI Prototyping Learn
echo ========================================
echo.
echo IMPORTANT:
echo - DO NOT press any keys in this window
echo - DO NOT click inside this window
echo - Just let it run in the background
echo.
echo To stop: Close the window (click the X)
echo.
echo Starting watcher...
echo.

cd /d "%~dp0"

node watch.js

echo.
echo ========================================
echo Watcher stopped
echo ========================================
echo.
pause >nul
