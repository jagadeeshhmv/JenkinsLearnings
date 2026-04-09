def sayHello(name) {
    echo "Hello, ${name}"
}

def buildDotnet(solutionPath, config) {
                bat """
                dotnet build "${solutionFilePath}" ^
                --configuration ${configuration} ^
                --no-restore
                """
}
