#!groovy
// vim: ft=Jenkinsfile

pipeline {
    options {
        ansiColor('xterm')
        timestamps()
        timeout(time: 1, unit: 'HOURS')
        quietPeriod(BRANCH_NAME == 'main' ? 120 : 5)
        buildDiscarder(logRotator(numToKeepStr: '15', artifactNumToKeepStr: '15', daysToKeepStr: '30'))
        // disableConcurrentBuilds()  // This limits build concurrency to 1 per branch
    }
    agent { label 'mac' }
    triggers {
        cron(BRANCH_NAME == 'main' ? 'H 9 * * *' : '')  // Run at random minute of 9am UTC hour
        issueCommentTrigger('.*test this please.*')
    }
    stages {
        stage('Install npm packages') {
            steps {
                sh 'npm install --prefer-offline --no-audit'
            }
        }
        stage('Test with Jest') {
            steps {
                sh 'npm run test:ci -- --color --coverage'
                publishHTML(target: [
                    allowMissing: true,
                    alwaysLinkToLastBuild: false,
                    keepAll: true,
                    reportDir: 'coverage',
                    reportFiles: 'index.html',
                    reportName: "Coverage Report (HTML)",
                ])
                step([
                    $class: 'CoberturaPublisher',
                    coberturaReportFile: 'coverage/cobertura-coverage.xml',
                    autoUpdateHealth: true, autoUpdateStability: true,
                    failNoReports: false, failUnhealthy: false, failUnstable: false,
                    maxNumberOfBuilds: 3, onlyStable: false, zoomCoverageChart: true,
                ])
            }
        }
    }
}
