#!/usr/bin/env bash
  
set -o errexit
set -o nounset
echo '*** STARTING JOB RELEASE QA ***'
crumb=$(curl -s 'http://user:MqzZTwQw9UD4@local-jenkins/jenkins/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,":",//crumb)')
curl -X POST -H "$crumb" 'http://user:MqzZTwQw9UD4@local-jenkins/jenkins/job/release-one-qa/build?token=daf500ad8ad38f97beb718862f97a8d867371107'

exit;
