pipeline {
    agent {
        label 'win-hmi'   // better to explicitly use your Windows agent
    }

    environment {
        SolutionRootPath = "${env.WORKSPACE}/app/backend/AssetManagement"
        solutionFilePath = "${env.WORKSPACE}/app/backend/AssetManagement/AssetManagement.sln"
        configuration = "Release"
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
                echo "Workspace: ${env.WORKSPACE}"
                echo "Solution Path: ${solutionFilePath}"

                // Clean restore
                bat "dotnet restore \"${solutionFilePath}\""
            }
        }

        stage('Build backend solution') {
            steps {
                echo "Building solution..."

                bat """
                dotnet build "${solutionFilePath}" ^
                --configuration ${configuration} ^
                --no-restore
                """
            }
        }

        stage('Test') {
            steps {
                echo "Running tests..."

                bat "dotnet test \"${solutionFilePath}\" --no-build"
            }
        }

        stage('Publish') {
            steps {
                echo "Publishing output..."

                bat """
                dotnet publish "${solutionFilePath}" ^
                --configuration ${configuration} ^
                -o "${env.WORKSPACE}\\publish" ^
                --no-build
                """
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'publish/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded ✅'
        }
        failure {
            echo 'Pipeline failed ❌'
        }
        always {
            echo 'Pipeline completed'
        }
    }
}
