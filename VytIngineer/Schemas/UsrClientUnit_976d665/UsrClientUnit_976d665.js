define("UsrClientUnit_976d665", [], function() {
	return {
		entitySchemaName: "",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"UsrFName": {
				"8a47d85c-ec93-4460-882e-5399f79317bd": {
					"uId": "8a47d85c-ec93-4460-882e-5399f79317bd",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 5,
								"attribute": "UsrFName"
							},
							"rightExpression": {
								"type": 0,
								"value": " ",
								"dataValueType": 1
							}
						}
					]
				}
			},
			"UsrMName": {
				"8bb03952-79fb-44d7-b35c-1c8d3e5ad68d": {
					"uId": "8bb03952-79fb-44d7-b35c-1c8d3e5ad68d",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 5,
								"attribute": "UsrMName"
							},
							"rightExpression": {
								"type": 0,
								"value": " ",
								"dataValueType": 1
							}
						}
					]
				}
			},
			"UsrLName": {
				"85dc4814-37d9-4b74-a333-fd1f72e443fe": {
					"uId": "85dc4814-37d9-4b74-a333-fd1f72e443fe",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 5,
								"attribute": "UsrLName"
							},
							"rightExpression": {
								"type": 0,
								"value": " ",
								"dataValueType": 1
							}
						}
					]
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "Button-3a8ac667899d4aa68021a07eb1c7c49c",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.ClosePageButtonCaption"
					},
					"click": {
						"bindTo": "onCancelProcessElementClick"
					},
					"enabled": true
				}
			},
			{
				"operation": "insert",
				"name": "STRING40559f00-2e21-431d-a397-7a7fba2f4855",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrLName",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRINGade06441-7933-4ca6-86d8-fb78767bbf75",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrFName",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING0474704b-f471-470c-9920-ff8ade19c449",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "UsrMName",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRING358adacc-e759-49a3-ba41-62d231028f4d",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrLFM",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_DIFF*/
	};
});
