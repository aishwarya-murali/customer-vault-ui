
REM Exit immediately if a command exits with a non-zero status
REM set -e

REM Print shell input lines as they are read
ECHO on

REM Clean dist and package folder
if exist dist rmdir /s /q dist || goto EXIT
if exist artifact rmdir /s /q artifact || goto EXIT

mkdir dist || goto EXIT
mkdir artifact || goto EXIT
if not exist "src\etc" mkdir "src\etc" || goto EXIT

REM Get package name and version
set PACKAGE_NAME=`node -e "console.log(require('./package.json').name);"`
set PACKAGE_VERSION=`node -e "console.log(require('./package.json').version);"`

REM If not running in JENKINS
if "%JENKINS_PROCESS%"== "TRUE" (echo "Skipping npm install in build script since running in JENKINS") else (cmd /c npm install )
rem npm install

REM Shrinkwrap
REM cmd /c npm shrinkwrap || goto EXIT

REM Build assets
cmd /c npm run build:webpack || goto EXIT

REM Git revision
cmd /c npm run git:version -- dist/VERSION.json

REM Copy package.json
cp package.json dist/

REM If not running in JENKINS
if "%JENKINS_PROCESS%"== "TRUE" (cmd /c npm install --production --prefix dist) else (cmd /c npm install --production --prefix dist --userconfig=.npmrc )

REM Transpile
cmd /c npm run babel -- src --out-dir dist/src/ --source-maps true || goto EXIT
cmd /c npm run babel -- config --out-dir dist/config --source-maps true || goto EXIT

REM Copy css and json files
REM find src -name '*.css' -exec rsync -R '{}' dist ";"
forfiles /P . /S /M *.css /C "cmd /c copy  @files dist"

REM find src -name '*.json' -exec rsync -R '{}' dist ";"
forfiles /S /M *.json /C "cmd /c copy @files dist"

REM Create Tar
set zipFileName=%PACKAGE_NAME%-%PACKAGE_VERSION%.zip
CScript .\tasks\zip.vbs dist .\artifact\security-fabric-1.0.0.zip
goto END
:EXIT
echo some error occured
pause
:END
