pipeline {
    agent {
        node {
            label 'nodejs'
        }
    }
    stages {
        stage('Checkout code') {
            steps {
                checkout scm
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}