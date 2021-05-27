import {
	IInputs,
	IOutputs
} from "./generated/ManifestTypes";
import {
	Select2
} from "select2";
import * as $ from 'jquery';
import "./scripts/select2.min.js";
import * as ReactDOM from 'react-dom';



declare var Xrm: any;

class DataAction {
	guid: string;
	associate: boolean;
}
<<<<<<< HEAD
=======
class NToNData {
	len: string;
	ida: string;
	na: string;
	pa: string;
	re: string;
	rn: string;
	actions: DataAction[];
}
>>>>>>> a16108c7a19f0922aa28c4f5eb2d2797efc12caa

// class NToNData {
// 	len: string;
// 	ida: string;
// 	na: string;
// 	pa: string;
// 	re: string;
// 	rn: string;
// 	actions: DataAction[];
// }

<<<<<<< HEAD

export class TagsPickerControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {


	private contextObj: ComponentFramework.Context<IInputs>;
=======
export class NToNMultiSelectImprovedLabel implements ComponentFramework.StandardControl < IInputs, IOutputs > {


	private contextObj: ComponentFramework.Context < IInputs > ;
>>>>>>> a16108c7a19f0922aa28c4f5eb2d2797efc12caa
	// Div element created as part of this control's main container
	private mainContainer: HTMLSelectElement;
	private errorElement: HTMLDivElement;
	private selectedItems: string[] = [];
	private overlayDiv: HTMLDivElement;
	private container: HTMLDivElement;
	private _isValidState: boolean = true;

<<<<<<< HEAD
	//private _relData: NToNData;

	private _FetchXmlTagResource: string;


	private _letNewCreation: boolean;

	private _ctrlId: string;


	// Imporvement by Moly
	private _tagEntityName: string;
	private _tagEntityNameAttribute: string;
	private _tagEntityIdAttribute: string;
	private _otherTagEntityAttribute: string;
	private _connectionEntityName: string;
	private _connectionNameAttribute: string;
	private _connectionIdAttribute: string;
	private _connectionRecord1Field: string;
	private _connectionRecord2Field: string;
	private _allExistingTagObj: any;


	private _entityTagMetadataSuccessCallback: any;
	private _entityFormMetadataSuccessCallback: any;

	private _tagEntitySetname: string;
	private _formEntitySetname: string;


	private _getConnectionSuccess: any;

	private _successTagCallback: any;
	private _successCallback: any;


=======
	private _popUpService: any;

	private _relData: NToNData;

	private _linkedEntityName: string;
	private _relationshipEntity: string;
	private _relationshipName: string;
	private _idAttribute: string;
	private _nameAttribute: string;
	private _otherNameAttribute: string;
	private _linkedEntityFetchXmlResource: string;

	private _linkedEntityCollectionName: string;
	private _mainEntityCollectionName: string;

	private _entityMetadataSuccessCallback: any;
	private _linkedEntityMetadataSuccessCallback: any;
	private _relationshipSuccessCallback: any;
	private _successCallback: any;

	private _letNewCreation: boolean;

	private _ctrlId: string;
>>>>>>> a16108c7a19f0922aa28c4f5eb2d2797efc12caa

	private _notifyOutputChanged: () => void;


	/**
	 * Empty constructor.
	 */
	constructor() {

	}


	public S4() {
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	}

	public newGuid() {
		var result: string = (this.S4() + this.S4() + "-" + this.S4() + "-4" + this.S4().substr(0, 3) + "-" + this.S4() + "-" + this.S4() + this.S4() + this.S4()).toLowerCase();
		return result;
	}

