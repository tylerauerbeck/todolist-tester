[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=tylerauerbeck_todolist-tester&metric=bugs)](https://sonarcloud.io/dashboard?id=tylerauerbeck_todolist-tester)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=tylerauerbeck_todolist-tester&metric=code_smells)](https://sonarcloud.io/dashboard?id=tylerauerbeck_todolist-tester)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=tylerauerbeck_todolist-tester&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=tylerauerbeck_todolist-tester)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=tylerauerbeck_todolist-tester&metric=alert_status)](https://sonarcloud.io/dashboard?id=tylerauerbeck_todolist-tester)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=tylerauerbeck_todolist-tester&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=tylerauerbeck_todolist-tester)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=tylerauerbeck_todolist-tester&metric=sqale_index)](https://sonarcloud.io/dashboard?id=tylerauerbeck_todolist-tester)


Change to trigger pullrequest
Deleted initial scan. Now lets see some things.
# todolist-tester

API backend built in NodeJS using Express to add TODOs to a MongoDB. 

## Build and Run
`npm run dev`

## Start the db 
This requires Docker installed.
`npm run mongodb`


`oc process -f .openshift-applier/templates/todolist-deploy.yml \
    -p NAME=todolist \
    -p APP_TAG=latest \
    -p NAMESPACE=<YOUR_NAME> \
    | oc create -f -`
