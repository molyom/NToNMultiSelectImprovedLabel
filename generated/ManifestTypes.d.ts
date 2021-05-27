/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    value: ComponentFramework.PropertyTypes.StringProperty;
<<<<<<< HEAD
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
=======
    linkedEntityName: ComponentFramework.PropertyTypes.StringProperty;
    nameAttribute: ComponentFramework.PropertyTypes.StringProperty;
    idAttribute: ComponentFramework.PropertyTypes.StringProperty;
    otherNameAttribute: ComponentFramework.PropertyTypes.StringProperty;
    relationshipName: ComponentFramework.PropertyTypes.StringProperty;
    relationshipEntity: ComponentFramework.PropertyTypes.StringProperty;
    linkedEntityFetchXmlResource: ComponentFramework.PropertyTypes.StringProperty;
>>>>>>> a16108c7a19f0922aa28c4f5eb2d2797efc12caa
    NewRecordCreation: ComponentFramework.PropertyTypes.EnumProperty<"1" | "0">;
}
export interface IOutputs {
    value?: string;
}
