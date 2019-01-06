# todolist-api
API backend built in NodeJS using Express to add TODOs to a MongoDB. 

## Build and Run
`npm run dev`

## Start the db 
This requires Docker installed.
`npm run mongodb`


`oc process -f .openshift-applier/templates/todolist-api-deploy.yml \
    -p NAME=todolist \
    -p APP_TAG=latest \
    -p NAMESPACE=springdo \
    | oc create -f -`