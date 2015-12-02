var propertyCollection = " ",
    controlCollect = "",
    cancelComment = "",
    controlPoint1Collect = "",
    cpNoteCollect= "",
    thirdPartyURLCollect = "",
    XNcontactsCollect = "",
    mortgageCollect = "",
    addressMainCollect = "",
    contactPhoneCollect = "",
    contactEmailCollect = "",
    compAddressCollect = "",
    compPhoneCollect = "",
    compEmailCollect = "",
    compMainCollect = "",
    compMainAddressCollect = "",
    compMainPhoneCollect = "",
    compMainEmailCollect = "",
    projectInfoCollect = "",
    lossInfoCollect = "",
    adminInfoCollect = "",
    insuranceClientCollect = "",
    ICAddressCollect = "",
    ICPhoneCollect = "",
    ICEmailCollect= "",
    assignmentReferralCollect= "",
    billingArrangementCollect= "",
    admCollect= "",
    subrogationNoteCollect= "",
    coverageLossCollect= "",
    coverageNoteCollect= "",
    coveragesMainCollect= "",
    coverageCollect= "",
    subLimitsCollect= "",
    tolCollect= "",
    colCollect= "",
    formsCollect= "",
    paramsCollect= "",

    xactdocVal = "<xmp><?xml version='1.0' encoding='UTF-8'?></xmp><xmp><XACTDOC></xmp>",
    xactdocValEnd = "<xmp></XACTDOC>",
    xactNetInfoVal = "<xmp><XACTNET_INFO carrierId='_Integer_' recipientsXNAddress='_AN up to 31_'" + propertyCollection + "></xmp>",
    xactNetInfoValEnd = "<xmp></XACTNET_INFO></xmp>",
    controlPointsMain1Val = "<xmp><CONTROL_POINTS " + controlCollect + "></xmp>",
    controlPoints1MainValEnd = "<xmp></CONTROL_POINTS></xmp>",
    contactCollectVal = "<xmp><CONTACT type='' name=''" + XNcontactsCollect + "></xmp>",
    contactCollectValEnd = "<xmp></CONTACT></xmp>",
    contactsMainCollectVal = "<xmp><CONTACTS></xmp>",
    contactsMainCollectValEnd = "<xmp></CONTACTS></xmp>",
    addressCollectVal = "<xmp><ADDRESS type='' country='' city='' street='' state='' postal='' " + addressMainCollect + "/></xmp>",
    addressesMainCollectVal = "<xmp><ADDRESSES></xmp>",
    addressesMainCollectValEnd = "<xmp></ADDRESSES></xmp>",
    phoneCollectVal = "<xmp><PHONE type='' number='' primary='' " + contactPhoneCollect + "/></xmp>",
    contactMethodsCollectVal = "<xmp><CONTACTMETHODS></xmp>",
    contactMethodsCollectValEnd = "<xmp></CONTACTMETHODS></xmp>",
    projectNotesCollectVal = "<xmp><NOTES><![CDATA[This is the Description Of Loss, you would want to add any additonal notes for the adjuster]]></xmp>",
    projectNotesCollectValEnd = "<xmp></NOTES></xmp>",
    projectInfoCollectVal= "<xmp><PROJECT_INFO></xmp>",
    projectInfoCollectValEnd = "<xmp></PROJECT_INFO></xmp>",
    admCollectVal= "<xmp><ADM  dateReceived='' dateOfLoss=''" + admCollect + "></xmp>",
    admCollectValEnd = "<xmp></ADM></xmp>",
    coverageCollectVal= "<xmp><COVERAGE  id='' covType='' covName='' deductible='' policyLimit='' applyTo=''" + coverageCollect + "></xmp>",
    coverageCollectValEnd = "<xmp></COVERAGE></xmp>",
    coveragesMainCollectVal= "<xmp><COVERAGES " + coveragesMainCollect + "></xmp>",
    coveragesMainCollectValEnd = "<xmp></COVERAGES></xmp>",
    covLossCollectVal= "<xmp><COVERAGE_LOSS " + coverageLossCollect  + "></xmp>",
    covLossCollectValEnd = "<xmp></COVERAGE_LOSS></xmp>";


