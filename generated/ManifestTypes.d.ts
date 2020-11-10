/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    value: ComponentFramework.PropertyTypes.StringProperty;
    tagEntityName: ComponentFramework.PropertyTypes.StringProperty;
    tagEntityNameAttribute: ComponentFramework.PropertyTypes.StringProperty;
    tagEntityIdAttribute: ComponentFramework.PropertyTypes.StringProperty;
    otherTagEntityAttribute: ComponentFramework.PropertyTypes.StringProperty;
    connectionEntityName: ComponentFramework.PropertyTypes.StringProperty;
    connectionNameAttribute: ComponentFramework.PropertyTypes.StringProperty;
    connectionIdAttribute: ComponentFramework.PropertyTypes.StringProperty;
    connectionRecord1Field: ComponentFramework.PropertyTypes.StringProperty;
    connectionRecord2Field: ComponentFramework.PropertyTypes.StringProperty;
    FetchXmlTagResource: ComponentFramework.PropertyTypes.StringProperty;
    NewRecordCreation: ComponentFramework.PropertyTypes.EnumProperty<"1" | "0">;
}
export interface IOutputs {
    value?: string;
}
