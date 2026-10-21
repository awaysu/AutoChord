@echo off
cd /d "%~dp0"
if not exist node_modules\electron (
  echo First run: installing Electron...
  call npm install
)
start "" /b npx electron .
