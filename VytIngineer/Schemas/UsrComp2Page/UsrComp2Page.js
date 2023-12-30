define("UsrComp2Page", [], function() {
	return {
		 "IsNew": {
        dataValueType: BPMSoft.DataValueType.BOOLEAN,
        type: BPMSoft.ViewModelColumnType.VIRTUAL_COLUMN,
        value: false
      },
		entitySchemaName: "UsrComp",
		attributes: {
			"VisibleButton": {
        dataValueType: BPMSoft.DataValueType.BOOLEAN,
        type: BPMSoft.ViewModelColumnType.VIRTUAL_COLUMN,
        value: true
      }
		},
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
			"UsrSchema11e27518Detail": {
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
			save: function(){
      //this.isNew - new card
      this.set("IsNew",this.isNew);
      this.callParent(arguments);
    },
		hideButton: function(){
      //this.callParent(arguments);
      this.set("VisibleButton",false);
      
      console.log('метод hideButton');
    },
    showButton: function(){
      //this.callParent(arguments);
      this.set("VisibleButton",true);
      console.log('метод showButton');
    },	
			onSaved: function() {
      this.callParent(arguments);
      
      console.log('метод onSaved');
      
      console.log(this.get('UsrSchema11e27518Detail'));
	  var idComp = this.get('Id').toString();
      console.log(idComp);
      var esqQuery = Ext.create('BPMSoft.EntitySchemaQuery', {
    rootSchemaName: "Usr_Foto_PC"
});
       	  esqQuery.addColumn("UsrUsrComp");
		var filter = esqQuery.createColumnFilterWithParameter(
			BPMSoft.ComparisonType.EQUAL, "UsrUsrComp", idComp);
    esqQuery.filters.addItem(filter);
			var count = 0;	
		esqQuery.getEntityCollection(function(response){
			var text = "";
			
			if(response.success){
				BPMSoft.each(response.collection.getItems(), function(item){
					if(count >= 3){
						var text = item.values.Id;
						
						
						var query1 = Ext.create("BPMSoft.DeleteQuery", {
      						rootSchemaName: "Usr_Foto_PC"
    					});

    					var filter = BPMSoft.createColumnFilterWithParameter(BPMSoft.ComparisonType.EQUAL, "Id", text);
    					query1.filters.addItem(filter);
						query1.execute();
						
						
						console.log("delete: " + text); 
						count = count + 1;
					}else{
						var textt = item.values.Id;
						console.log(textt); 
						count = count + 1;	
					}
					
				}, this);
				console.log(count);
				while(count < 3){
					var insert = Ext.create('BPMSoft.InsertQuery', {
						rootSchemaName: "Usr_Foto_PC"
					  });
					  insert.setParameterValue('Id', "",
						BPMSoft.DataValueType.GUID);
	  insert.setParameterValue('UsrName', "Test" + count,
						BPMSoft.DataValueType.TEXT);
	  
	  insert.setParameterValue('UsrUsrComp', idComp,
						BPMSoft.DataValueType.GUID);
					  insert.execute();
					count = count + 1;
				}
			}
		}, this);
		 
    },
			getMyButtonEnable: function(){
		  
				
            return true;
          },
          
      getMyButtonVisible: function(){
		  
				
            return true;
          },
      
          myActionClick: function(){
			 
            BPMSoft.showInformation(
                Ext.String.format(
                this.get("Resources.Strings.MyActionMessage"),
                new Date().toLocaleString())
        ); 
			 return true; 
      },
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
          "enable": {"bindTo": "getMyButtonEnable"},
		  "Click" : {"bindTo": "showButton"}
        }));
		
        /* Возвращение коллекции действий страницы. */
        return actions;
      },
			
  },

		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
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
	                              "caption":{bindTo:"Resources.Strings.UsrCancelEventButton"},
	                              /* Привязка метода-обработчика нажатия кнопки. */
	                              "click": { bindTo: "hideButton" },
	                              /* Стиль отображения кнопки. */
	                              "style": BPMSoft.controls.ButtonEnums.style.DEFAULT,
						   		  /* Стиль видимости кнопки. */
						   		  "visible": { bindTo: "VisibleButton" },
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
				"name": "UsrSchema11e27518Detail",
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