function copyAllText(){
    $("#copyText").val($("form").html($( "xmp" ).remove()));
    //$("div").children("#copyText").html;
}

function onLoad(){
    $("#xactdoc").html(xactdocVal);
    $("#xactdocEnd").html(xactdocValEnd);
    $("#xactNetInfo").html(xactNetInfoVal);
    $("#xactNetInfoEnd").html(xactNetInfoValEnd);

    $("#contact").html(contactCollectVal);
    $("#contactEnd").html(contactCollectValEnd);
    $("#contactsMain").html(contactsMainCollectVal);
    $("#contactsMainEnd").html(contactsMainCollectValEnd);

    $("#address").html(addressCollectVal);
    $("#addressesMain").html(addressesMainCollectVal);
    $("#addressesMainEnd").html(addressesMainCollectValEnd);

    $("#phone").html(phoneCollectVal);
    $("#contactMethods").html(contactMethodsCollectVal);
    $("#contactMethodsEnd").html(contactMethodsCollectValEnd);

    $("#projectNotes").html(projectNotesCollectVal);
    $("#projectNotesEnd").html(projectNotesCollectValEnd);
    $("#projectInfo").html(projectInfoCollectVal);
    $("#projectInfoEnd").html(projectInfoCollectValEnd);

    $("#adm").html(admCollectVal);
    $("#admEnd").html(admCollectValEnd);

    $("#coverage").html(coverageCollectVal);
    $("#coverageEnd").html(coverageCollectValEnd);

    $("#coveragesMain").html(coveragesMainCollectVal);
    $("#coveragesMainEnd").html(coveragesMainCollectValEnd);

    $("#covLoss").html(covLossCollectVal);
    $("#covLossEnd").html(covLossCollectValEnd);




}
function intro(value){
    propertyCollection += value;

    document.getElementById("xactNetInfo").innerHTML = "<xmp><XACTNET_INFO carrierId='_Integer_' recipientsXNAddress=''" + propertyCollection + "></xmp>";
    document.getElementById("xactNetInfoEnd").innerHTML = "<xmp></XACTNET_INFO></xmp>";


};
function ControlPoints(value){
    controlCollect += value;

    document.getElementById("controlPointsMain1").innerHTML = "<xmp><CONTROL_POINTS " + controlCollect + "></xmp>";
    document.getElementById("controlPoints1MainEnd").innerHTML = "<xmp></CONTROL_POINTS></xmp>";

};
function CancellationComment(value){
    cancelComment += value;
    document.getElementById("cancellationComments").innerHTML = "<xmp><CANCELLATION_COMMENTS></xmp> " + cancelComment + "<xmp></CANCELLATION_COMMENTS></xmp>";

    document.getElementById("controlPointsMain1").innerHTML = "<xmp><CONTROL_POINTS " + controlCollect + "></xmp>";
    document.getElementById("controlPoints1MainEnd").innerHTML = "<xmp></CONTROL_POINTS></xmp>";

};
function ControlPoint1(value){
    controlPoint1Collect += value;
    document.getElementById("controlPoint1").innerHTML = "<xmp><CONTROL_POINT " + controlPoint1Collect + "></xmp>";
    document.getElementById("controlPoint1End").innerHTML = "<xmp></CONTROL_POINT></xmp>";

    document.getElementById("controlPointsMain1").innerHTML = "<xmp><CONTROL_POINTS " + controlCollect + "></xmp>";
    document.getElementById("controlPoints1MainEnd").innerHTML = "<xmp></CONTROL_POINTS></xmp>";

};
function cpNotes(value){
    cpNoteCollect += value;
    document.getElementById("cpNotes").innerHTML = "<xmp><NOTES></xmp>" + cpNoteCollect + "<xmp></NOTES></xmp>";

    document.getElementById("controlPoint1").innerHTML = "<xmp><CONTROL_POINT " + controlPoint1Collect + "></xmp>";
    document.getElementById("controlPoint1End").innerHTML = "<xmp></CONTROL_POINT></xmp>";

    document.getElementById("controlPointsMain1").innerHTML = "<xmp><CONTROL_POINTS " + controlCollect + "></xmp>";
    document.getElementById("controlPoints1MainEnd").innerHTML = "<xmp></CONTROL_POINTS></xmp>";

};
function ThirdPartyURL(value){
    thirdPartyURLCollect += value;
    document.getElementById("thirdPartyURL").innerHTML = "<xmp><THIRD_PARTY_URL></xmp>" + thirdPartyURLCollect + "<xmp></THIRD_PARTY_URL></xmp>";
};
function Contacts(value){
    XNcontactsCollect += value;

    document.getElementById("contact").innerHTML = "<xmp><CONTACT type='' name=''" + XNcontactsCollect + "></xmp>";
    document.getElementById("contactEnd").innerHTML = "<xmp></CONTACT></xmp>";
    document.getElementById("contactsMain").innerHTML = "<xmp><CONTACTS></xmp>";
    document.getElementById("contactsMainEnd").innerHTML = "<xmp></CONTACTS></xmp>";
};
function mortgageMain(value){
    mortgageCollect += value;
    document.getElementById("mortgage").innerHTML = "<xmp><MORTGAGE " + mortgageCollect + "></xmp>";
    document.getElementById("mortgageEnd").innerHTML = "<xmp></MORTGAGE></xmp>";
    document.getElementById("mortgagesMain").innerHTML = "<xmp><MORTGAGES></xmp>";
    document.getElementById("mortgagesMainEnd").innerHTML = "<xmp></MORTGAGES></xmp>";

    document.getElementById("contact").innerHTML = "<xmp><CONTACT " + XNcontactsCollect + "></xmp>";
    document.getElementById("contactEnd").innerHTML = "<xmp></CONTACT></xmp>";
    document.getElementById("contactsMain").innerHTML = "<xmp><CONTACTS></xmp>";
    document.getElementById("contactsMainEnd").innerHTML = "<xmp></CONTACTS></xmp>";

};
function addressesMain(value){
    addressMainCollect += value;
    document.getElementById("address").innerHTML = "<xmp><ADDRESS type='' country='' city='' street='' state='' postal='' " + addressMainCollect + "/></xmp>";
    document.getElementById("addressesMain").innerHTML = "<xmp><ADDRESSES></xmp>";
    document.getElementById("addressesMainEnd").innerHTML = "<xmp></ADDRESSES></xmp>";

    document.getElementById("contact").innerHTML = "<xmp><CONTACT " + XNcontactsCollect + "></xmp>";
    document.getElementById("contactEnd").innerHTML = "<xmp></CONTACT></xmp>";
    document.getElementById("contactsMain").innerHTML = "<xmp><CONTACTS></xmp>";
    document.getElementById("contactsMainEnd").innerHTML = "<xmp></CONTACTS></xmp>";


};
function contactMethodsPhone(value){
    contactPhoneCollect += value;
    document.getElementById("phone").innerHTML = "<xmp><PHONE type='' number='' primary='' " + contactPhoneCollect + "/></xmp>";
    document.getElementById("contactMethods").innerHTML = "<xmp><CONTACTMETHODS></xmp>";
    document.getElementById("contactMethodsEnd").innerHTML = "<xmp></CONTACTMETHODS></xmp>";

    document.getElementById("contact").innerHTML = "<xmp><CONTACT " + XNcontactsCollect + "></xmp>";
    document.getElementById("contactEnd").innerHTML = "<xmp></CONTACT></xmp>";
    document.getElementById("contactsMain").innerHTML = "<xmp><CONTACTS></xmp>";
    document.getElementById("contactsMainEnd").innerHTML = "<xmp></CONTACTS></xmp>";
};
function contactMethodsEmail(value) {
    contactEmailCollect += value;
    document.getElementById("email").innerHTML = "<xmp><EMAIL " + contactEmailCollect + "/></xmp>";
    document.getElementById("contactMethods").innerHTML = "<xmp><CONTACTMETHODS></xmp>";
    document.getElementById("contactMethodsEnd").innerHTML = "<xmp></CONTACTMETHODS></xmp>";

    document.getElementById("contact").innerHTML = "<xmp><CONTACT " + XNcontactsCollect + "></xmp>";
    document.getElementById("contactEnd").innerHTML = "<xmp></CONTACT></xmp>";
    document.getElementById("contactsMain").innerHTML = "<xmp><CONTACTS></xmp>";
    document.getElementById("contactsMainEnd").innerHTML = "<xmp></CONTACTS></xmp>";

};
function CompanyAddresses(value) {
    compAddressCollect += value;
    document.getElementById("companyAddress").innerHTML = "<xmp><ADDRESS " + addressMainCollect + "/></xmp>";
    document.getElementById("companyAddresses").innerHTML = "<xmp><ADDRESSES></xmp>";
    document.getElementById("companyAddressesEnd").innerHTML = "<xmp></ADDRESSES></xmp>";
    document.getElementById("company").innerHTML = "<xmp><COMPANY " + compAddressCollect + "></xmp>";
    document.getElementById("companyEnd").innerHTML = "<xmp></COMPANY></xmp>";

    document.getElementById("compEmail").innerHTML = "<xmp><EMAIL " + compEmailCollect + "/></xmp>";
    document.getElementById("compContactMethods").innerHTML = "<xmp><CONTACTMETHODS></xmp>";
    document.getElementById("compContactMethodsEnd").innerHTML = "<xmp></CONTACTMETHODS></xmp>"

    document.getElementById("compPhone").innerHTML = "<xmp><PHONE " + compPhoneCollect + "/></xmp>";
    document.getElementById("compContactMethods").innerHTML = "<xmp><CONTACTMETHODS></xmp>";
    document.getElementById("compContactMethodsEnd").innerHTML = "<xmp></CONTACTMETHODS></xmp>";

    document.getElementById("contact").innerHTML = "<xmp><CONTACT " + XNcontactsCollect + "></xmp>";
    document.getElementById("contactEnd").innerHTML = "<xmp></CONTACT></xmp>";
    document.getElementById("contactsMain").innerHTML = "<xmp><CONTACTS></xmp>";
    document.getElementById("contactsMainEnd").innerHTML = "<xmp></CONTACTS></xmp>";

};
//function contactMethodsPhone(value){
//    compPhoneCollect += value;
//    document.getElementById("compPhone").innerHTML = "<xmp><PHONE " + compPhoneCollect + "></PHONE></xmp>";
//    document.getElementById("compContactMethods").innerHTML = "<xmp><CONTACTMETHODS></xmp>";
//    document.getElementById("compContactMethodsEnd").innerHTML = "<xmp></CONTACTMETHODS></xmp>";
//};
//function contactMethodsEmail(value) {
//    compEmailCollect += value;
//    document.getElementById("compEmail").innerHTML = "<xmp><EMAIL " + compEmailCollect + "></EMAIL></xmp>";
//    document.getElementById("compContactMethods").innerHTML = "<xmp><CONTACTMETHODS></xmp>";
//    document.getElementById("compContactMethodsEnd").innerHTML = "<xmp></CONTACTMETHODS></xmp>";
//
//};
function companyMain(value) {
    compMainCollect += value;
    document.getElementById("companyMain").innerHTML = "<xmp><COMPANY " + compMainCollect + "></xmp>";
    document.getElementById("companyMainEnd").innerHTML = "<xmp></COMPANY></xmp>";

    document.getElementById("contactsMain").innerHTML = "<xmp><CONTACTS></xmp>";
    document.getElementById("contactsMainEnd").innerHTML = "<xmp></CONTACTS></xmp>";
};
function companyMainAddress(value) {
    compMainAddressCollect += value;
    document.getElementById("companyMainAddress").innerHTML = "<xmp><ADDRESS " + compMainAddressCollect + "/></xmp>";

    document.getElementById("companyMainAddresses").innerHTML = "<xmp><ADDRESSES></xmp>";
    document.getElementById("companyMainAddressesEnd").innerHTML = "<xmp></ADDRESSES></xmp>";

    document.getElementById("contactsMain").innerHTML = "<xmp><COMPANY></xmp>";
    document.getElementById("companyMainEnd").innerHTML = "<xmp></COMPANY></xmp>";

    document.getElementById("compMainEmail").innerHTML = "<xmp><EMAIL " + compMainEmailCollect + "/></xmp>";
    document.getElementById("compMainContactMethods").innerHTML = "<xmp><CONTACTMETHODS></xmp>";
    document.getElementById("compMainContactMethodsEnd").innerHTML = "<xmp></CONTACTMETHODS></xmp>"

    document.getElementById("compMainPhone").innerHTML = "<xmp><PHONE " + compMainPhoneCollect + "/></xmp>";
    document.getElementById("compMainContactMethods").innerHTML = "<xmp><CONTACTMETHODS></xmp>";
    document.getElementById("compMainContactMethodsEnd").innerHTML = "<xmp></CONTACTMETHODS></xmp>";

};
function projectInfo(value){
    projectInfoCollect += value;
    document.getElementById("projectNotes").innerHTML = "<xmp><NOTES><![CDATA[This is the Description Of Loss, you would want to add any additonal notes for the adjuster]]></xmp>";
    document.getElementById("projectNotesEnd").innerHTML = "<xmp></NOTES></xmp>";
    document.getElementById("projectInfo").innerHTML = "<xmp><PROJECT_INFO></xmp>";
    document.getElementById("projectInfoEnd").innerHTML = "<xmp></PROJECT_INFO></xmp>";
};
function lossInfo(value){
    lossInfoCollect += value;
    document.getElementById("lossInfo").innerHTML = "<xmp><LOSS_INFO " + lossInfoCollect + "/></xmp>";
    document.getElementById("claimInfo").innerHTML = "<xmp><CLAIM_INFO></xmp>";
    document.getElementById("claimInfoEnd").innerHTML = "<xmp></CLAIM_INFO></xmp>";
};
function adminInfo(value){
    adminInfoCollect += value;
    document.getElementById("adminInfo").innerHTML = "<xmp><ADMIN_INFO " + adminInfoCollect + "/></xmp>";
    document.getElementById("claimInfo").innerHTML = "<xmp><CLAIM_INFO></xmp>";
    document.getElementById("claimInfoEnd").innerHTML = "<xmp></CLAIM_INFO></xmp>";
};
//for some reason Insurance Client is pulling in undefined
function insuranceClient(value){
    insuranceClientCollect += value;
    document.getElementById("insuranceClient").innerHTML = "<xmp><INSURANCE_CLIENT " + insuranceClientCollect + "></xmp>";
    document.getElementById("insuranceClientEnd").innerHTML = "<xmp></INSURANCE_CLIENT></xmp>";
    document.getElementById("claimInfo").innerHTML = "<xmp><CLAIM_INFO></xmp>";
    document.getElementById("claimInfoEnd").innerHTML = "<xmp></CLAIM_INFO></xmp>";
};
function ICAddresses(value){
    ICAddressCollect += value;
    document.getElementById("ICAddress").innerHTML = "<xmp><ADDRESS " + ICAddressCollect + "/></xmp>";

    document.getElementById("ICAddressesMain").innerHTML = "<xmp><ADDRESSES></xmp>";
    document.getElementById("ICAddressesMainEnd").innerHTML = "<xmp></ADDRESSES></xmp>";


    document.getElementById("claimInfo").innerHTML = "<xmp><CLAIM_INFO></xmp>";
    document.getElementById("claimInfoEnd").innerHTML = "<xmp></CLAIM_INFO></xmp>";
};
function ICPhone(value){
    ICPhoneCollect += value;
    document.getElementById("ICphone").innerHTML = "<xmp><PHONE " + ICPhoneCollect + "/></xmp>";
    document.getElementById("ICcontactMethods").innerHTML = "<xmp><CONTACTMETHODS></xmp>";
    document.getElementById("ICcontactMethodsEnd").innerHTML = "<xmp></CONTACTMETHODS></xmp>";

    document.getElementById("insuranceClient").innerHTML = "<xmp><INSURANCE_CLIENT " + insuranceClientCollect + "></xmp>";
    document.getElementById("insuranceClientEnd").innerHTML = "<xmp></INSURANCE_CLIENT></xmp>";
    document.getElementById("claimInfo").innerHTML = "<xmp><CLAIM_INFO></xmp>";
    document.getElementById("claimInfoEnd").innerHTML = "<xmp></CLAIM_INFO></xmp>";
};
function ICEmail(value) {
    ICEmailCollect += value;
    document.getElementById("ICemail").innerHTML = "<xmp><EMAIL " + ICEmailCollect + "/></xmp>";
    document.getElementById("ICcontactMethods").innerHTML = "<xmp><CONTACTMETHODS></xmp>";
    document.getElementById("ICcontactMethodsEnd").innerHTML = "<xmp></CONTACTMETHODS></xmp>";

    document.getElementById("insuranceClient").innerHTML = "<xmp><INSURANCE_CLIENT " + insuranceClientCollect + "></xmp>";
    document.getElementById("insuranceClientEnd").innerHTML = "<xmp></INSURANCE_CLIENT></xmp>";
    document.getElementById("claimInfo").innerHTML = "<xmp><CLAIM_INFO></xmp>";
    document.getElementById("claimInfoEnd").innerHTML = "<xmp></CLAIM_INFO></xmp>";
};
function assignmentReferral(value){
    assignmentReferralCollect += value;
    document.getElementById("retProdPref").innerHTML = "<xmp><RETURN_PRODUCT_PREFERENCE " + assignmentReferralCollect + "/></xmp>";
    document.getElementById("assignmentReferral").innerHTML = "<xmp><ASSIGNMENT_REFERRAL></xmp>";
    document.getElementById("assignmentReferralEnd").innerHTML = "<xmp></ASSIGNMENT_REFERRAL></xmp>";

    document.getElementById("claimInfo").innerHTML = "<xmp><CLAIM_INFO></xmp>";
    document.getElementById("claimInfoEnd").innerHTML = "<xmp></CLAIM_INFO></xmp>";

};
function billingArrangement(value){
    billingArrangementCollect += value;
    document.getElementById("billingArrang").innerHTML = "<xmp><BILLING_ARRANGEMENT " + billingArrangementCollect + "/></xmp>";
    document.getElementById("assignmentReferral").innerHTML = "<xmp><ASSIGNMENT_REFERRAL></xmp>";
    document.getElementById("assignmentReferralEnd").innerHTML = "<xmp></ASSIGNMENT_REFERRAL></xmp>";

    document.getElementById("claimInfo").innerHTML = "<xmp><CLAIM_INFO></xmp>";
    document.getElementById("claimInfoEnd").innerHTML = "<xmp></CLAIM_INFO></xmp>";

};
function adm(value){
    admCollect += value;
    document.getElementById("adm").innerHTML = "<xmp><ADM  dateReceived='' dateOfLoss=''" + admCollect + "></xmp>";
    document.getElementById("admEnd").innerHTML = "<xmp></ADM></xmp>";
};
function subrogationNote(value){
    subrogationNoteCollect += value;
    document.getElementById("subrogationNote").innerHTML = "<xmp><SUBROGATION_NOTES></xmp>" + subrogationNoteCollect;
    document.getElementById("subrogationNoteEnd").innerHTML = "<xmp></SUBROGATION_NOTES></xmp>";

    document.getElementById("adm").innerHTML = "<xmp><ADM " + admCollect + "></xmp>";
    document.getElementById("admEnd").innerHTML = "<xmp></ADM></xmp>";

};
function coverageLoss(value){
    coverageLossCollect += value;
    document.getElementById("covLoss").innerHTML = "<xmp><COVERAGE_LOSS " + coverageLossCollect  + "></xmp>";
    document.getElementById("covLossEnd").innerHTML = "<xmp></COVERAGE_LOSS></xmp>";

    document.getElementById("adm").innerHTML = "<xmp><ADM " + admCollect + "></xmp>";
    document.getElementById("admEnd").innerHTML = "<xmp></ADM></xmp>";

};
function coverageNote(value){
    coverageNoteCollect += value;
    document.getElementById("covNotes").innerHTML = "<xmp><coverageNotes></xmp>" + coverageNoteCollect;
    document.getElementById("covNotesEnd").innerHTML = "<xmp></coverageNotes></xmp>";

    document.getElementById("covLoss").innerHTML = "<xmp><COVERAGE_LOSS " + coverageLossCollect  + "></xmp>";
    document.getElementById("covLossEnd").innerHTML = "<xmp></COVERAGE_LOSS></xmp>";

    document.getElementById("adm").innerHTML = "<xmp><ADM " + admCollect + "></xmp>";
    document.getElementById("admEnd").innerHTML = "<xmp></ADM></xmp>";

};
function coveragesMain(value){
    coveragesMainCollect += value;
    document.getElementById("coveragesMain").innerHTML = "<xmp><COVERAGES " + coveragesMainCollect + "></xmp>";
    document.getElementById("coveragesMainEnd").innerHTML = "<xmp></COVERAGES></xmp>";

    document.getElementById("covLoss").innerHTML = "<xmp><COVERAGE_LOSS " + coverageLossCollect  + "></xmp>";
    document.getElementById("covLossEnd").innerHTML = "<xmp></COVERAGE_LOSS></xmp>";

    document.getElementById("adm").innerHTML = "<xmp><ADM " + admCollect + "></xmp>";
    document.getElementById("admEnd").innerHTML = "<xmp></ADM></xmp>";

};
function coverage(value){
    coverageCollect += value;
    document.getElementById("coverage").innerHTML = "<xmp><COVERAGE  id='' covType='' covName='' deductible='' policyLimit='' applyTo=''" + coverageCollect + "></xmp>";
    document.getElementById("coverageEnd").innerHTML = "<xmp></COVERAGE></xmp>";

    document.getElementById("coveragesMain").innerHTML = "<xmp><COVERAGES " + coveragesMainCollect + "></xmp>";
    document.getElementById("coveragesMainEnd").innerHTML = "<xmp></COVERAGES></xmp>";

    document.getElementById("covLoss").innerHTML = "<xmp><COVERAGE_LOSS " + coverageLossCollect  + "></xmp>";
    document.getElementById("covLossEnd").innerHTML = "<xmp></COVERAGE_LOSS></xmp>";

    document.getElementById("adm").innerHTML = "<xmp><ADM " + admCollect + "></xmp>";
    document.getElementById("admEnd").innerHTML = "<xmp></ADM></xmp>";

};
function subLimits(value){
    subLimitsCollect += value;
    document.getElementById("addSublimit").innerHTML = "<xmp><ADD_SUBLIMIT " + subLimitsCollect + "></xmp>";
    document.getElementById("addSublimitEnd").innerHTML = "<xmp></ADD_SUBLIMIT></xmp>";

    document.getElementById("addSublimitsMain").innerHTML = "<xmp><ADD_SUBLIMITS></xmp>";
    document.getElementById("addSublimitsMainEnd").innerHTML = "<xmp></ADD_SUBLIMITS></xmp>";

    document.getElementById("coverage").innerHTML = "<xmp><COVERAGE " + coverageCollect + "></xmp>";
    document.getElementById("coverageEnd").innerHTML = "<xmp></COVERAGE></xmp>";

    document.getElementById("coveragesMain").innerHTML = "<xmp><COVERAGES " + coveragesMainCollect + "></xmp>";
    document.getElementById("coveragesMainEnd").innerHTML = "<xmp></COVERAGES></xmp>";

    document.getElementById("covLoss").innerHTML = "<xmp><COVERAGE_LOSS " + coverageLossCollect  + "></xmp>";
    document.getElementById("covLossEnd").innerHTML = "<xmp></COVERAGE_LOSS></xmp>";

    document.getElementById("adm").innerHTML = "<xmp><ADM " + admCollect + "></xmp>";
    document.getElementById("admEnd").innerHTML = "<xmp></ADM></xmp>";

};
function typeOfLoss(value){
    tolCollect += value;
    document.getElementById("tol").innerHTML = "<xmp><TOL desc='' code=''" + tolCollect + "></xmp>";
    document.getElementById("tolEnd").innerHTML = "<xmp></TOL></xmp>";

    document.getElementById("covLoss").innerHTML = "<xmp><COVERAGE_LOSS " + coverageLossCollect  + "></xmp>";
    document.getElementById("covLossEnd").innerHTML = "<xmp></COVERAGE_LOSS></xmp>";

    document.getElementById("adm").innerHTML = "<xmp><ADM " + admCollect + "></xmp>";
    document.getElementById("admEnd").innerHTML = "<xmp></ADM></xmp>";

};
function causeOfLoss(value){
    colCollect += value;
    document.getElementById("col").innerHTML = "<xmp><COL" + colCollect + "/></xmp>";

    document.getElementById("tol").innerHTML = "<xmp><TOL" + tolCollect + "></xmp>";
    document.getElementById("tolEnd").innerHTML = "<xmp></TOL></xmp>";

    document.getElementById("covLoss").innerHTML = "<xmp><COVERAGE_LOSS " + coverageLossCollect  + "></xmp>";
    document.getElementById("covLossEnd").innerHTML = "<xmp></COVERAGE_LOSS></xmp>";

    document.getElementById("adm").innerHTML = "<xmp><ADM " + admCollect + "></xmp>";
    document.getElementById("admEnd").innerHTML = "<xmp></ADM></xmp>";

};
function Forms(value){
    formsCollect += value;
    document.getElementById("form").innerHTML = "<xmp><FORM " + formsCollect + "/></xmp>";

    document.getElementById("formsMain").innerHTML = "<xmp><FORMS></xmp>";
    document.getElementById("formsMainEnd").innerHTML = "<xmp></FORMS></xmp>";

    document.getElementById("covLoss").innerHTML = "<xmp><COVERAGE_LOSS " + coverageLossCollect  + "></xmp>";
    document.getElementById("covLossEnd").innerHTML = "<xmp></COVERAGE_LOSS></xmp>";

    document.getElementById("adm").innerHTML = "<xmp><ADM " + admCollect + "></xmp>";
    document.getElementById("admEnd").innerHTML = "<xmp></ADM></xmp>";

};
function params(value) {
    paramsCollect += value;
    document.getElementById("form").innerHTML = "<xmp><PARAMS " + paramsCollect + "/></xmp>";
};/**
 * Created by DanTutt on 12/2/15.
 */