	// then to call it, plus stitch in '4' in the third group

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
<<<<<<< HEAD
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement) {
		
=======
	public init(context: ComponentFramework.Context < IInputs > , notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement) {
		debugger;
>>>>>>> a16108c7a19f0922aa28c4f5eb2d2797efc12caa
		this.container = container;
		this.contextObj = context;


		if (typeof Xrm == 'undefined') {
			this.errorElement = document.createElement("div");
			this.errorElement.innerHTML = "<H2>This control only works on model-driven forms!</H2>";
			container.appendChild(this.errorElement);
			this._isValidState = false;
		} else {

			this._ctrlId = this.newGuid();
<<<<<<< HEAD
			//this._relData = new NToNData();
			//this._relData.actions = [];

			if (context.parameters.tagEntityName.raw != null) {
				this._tagEntityName = context.parameters.tagEntityName.raw;
			}
			if (context.parameters.tagEntityNameAttribute.raw != null) {
				this._tagEntityNameAttribute = context.parameters.tagEntityNameAttribute.raw;
			}
			if (context.parameters.tagEntityIdAttribute.raw != null) {
				this._tagEntityIdAttribute = context.parameters.tagEntityIdAttribute.raw;
			}
			if (context.parameters.otherTagEntityAttribute.raw != null) {
				this._otherTagEntityAttribute = context.parameters.otherTagEntityAttribute.raw;
			}

			if (context.parameters.connectionEntityName.raw != null) {
				this._connectionEntityName = context.parameters.connectionEntityName.raw;
				//this._relData.re = this._relationshipEntity;
			}
			if (context.parameters.connectionNameAttribute.raw != null) {
				this._connectionNameAttribute = context.parameters.connectionNameAttribute.raw;
				//this._relData.rn = this._relationshipName;
			}
			if (context.parameters.connectionIdAttribute.raw != null) {
				this._connectionIdAttribute = context.parameters.connectionIdAttribute.raw;
			}
			if (context.parameters.connectionRecord1Field.raw != null) {
				this._connectionRecord1Field = context.parameters.connectionRecord1Field.raw;
			}
			if (context.parameters.connectionRecord2Field.raw != null) {
				this._connectionRecord2Field = context.parameters.connectionRecord2Field.raw;
			}
			if (context.parameters.FetchXmlTagResource.raw != null) {
				this._FetchXmlTagResource = context.parameters.FetchXmlTagResource.raw;
			}


=======
			this._relData = new NToNData();
			this._relData.actions = [];

			if (context.parameters.linkedEntityName.raw != null) {
				this._linkedEntityName = context.parameters.linkedEntityName.raw;
				this._relData.len = this._linkedEntityName;
			}
			if (context.parameters.idAttribute.raw != null) {
				this._idAttribute = context.parameters.idAttribute.raw;
				this._relData.ida = this._idAttribute;
			}
			if (context.parameters.nameAttribute.raw != null) {
				this._nameAttribute = context.parameters.nameAttribute.raw;
				this._relData.na = this._nameAttribute;
			}
			if (context.parameters.otherNameAttribute.raw != null) {
				this._otherNameAttribute = context.parameters.otherNameAttribute.raw;
				this._relData.pa = this._otherNameAttribute;
			}

			if (context.parameters.relationshipEntity.raw != null) {
				this._relationshipEntity = context.parameters.relationshipEntity.raw;
				this._relData.re = this._relationshipEntity;
			}
			if (context.parameters.relationshipName.raw != null) {
				this._relationshipName = context.parameters.relationshipName.raw;
				this._relData.rn = this._relationshipName;
			}
			if (context.parameters.linkedEntityFetchXmlResource.raw != null) {
				this._linkedEntityFetchXmlResource = context.parameters.linkedEntityFetchXmlResource.raw;
			}
>>>>>>> a16108c7a19f0922aa28c4f5eb2d2797efc12caa
			if (context.parameters.NewRecordCreation.raw != null) {
				this._letNewCreation = (context.parameters.NewRecordCreation.raw == "0") ? false : true;
			}

<<<<<<< HEAD
			// this._tagEntityName = "new_tag";
			// this._tagEntityNameAttribute = "new_name";
			// this._tagEntityIdAttribute = "new_tagid";

			// this._connectionEntityName = "connection";
			// this._connectionNameAttribute = "name";
			// this._connectionIdAttribute = "connectionid";
			// this._connectionRecord1Field = "record1id";
			// this._connectionRecord2Field = "record2id";

			this._entityTagMetadataSuccessCallback = this.entityTagMetadataSuccessCallback.bind(this);
			this._entityFormMetadataSuccessCallback = this.entityFormMetadataSuccessCallback.bind(this);

=======
>>>>>>> a16108c7a19f0922aa28c4f5eb2d2797efc12caa

			context.mode.trackContainerResize(true);
			container.classList.add("pcf_container_element");

			this.overlayDiv = document.createElement("div");
			this.overlayDiv.classList.add("pcf_overlay_element");



			container.appendChild(this.overlayDiv);




<<<<<<< HEAD

			this.mainContainer = document.createElement("select");

			this._allExistingTagObj = [{ name: "1", id: "1" }];
=======
			this.mainContainer = document.createElement("select");


>>>>>>> a16108c7a19f0922aa28c4f5eb2d2797efc12caa

			this.mainContainer.id = this._ctrlId;


			this.mainContainer.classList.add("js-example-basic-multiple");
			//this.mainContainer.classList.add("js-example-theme-multiple");
			this.mainContainer.classList.add("pcf_main_element");

			//	this.mainContainer.classList.add("#myModal");

			this.mainContainer.multiple = true;
			this.mainContainer.name = "states[]";

			container.appendChild(this.mainContainer);


<<<<<<< HEAD

			this._getConnectionSuccess = this.getConnectionSuccess.bind(this);
			this._successTagCallback = this.successTagCallback.bind(this);


			this._notifyOutputChanged = notifyOutputChanged;


			(<any>Xrm).Utility.getEntityMetadata((<any>this.contextObj).page.entityTypeName, []).then(this._entityFormMetadataSuccessCallback, this.errorCallback);
			(<any>Xrm).Utility.getEntityMetadata(this._tagEntityName, []).then(this._entityTagMetadataSuccessCallback, this.errorCallback);

			//(<any>Xrm).WebApi.retrieveMultipleRecords(this._relationshipEntity, "?$filter="+ (<any>this.contextObj).page.entityTypeName+"id eq " + (<any>this.contextObj).page.entityId, 5000).then(this._relationshipSuccessCallback, this.errorCallback);

			if ((<any>this.contextObj).page.entityId != null &&
				(<any>this.contextObj).page.entityId != "00000000-0000-0000-0000-000000000000") {

				var option = "?$select=" + this._connectionIdAttribute + ",_" + this._connectionRecord1Field + "_value,_" + this._connectionRecord2Field + "_value,name&$filter=_" + this._connectionRecord1Field + "_value eq " + (<any>this.contextObj).page.entityId;
				this.contextObj.webAPI.retrieveMultipleRecords(this._connectionEntityName, option, 5000).then(this._getConnectionSuccess, this.errorCallback);

			} else {
				this._getConnectionSuccess(null);
=======
			this._entityMetadataSuccessCallback = this.entityMetadataSuccessCallback.bind(this);
			this._linkedEntityMetadataSuccessCallback = this.linkedEntityMetadataSuccessCallback.bind(this);
			this._relationshipSuccessCallback = this.relationshipSuccessCallback.bind(this);
			this._successCallback = this.successCallback.bind(this);

			this._notifyOutputChanged = notifyOutputChanged;

			( < any > Xrm).Utility.getEntityMetadata(( < any > this.contextObj).page.entityTypeName, []).then(this._entityMetadataSuccessCallback, this.errorCallback);
			( < any > Xrm).Utility.getEntityMetadata(this._linkedEntityName, []).then(this._linkedEntityMetadataSuccessCallback, this.errorCallback);
			//(<any>Xrm).WebApi.retrieveMultipleRecords(this._relationshipEntity, "?$filter="+ (<any>this.contextObj).page.entityTypeName+"id eq " + (<any>this.contextObj).page.entityId, 5000).then(this._relationshipSuccessCallback, this.errorCallback);

			if (( < any > this.contextObj).page.entityId != null &&
				( < any > this.contextObj).page.entityId != "00000000-0000-0000-0000-000000000000") {
				this.contextObj.webAPI.retrieveMultipleRecords(this._relationshipEntity, "?$filter=" + ( < any > this.contextObj).page.entityTypeName + "id eq " + ( < any > this.contextObj).page.entityId, 5000).then(this._relationshipSuccessCallback, this.errorCallback);
			} else {
				this.relationshipSuccessCallback(null);
>>>>>>> a16108c7a19f0922aa28c4f5eb2d2797efc12caa
			}

			var thisVar: any;
			thisVar = this;
			$(document).ready(function () {
				thisVar.setReadonly();

<<<<<<< HEAD

				$('#' + thisVar._ctrlId).select2({
					// check if allowed new tag
					tags: thisVar._letNewCreation,
					tokenSeparators: [','],
					placeholder: 'Select or create a Tag (seperated by ,)',
				
				}).on('select2:select', function (e) {
					var data = e.params.data;
					thisVar.selecTagAction("select", data);
				}).on('select2:unselect', function (e) {
					var data = e.params.data;
					thisVar.selecTagAction("unselect", data);
=======
				$('#' + thisVar._ctrlId).select2({
					tags: thisVar._letNewCreation,
					tokenSeparators: [',', ' '],
					placeholder: 'Select or create a Tag',	
				}).on('select2:select', function(e) {
					var data = e.params.data;
					thisVar.selectAction("select", data);
				}).on('select2:unselect', function(e) {
					var data = e.params.data;
					thisVar.selectAction("unselect", data);
>>>>>>> a16108c7a19f0922aa28c4f5eb2d2797efc12caa
				});
			});
		}
	}


<<<<<<< HEAD
	public entityTagMetadataSuccessCallback(value: any): void | PromiseLike<void> {
		this._tagEntitySetname = value.EntitySetName;
	}

	public entityFormMetadataSuccessCallback(value: any): void | PromiseLike<void> {
		this._formEntitySetname = value.EntitySetName;
	}


	public addTagOptions(value: any) {
		var thisVV = this;
		for (var i in value.entities) {
			var current: any = value.entities[i];

			var checked = this.selectedItems.indexOf(<string>current[this._tagEntityIdAttribute]) > -1;
			var toInsert = "";
			if (this._otherTagEntityAttribute !== null) {
				//"_pes_parentsector_value@OData.Community.Display.V1.FormattedValue"
				if (current[this._otherTagEntityAttribute] !== undefined) {
					toInsert = " <" + current[this._otherTagEntityAttribute] + "> ";
				}
			}



			var newOption = new Option(current[this._tagEntityNameAttribute] + toInsert, current[this._tagEntityIdAttribute], checked, checked);

			$('#' + this._ctrlId).append(newOption);
			thisVV._allExistingTagObj.push({ name: <string>current[this._tagEntityNameAttribute], id: <string>current[this._tagEntityIdAttribute] });
			this._allExistingTagObj = thisVV._allExistingTagObj;
			/*
					var option = document.createElement("option");
					option.value = current[this._tagEntityIdAttribute];
					option.text = current[this._tagEntityNameAttribute];
					this.mainContainer.options.add(option);
				*/
		}


		/*
				var thisVar : any = this;

=======
	public entityMetadataSuccessCallback(value: any): void | PromiseLike < void > {
		this._mainEntityCollectionName = value.EntitySetName;
	}

	public linkedEntityMetadataSuccessCallback(value: any): void | PromiseLike < void > {
		this._linkedEntityCollectionName = value.EntitySetName;
	}

	public addOptions(value: any) {
		for (var i in value.entities) {
			var current: any = value.entities[i];

			var checked = this.selectedItems.indexOf( < string > current[this._idAttribute]) > -1;
			var toInsert = "";
			if (this._otherNameAttribute !== null) {
				//"_pes_parentsector_value@OData.Community.Display.V1.FormattedValue"
				if (current[this._otherNameAttribute] !== undefined) {
					toInsert = " <" + current[this._otherNameAttribute] + "> ";
				}
			}

			var newOption = new Option(current[this._nameAttribute] + toInsert, current[this._idAttribute], checked, checked);
			$('#' + this._ctrlId).append(newOption);
			/*
					var option = document.createElement("option");
					option.value = current[this._idAttribute];
					option.text = current[this._nameAttribute];
					this.mainContainer.options.add(option);
				*/
		}
		/*
				var thisVar : any = this;

>>>>>>> a16108c7a19f0922aa28c4f5eb2d2797efc12caa
				setTimeout(function(){ 
					for(var si in thisVar.selectedItems){
						var sel : any = thisVar.selectedItems[si];
						$('#'+ thisVar._ctrlId).val(sel);
					}
				}, 200);
				*/
	}

<<<<<<< HEAD


	public successTagCallback(value: any): void | PromiseLike<void> {
		this.addTagOptions(value);
=======
	public successCallback(value: any): void | PromiseLike < void > {
		this.addOptions(value);
>>>>>>> a16108c7a19f0922aa28c4f5eb2d2797efc12caa
		//this.initTree();

	}


<<<<<<< HEAD

	public getConnectionSuccess(value: any): void | PromiseLike<void> {
		if (value != null) {
			for (var i in value.entities) {
				this.selectedItems.push(value.entities[i]["_" + this._connectionRecord2Field + "_value"]);
			}
		}
		if (this._FetchXmlTagResource != null) {
=======
	public relationshipSuccessCallback(value: any): void | PromiseLike < void > {
		if (value != null) {
			for (var i in value.entities) {
				this.selectedItems.push(value.entities[i][this._idAttribute]);
			}
		}
		if (this._linkedEntityFetchXmlResource != null) {
>>>>>>> a16108c7a19f0922aa28c4f5eb2d2797efc12caa
			var _self = this;
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
<<<<<<< HEAD
					_self.contextObj.webAPI.retrieveMultipleRecords(_self._FetchXmlTagResource, "?fetchXml=" + encodeURIComponent(this.responseText), 5000).then(_self._successCallback, _self.errorCallback);
=======
					_self.contextObj.webAPI.retrieveMultipleRecords(_self._linkedEntityName, "?fetchXml=" + encodeURIComponent(this.responseText), 5000).then(_self._successCallback, _self.errorCallback);
>>>>>>> a16108c7a19f0922aa28c4f5eb2d2797efc12caa
				}
			};
			xhttp.open("GET", this._FetchXmlTagResource, true);
			xhttp.send();

		} else {
<<<<<<< HEAD
			this.contextObj.webAPI.retrieveMultipleRecords(this._tagEntityName, "?$orderby=" + this._tagEntityNameAttribute + " asc", 5000).then(this._successTagCallback, this.errorCallback);
		}
	}



=======
			this.contextObj.webAPI.retrieveMultipleRecords(this._linkedEntityName, "?$orderby=" + this._nameAttribute + " asc", 5000).then(this._successCallback, this.errorCallback);
		}
	}

>>>>>>> a16108c7a19f0922aa28c4f5eb2d2797efc12caa
	public errorCallback(value: any) {
		alert(value);
	}

	public setReadonly(): void {
<<<<<<< HEAD
		(<HTMLElement>this.container.firstElementChild).style.display = this.contextObj.mode.isControlDisabled == false ? "none" : "block";
=======
		( < HTMLElement > this.container.firstElementChild).style.display = this.contextObj.mode.isControlDisabled == false ? "none" : "block";
>>>>>>> a16108c7a19f0922aa28c4f5eb2d2797efc12caa
	}

	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
<<<<<<< HEAD
	public updateView(context: ComponentFramework.Context<IInputs>): void {
=======
	public updateView(context: ComponentFramework.Context < IInputs > ): void {
>>>>>>> a16108c7a19f0922aa28c4f5eb2d2797efc12caa
		if (this._isValidState == false) return;
		// Add code to update control view
		this.contextObj = context;
		this.setReadonly();

	}

	/** 
	 * It is called by the framework prior to a control receiving new data. 
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs {
		if (this._isValidState == false) {
			return {
				value: ""
			};
		} else {
			return {
<<<<<<< HEAD
				value: "NTONDATA:" + this.selectedItems.toString()
=======
				value: "NTONDATA:" + JSON.stringify(this._relData)
>>>>>>> a16108c7a19f0922aa28c4f5eb2d2797efc12caa
			};
		}
	}

	/** 
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void {
		// Add code to cleanup control if necessary
		ReactDOM.unmountComponentAtNode(this.container);
	}

<<<<<<< HEAD

	public selecTagAction(action: string, data: any) {
=======
	public selectAction(action: string, data: any) {
>>>>>>> a16108c7a19f0922aa28c4f5eb2d2797efc12caa
		/*
		function (e: any, data: any) {
					ProcessClick(
					alert("Checked: " + data.node.id);
					alert("Parent: " + data.node.parent); 
					//alert(JSON.stringify(data));
				}
		*/

<<<<<<< HEAD
		if ((<any>this.contextObj).page.entityId == null ||
			(<any>this.contextObj).page.entityId == "00000000-0000-0000-0000-000000000000") {
			// if (action == "select") {
			// 	debugger;
			// 	var act = new DataAction();
			// 	act.associate = true;
			// 	act.guid = data.id;
			// 	this._relData.actions.push(act);

			// } else {
			// 	for (var i = 0; i < this._relData.actions.length; i++) {
			// 		var act = this._relData.actions[i];
			// 		if (act.guid == data.id) {
			// 			this._relData.actions.splice(i, 1);
			// 			break;
			// 		}
			// 	}

			// }
			this._notifyOutputChanged();

		} else {

			var url: string = (<any>Xrm).Utility.getGlobalContext().getClientUrl();
			//var recordUrl: string = url + "/api/data/v9.1/" + this._mainEntityCollectionName + "(" + (<any>this.contextObj).page.entityId + ")";



			if (action == "select") {
				if (data.id != data.text) {


					//prepare entity object
					let connectionEntity: any = {};
					//set record1id lookup with Tag Entity
					let filedNameForTag: string = this._connectionRecord1Field + "_" + this._tagEntityName + "@odata.bind";
					let filedValueForTag: string = "/" + this._tagEntitySetname + "(" + data.id + ")";
					connectionEntity[filedNameForTag] = filedValueForTag;

					//set record2id lookup with Form Entity
					let filedNameForForm: string = this._connectionRecord2Field + "_" + (<any>this.contextObj).page.entityTypeName + "@odata.bind";
					let filedValueForForm: string = "/" + this._formEntitySetname + "(" + (<any>this.contextObj).page.entityId + ")";
					connectionEntity[filedNameForForm] = filedValueForForm;
					//setup connection role
					//connection["record2roleid@odata.bind"] = "/connectionroles(EA5B38CE-A5EE-4CA0-A339-3A51B7DA87FE)"; //connection role

					connectionEntity["new_istag"] = true;

					Xrm.WebApi.online.createRecord(this._connectionEntityName, connectionEntity).then(
						function success(result: any) {
							var newEntityId = result.id;
							//	alert("Done Connection:" +newEntityId)
						},
						function (error: any) {
							Xrm.Utility.alertDialog(error.message);
						}
					);



				} else {
					var thisValue = this;

					// create tag:
					let entity: any = {};
				
					let tagNameTocreate: string;

					if (data.text.startsWith("#")) {
						tagNameTocreate = data.text.replace("#", '')

					} else {
						tagNameTocreate = data.text;
					}

					let obj = this._allExistingTagObj.find((o: any) => o.name === tagNameTocreate);

					if (obj === undefined) {
						
						entity[thisValue._tagEntityNameAttribute] = tagNameTocreate
						entity["new_rating"] = "1";
						entity["new_rating_month"] = "1";
						entity["new_rating_10day"] = "1";
						let newEntityId: string = "";

						Xrm.WebApi.online.createRecord(thisValue._tagEntityName, entity).then(
							function success(result: any) {
								newEntityId = result.id;

								// Create connection

								//prepare entity object
								let connectionEntity: any = {};
								//set record1id lookup with Tag Entity
								let filedNameForTag: string = thisValue._connectionRecord1Field + "_" + thisValue._tagEntityName + "@odata.bind";
								let filedValueForTag: string = "/" + thisValue._tagEntitySetname + "(" + newEntityId + ")";
								connectionEntity[filedNameForTag] = filedValueForTag;

								//set record2id lookup with Form Entity
								let filedNameForForm: string = thisValue._connectionRecord2Field + "_" + (<any>thisValue.contextObj).page.entityTypeName + "@odata.bind";
								let filedValueForForm: string = "/" + thisValue._formEntitySetname + "(" + (<any>thisValue.contextObj).page.entityId + ")";
								connectionEntity[filedNameForForm] = filedValueForForm;
								//setup connection role
								//connection["record2roleid@odata.bind"] = "/connectionroles(EA5B38CE-A5EE-4CA0-A339-3A51B7DA87FE)"; //connection role

								connectionEntity["new_istag"] = true;

								Xrm.WebApi.online.createRecord(thisValue._connectionEntityName, connectionEntity).then(
									function success(result: any) {
										var newEntityId = result.id;
										//	alert("Done Connection:" +newEntityId)
									},
									function (error: any) {
=======
		if (( < any > this.contextObj).page.entityId == null ||
			( < any > this.contextObj).page.entityId == "00000000-0000-0000-0000-000000000000") {
			if (action == "select") {
				debugger;
				var act = new DataAction();
				act.associate = true;
				act.guid = data.id;
				this._relData.actions.push(act);

			} else {
				for (var i = 0; i < this._relData.actions.length; i++) {
					var act = this._relData.actions[i];
					if (act.guid == data.id) {
						this._relData.actions.splice(i, 1);
						break;
					}
				}

			}
			this._notifyOutputChanged();

		} else {

			var url: string = ( < any > Xrm).Utility.getGlobalContext().getClientUrl();
			var recordUrl: string = url + "/api/data/v9.1/" + this._mainEntityCollectionName + "(" + ( < any > this.contextObj).page.entityId + ")";

			if (action == "select") {
				if (data.id != data.text) {

					//See himbap samples here: http://himbap.com/blog/?p=2063
					var associate = {
						"@odata.id": recordUrl
					};

					var req = new XMLHttpRequest();
					req.open("POST", url + "/api/data/v9.1/" + this._linkedEntityCollectionName + "(" + data.id + ")/" + this._relationshipName + "/$ref", true);
					req.setRequestHeader("Accept", "application/json");
					req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
					req.setRequestHeader("OData-MaxVersion", "4.0");
					req.setRequestHeader("OData-Version", "4.0");
					req.onreadystatechange = function() {
						if (this.readyState == 4 /* complete */ ) {
							req.onreadystatechange = null;
							if (this.status == 204) {
								//alert('Record Associated');
							} else {
								var error = JSON.parse(this.response).error;
								alert(error.message);
							}
						}
					};
					req.send(JSON.stringify(associate));
				} else {
					var thisValue = this;
					//let optionforDuplicate :string = "?$select="+thisValue._nameAttribute+"&$filter=contains(" + thisValue._nameAttribute + ",' #"+data.text+"')";
					//let s : string = Xrm.Encoding.htmlEncode(optionforDuplicate);
					
					// check if new tag exist. 
					// Xrm.WebApi.online.retrieveMultipleRecords(thisValue._linkedEntityName,s ).then(
					// 	function success(results:any) {
					// 		if(results.entities.length >0 ){
					// 			let names :any  ="";
					// 			for (var i = 0; i < results.entities.length; i++) {
					// 				names =+ results.entities[i][thisValue._nameAttribute] + "\n";
					// 				console.log(names);
					// 			}

	
					// 			var confirmStrings = {
					// 				text: "Record already exist. Please choose from existing \n (:" + names ,
					// 				title: "Confirm"
					// 			};
							
					// 			Xrm.Navigation.openConfirmDialog(confirmStrings, null).then(
					// 				function(success: any) {
					// 					if (success.confirmed) {
					// 						console.log("OK" + data.text);
					// 					}
					// 				}
					// 				)
			
						
							
					// 		//	alert("exist");
							
					// 		}else{

				
					
					// var confirmStrings = {
					// 	text: "Are you sure you want to create a new record? \n (#" + data.text + " will created) \n",
					// 	title: "Confirm"
					// };
				
					// Xrm.Navigation.openConfirmDialog(confirmStrings, null).then(
					// 	function(success: any) {
					// 		if (success.confirmed) {
					// 			console.log("OK" + data.text);

								// create tag:
								let entity: any = {};
								entity[thisValue._nameAttribute] = "#" + data.text;
								let newEntityId: string = "";


								Xrm.WebApi.online.createRecord(thisValue._linkedEntityName, entity).then(
									function success(result: any) {
										newEntityId = result.id;

										var associate = {
											"@odata.id": recordUrl
										};

										var req = new XMLHttpRequest();
										req.open("POST", url + "/api/data/v9.1/" + thisValue._linkedEntityCollectionName + "(" + newEntityId + ")/" + thisValue._relationshipName + "/$ref", true);
										req.setRequestHeader("Accept", "application/json");
										req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
										req.setRequestHeader("OData-MaxVersion", "4.0");
										req.setRequestHeader("OData-Version", "4.0");
										req.onreadystatechange = function() {
											if (this.readyState == 4 /* complete */ ) {
												req.onreadystatechange = null;
												if (this.status == 204) {
													//alert('Record Associated');
												} else {
													var error = JSON.parse(this.response).error;
													alert(error.message);
												}
											}
										};
										req.send(JSON.stringify(associate));

									},
									function(error: any) {
>>>>>>> a16108c7a19f0922aa28c4f5eb2d2797efc12caa
										Xrm.Utility.alertDialog(error.message);
									}
								);

<<<<<<< HEAD
							},
							function (error: any) {
								Xrm.Utility.alertDialog(error.message);
							}
						);






					} else {
						// var tagId = obj.id;

						// //prepare entity object
						// let connectionEntity: any = {};
						// //set record1id lookup with Tag Entity
						// let filedNameForTag: string = thisValue._connectionRecord1Field + "_" + thisValue._tagEntityName + "@odata.bind";
						// let filedValueForTag: string = "/" + thisValue._tagEntitySetname + "(" + obj.id + ")";
						// connectionEntity[filedNameForTag] = filedValueForTag;

						// //set record2id lookup with Form Entity
						// let filedNameForForm: string = thisValue._connectionRecord2Field + "_" + (<any>thisValue.contextObj).page.entityTypeName + "@odata.bind";
						// let filedValueForForm: string = "/" + thisValue._formEntitySetname + "(" + (<any>thisValue.contextObj).page.entityId + ")";
						// connectionEntity[filedNameForForm] = filedValueForForm;
						// //setup connection role
						// //connection["record2roleid@odata.bind"] = "/connectionroles(EA5B38CE-A5EE-4CA0-A339-3A51B7DA87FE)"; //connection role

						// connectionEntity["new_istag"] = true;

						// Xrm.WebApi.online.createRecord(thisValue._connectionEntityName, connectionEntity).then(
						// 	function success(result: any) {
						// 		var newEntityId = result.id;
						// 		//	alert("Done Connection:" +newEntityId)
						// 	},
						// 	function (error: any) {
						// 		Xrm.Utility.alertDialog(error.message);
						// 	}
						// );
						
					}




=======
						//	} else
						//		console.log("Not OK");
						//});
	
					//	alert("dont exist");													
			//		}
				// 	},
				// 	function(error: any) {  // looking for duplicated failes
				// 		Xrm.Utility.alertDialog(error.message);
				// 	}
				// );
>>>>>>> a16108c7a19f0922aa28c4f5eb2d2797efc12caa


				}

<<<<<<< HEAD


			} else if (action == "unselect") {


				if (data.id != data.text) {

					var thisV: any = this;
					Xrm.WebApi.online.retrieveMultipleRecords(this._connectionEntityName, "?$filter=_" + this._connectionRecord1Field + "_value eq " + data.id + " and  _" + this._connectionRecord2Field + "_value eq " + (<any>this.contextObj).page.entityId).then(
						function success(results: any) {
							for (var i = 0; i < results.entities.length; i++) {
								let connectionid: string = results.entities[i][thisV._connectionIdAttribute];

								Xrm.WebApi.online.deleteRecord(thisV._connectionEntityName, connectionid).then(
									function success(result: any) {
										//Success - No Return Data - Do Something
										// alert("Deleted");
									},
									function (error: any) {
										Xrm.Utility.alertDialog(error.message);
									}
								);

							}
						},
						function (error: any) {
							Xrm.Utility.alertDialog(error.message);
						}
					);

=======
			} else if (action == "unselect") {

				if (data.id != data.text) {
					var req = new XMLHttpRequest();
					req.open("DELETE", url + "/api/data/v9.1/" + this._linkedEntityCollectionName + "(" + data.id + ")/" + this._relationshipName + "/$ref" + "?$id=" + recordUrl, true);
					req.setRequestHeader("Accept", "application/json");
					req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
					req.setRequestHeader("OData-MaxVersion", "4.0");
					req.setRequestHeader("OData-Version", "4.0");
					req.onreadystatechange = function() {
						if (this.readyState == 4 /* complete */ ) {
							req.onreadystatechange = null;
							if (this.status == 204) {
								//alert('Record Disassociated');
							} else {
								var error = JSON.parse(this.response).error;
								alert(error.message);
							}
						}
					};
					req.send();
>>>>>>> a16108c7a19f0922aa28c4f5eb2d2797efc12caa
				}
			}

		}

	}

}
