define("UsrComp2Page", ["UsrEventConstants"], function(UsrEventConstants) {
	return {
		entitySchemaName: "UsrComp",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrCompFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrComp"
				}
			},
			"UsrSchema11e27518Detailf5d589a6": {
				"schemaName": "UsrSchema11e27518Detail",
				"entitySchemaName": "Usr_Foto_PC",
				"filter": {
					"detailColumn": "UsrUsrComp",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"UsrName": {
				"7ad5b507-085f-47dd-b8ef-ff570609c082": {
					"uId": "7ad5b507-085f-47dd-b8ef-ff570609c082",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrVidCard"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrVidCard"
							}
						}
					]
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			
		getActions: function() {
        /* Вызов базовой реализации метода для получения проиниализированных действий страницы. */
        let actions = this.callParent(arguments);
        /* Добавление линии-разделителя между вкладками действий. */
        actions.addItem(this.getButtonMenuItem({
          Type: "BPMSoft.MenuSeparator",
          Caption: ""
        }));
        /* Добавление кастомного пункта в список действий. */
        actions.addItem(this.getButtonMenuItem({
          /* Привязка заголовка действия к локализуемой строке. */
          "Tag": "myActionClick",
          "Caption": {"bindTo": "Resources.Strings.MyActionCaption"},
          "Enabled": {"bindTo": "getMyButtonEnabled"}
        }));
		actions.addItem(this.getButtonMenuItem({
          /* Привязка заголовка действия к локализуемой строке. */
          "Tag": "myActionClick",
          "Caption": {"bindTo": "asdasd"},
          "Enabled": {"bindTo": "isEventNotCanceled"}
        }));
        /* Возвращение коллекции действий страницы. */
        return actions;
      },
          
      getMyButtonEnabled: function(){
		  
				
            return true;
          },
      
          myActionClick: function(){
			 
            BPMSoft.showInformation(
                Ext.String.format(
                this.get("Resources.Strings.MyActionMessage"),
                new Date().toLocaleString())
        );        
      },
			isEventNotCanceled : function(f) {
				if(f == 3){

					return false;}
				else{

					return true;}
					
	                  },
			
			onCancelEventClick : function(){
				this.isEventNotCanceled(3);
			}
  },

		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "set",
				"name": "UsrNamefsasa",
				"values": {"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
	                              /* Тип добавляемого элемента — кнопка. */
	                              "itemType": BPMSoft.ViewItemType.BUTTON,
	                              /* Привязка заголовка кнопки к локализуемой строке схемы. */
	                              "caption": { bindTo: "Resources.Strings.UsrCancelEventButton" },
	                              /* Привязка метода-обработчика нажатия кнопки. */
	                              "click": { bindTo: "onCancelEventClick" },
	                              /* Привязка свойства доступности кнопки. */
	                              "enabled": { bindTo: "isEventNotCanceled" },
	                              /* Стиль отображения кнопки. */
	                              "style": BPMSoft.controls.ButtonEnums.style.DEFAULT
	                        },
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName8fa0046c-986f-4557-9e80-22b09b7e5b26",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrName"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrComps285aaa12-1ed6-4b90-a0a7-2560045eaf33",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrComps"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrTypef7a1e950-3499-457d-b4bd-6d0a32cdc30a",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrType"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrVidCard4ff4d75b-522e-43df-905f-0004e21f09cc",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrVidCard"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrProc02e2a8e2-2035-43a4-9705-9637e5f0ceae",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "UsrProc"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrPriceIntf756123c-c0b0-492c-a41b-e6750f70613e",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "UsrPriceInt"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrNotes661d2406-ac48-4f9f-acd3-d817bd2b96c8",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Header"
					},
					"bindTo": "UsrNotes",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "insert",
				"name": "UsrSchema11e27518Detailf5d589a6",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "ESNTab",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_DIFF*/
	};
});
