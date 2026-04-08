pipeline {
    agent any
	
	environement{
	SolutionRootPath = "${env.WORKSPACE}/app/backend/AssetManagement"
	solutionFilePath = "app/backend/AssetManagement/AssetManagement.sln"
	configuration = "release"
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
		
		stage('Build backend solution'){
		 steps{
		  echo "${env.WORKSPACE}"
          echo "solutionFilePath"
		  bat """
               dotnet build "${SolutionFilePath}" ^
               --configuration ${configuration} ^
               /p:Platform="${platform}" ^
               /p:CollectCoverage=true ^
               /p:maximumCpuCount=true ^
               /t:Clean,Build ^
               -v:m ^
               --no-restore
           """ 
		 }
		
		}
		
    }
}
 

 
