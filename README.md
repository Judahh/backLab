# backLab

## OCI:

Click Deployments in Resources section on the left side of the screen.
Click Create Deployment.
Ensure that From Scratch is selected for the deployment type.
To define your deployment, fill in the Basic Information section.
Name: <your-deployment-name>
Path Prefix (example): /v1
Compartment: <your-compartment-name>
API Request Policies: Take default values
API Logging Policies: Take default value of Information
Click Next. The Routes dialog appears with Route 1 selected.
To define your route, fill in the Route 1 section.
Path: <your-route-path>
Example: /http-info

Methods: GET POST
Type: Oracle Functions
Application in <your-compartment-name>: Select the Functions application you created.
Function Name: Select the function you created in the configuration section.
Click Next. The Review dialog is displayed summarizing the choices you have made.
Click Create. Your deployment is created.
Click the Deployments link for your gateway. Copy the base end point for the deployment you created.
For example: https://aaaaa.apigateway.us-ashburn-X.oci.customer-oic.com/v1

## AZURE

https://docs.microsoft.com/pt-pt/azure/azure-functions/create-first-function-vs-code-typescript

Azure Functions integrates with Azure API Management in the portal to let you expose your HTTP trigger function endpoints as REST APIs. These APIs are described using an OpenAPI definition. This JSON (or YAML) file contains information about what operations are available in an API.