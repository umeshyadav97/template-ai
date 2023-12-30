// Jenkinsfile for CPC Frontend panel
def COLOR_MAP = [
    'SUCCESS': 'good',
    'FAILURE': 'danger',
    'UNSTABLE': 'warning'
]
def MESSAGES_MAP = [
    'SUCCESS': "success",
    'FAILURE': "failed",
    'UNSTABLE': "unstable"
]
pipeline {
    agent any
    options {
        // fail build if takes more than 30 minutes, mark reason as build timeout
        timeout(time: 10, unit: 'MINUTES')
        // Keep the 10 most recent builds
        buildDiscarder(logRotator(numToKeepStr: '10'))
        // Don't run any stage if found to be unstable
        skipStagesAfterUnstable()
    }
    environment {
        DISPLAY_SERVICE_NAME    = 'Stropeai Frontend Panel'
        BRANCH_NAME             = sh(script: "echo ${env.BRANCH_NAME}", returnStdout: true).trim()
        DO_SERVER               = credentials('nfx-dev-server')
        STROPE_SERVER           = credentials('nfx-server-strope')
    }
    stages {
        stage('SCM Checkout') {
            steps {
                checkout scm
            }
        }
        stage("Environment Variables") {
            steps {
                sh "printenv"
            }
        }
        stage('Deploy to Digital Ocean') {
            parallel {
                stage('Deploying to Environment') {
                    when {
                        expression { return BRANCH_NAME == 'develop' || BRANCH_NAME == 'qa' || BRANCH_NAME == 'staging' }
                    }
                    steps {
                        sshagent(credentials : ['nfx-dev-server-do']) {
                            sh 'ssh -o StrictHostKeyChecking=no ubuntu@${DO_SERVER} uptime'
                            sh """ ssh ubuntu@${DO_SERVER} "cd /home/ubuntu/projects/stropeai/frontend/${BRANCH_NAME}/; git reset --hard ; git pull origin ${BRANCH_NAME} ; chmod +x ./build_script.sh ; ./build_script.sh ${BRANCH_NAME}" """
                        }
                    }
                }
                stage('Deploying to Prod') {
                    when {
                        expression { return BRANCH_NAME == 'master' }
                    }
                    steps {
                        sshagent(credentials : ['curious-titans-nfx-server']) {
                            sh 'ssh -o StrictHostKeyChecking=no ubuntu@${STROPE_SERVER} uptime'
                            sh """ ssh ubuntu@${STROPE_SERVER} "cd /home/ubuntu/projects/strope.ai/frontend/${BRANCH_NAME}/; git pull origin ${BRANCH_NAME} && chmod +x build.sh && ./build.sh " """
                        }
                    }
                }
            }
        }
    }
}
