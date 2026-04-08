pipeline {
    agent any

    environment {
        SolutionRootPath = "${env.WORKSPACE}/app/backend/AssetManagement"
        solutionFilePath = "${env.WORKSPACE}/app/backend/AssetManagement/AssetManagement.sln"
        configuration = "Release"
        platform = "x86"
    }

    stages {

        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }

        stage('Create Hello File') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'echo "hello jen" > hello.txt'
                    } else {
                        bat 'echo hello jen > hello.txt'
                    }
                }
            }
        }

        stage('Restore') {
            steps {
                bat "dotnet restore \"${solutionFilePath}\""
            }
        }

        stage('Build backend solution') {
            steps {
                echo "${env.WORKSPACE}"
                echo "${solutionFilePath}"

                bat """
                dotnet build "${solutionFilePath}" ^
                --configuration ${configuration}
                """
            }
        }
    }
}
