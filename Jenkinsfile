
pipeline {
    environment {
        registry = 'iamstarcode/dockerized-react:latest'
        registryCredential = 'dockerhub'
        dockerImage = ''
    }

    agent any

    tools { nodejs 'Nodjs16' }

    stages {
            stage('Unit Tests') {
            steps {
                dir('frontend') {
                    script {
                        sh 'npm install'
                        sh 'npm test -- --watchAll=false'
                    }
                }
            }
            }

            stage('Building Docker Image') {
                steps {
                    script {
                        dockerImage = docker.build registry + ":$BUILD_NUMBER"
                    }
                }
            }

            stage('Deploying Docker Image to Dockerhub') {
                steps {
                    script {
                        docker.withRegistry('', registryCredential) {
                        dockerImage.push()
                        }
                    }
                }
            }

            stage('Cleaning Up') {
                steps {
                sh "docker rmi --force $registry:$BUILD_NUMBER"
                }
            }
    }
}
