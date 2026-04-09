pipeline {
    agent any

    environment{
        SolutionRootPath = "${env.WORKSPACE}/app/backend/AssetManagement"
        solutionFilePath = "${SolutionRootPath}/AssetManagement.sln"
        configuration = "Release"
    }

    stages {
      
        stage('Restore') {
            steps {
                echo "Workspace: ${env.WORKSPACE}"
                echo "Solution Path: ${solutionFilePath}"

                // Clean restore
                bat "dotnet restore \"${solutionFilePath}\""
            }
        }

        stage('Use Common Groovy') {
            steps {
                script {
                    def common = load "scripts/CommonStages.groovy"

                    common.sayHello("Jagadeesh")

                    common.buildDotnet(
                        "${env.WORKSPACE}/app/backend/AssetManagement/AssetManagement.sln",
                        "${configuration}"
                    )
                }
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
