var propertyCollection = " ",
    controlCollect = "",
    contactCollect = "";

function intro(propname){
    propertyCollection += propname;
    document.getElementById("xactNetElement").innerHTML = "<xmp><?xml version='1.0' encoding='UTF-8'?></xmp><xmp><XACTDOC></xmp><xmp><XACTNET_INFO " + propertyCollection + "></xmp>";
};
function ControlPoints(controlname){
    controlCollect += controlname;
    document.getElementById("controlPoints1").innerHTML = "<xmp><CONTROL_POINTS " + controlCollect + "></CONTROL_POINTS></xmp>";
};
function Contacts(contactname){
    contactCollect += contactname;
    document.getElementById("contacts1").innerHTML = "<xmp></XACTNET_INFO></xmp><xmp><CONTACTS></xmp><xmp><CONTACT " + contactCollect + "></xmp>";
};