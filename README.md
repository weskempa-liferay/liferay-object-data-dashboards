# React Chart using data from Liferay Objects (7.4)
Example of populating data into a React Chart ([FusionCharts](https://www.fusioncharts.com/) ) from a datasource that was created through Liferay Objects (7.4).

### Expected Use
This resource can be used as a 7.4 Remote App (iFrame or Custom Element) or a separate React App altogether.

## install
Once downloaded run:

node install

## Start local server
yarn start

## Create Dashboard Data Object

1. Create Object named:

* Label: "Dashboard Data Object"
* Pural Label: "Dashboard Data Objects"
* Name: "DashboardDataObject"

2. Object Needs the Fields

| Field  |  Type     | Required  |
| :---   |   :----:  |  :----:   |
| Label  | Integer   | Yes       |
| Value  | Integer   | Yes       |

3. Leave the object configuration in Company Scope

4. Return to the Details tab and publish your new object.

## Add Data

1. Using the newly created API enpoint for dashboarddataobjects, find the bulk endpoint

Example: http://localhost:8080/o/api/?endpoint=http://localhost:8080/o/c/dashboarddataobjects/openapi.json

2. Add the following data and press execute. This will add the number of records shown below.

[
    {
      "label": "Venezuela",
      "value": "290"
    },
    {
      "label": "Saudi",
      "value": "260"
    },
    {
      "label": "Canada",
      "value": "180"
    },
    {
      "label": "Iran",
      "value": "140"
    },
    {
      "label": "Russia",
      "value": "115"
    },
    {
      "label": "UAE",
      "value": "100"
    },
    {
      "label": "US",
      "value": "30"
    },
    {
      "label": "China",
      "value": "30"
    }
  ]
  
  ## Use as separate React App altogether
  
    TBD
  
  ## Remote App (iFrame) 
  
    TBD
  
  ## Remote App (Custom Element)
  
    TBD

