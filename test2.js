<?xml version="1.0" encoding="utf-8"?>
<configuration>
    <configSections>
        <sectionGroup name="applicationSettings" type="System.Configuration.ApplicationSettingsGroup, System, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089">
            <section name="PeopleCentralADSync.My.MySettings" type="System.Configuration.ClientSettingsSection, System, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" requirePermission="false"/>
        </sectionGroup>
    </configSections>
    <system.diagnostics>
        <sources>
            <!-- This section defines the logging configuration for My.Application.Log -->
            <source name="DefaultSource" switchName="DefaultSwitch">
                <listeners>
                    <add name="FileLog"/>
                    <!-- Uncomment the below section to write to the Application Event Log -->
                    <!--<add name="EventLog"/>-->
                </listeners>
            </source>
        </sources>
        <switches>
            <add name="DefaultSwitch" value="Information"/>
        </switches>
        <sharedListeners>
            <add name="FileLog" type="Microsoft.VisualBasic.Logging.FileLogTraceListener, Microsoft.VisualBasic, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a, processorArchitecture=MSIL" initializeData="FileLogWriter"/>
            <!-- Uncomment the below section and replace APPLICATION_NAME with the name of your application to write to the Application Event Log -->
            <!--<add name="EventLog" type="System.Diagnostics.EventLogTraceListener" initializeData="APPLICATION_NAME"/> -->
        </sharedListeners>
    </system.diagnostics>
    <applicationSettings>
        <PeopleCentralADSync.My.MySettings>
            <setting name="PeopleCentralEnvironmentKey" serializeAs="String">
                <value>PeopleCentralADSync</value>
            </setting>
            <setting name="PeopleCentralWebServiceURL" serializeAs="String">
                <value>FOR FUTURE USE</value>
            </setting>
            <setting name="EmailWebServiceURL" serializeAs="String">
                <value>http://CommonApp.parl.gc.ca/EMailServices/EMail.asmx</value>
            </setting>
            <setting name="ADQuerySid" serializeAs="String">
                <value>(&amp;(objectCategory=Person)(objectClass=user)(objectSid={0}))</value>
            </setting>
            <setting name="ADQueryEmail" serializeAs="String">
                <value>(&amp;(objectCategory=Person)(objectClass=user)(mail={0}))</value>
            </setting>
            <setting name="ADQueryLogin" serializeAs="String">
                <value>(&amp;(objectCategory=Person)(objectClass=user)(SAMAccountName={0}))</value>
            </setting>
            <setting name="ADProperties" serializeAs="String">
                <value>&lt;properties&gt;
	&lt;property key="accountName" ldap="sAMAccountName" maxlength="-1" updatable="false" /&gt;
	&lt;property key="accountSid" ldap="objectSid" maxlength="-1" updatable="false" /&gt;
	&lt;property key="address" ldap="streetAddress" maxlength="1024" updatable="true" /&gt;
	&lt;property key="city" ldap="l" maxlength="128" updatable="true" /&gt;
	&lt;property key="company" ldap="company" maxlength="64" updatable="true" /&gt;
	&lt;property key="country" ldap="c" maxlength="2" updatable="true" /&gt;
	&lt;property key="department" ldap="department" maxlength="64" updatable="true" /&gt;
	&lt;property key="displayName" ldap="displayName" maxlength="256" updatable="true" /&gt;
	&lt;property key="distinguishedName" ldap="distinguishedName" maxlength="-1" updatable="false" /&gt;
	&lt;property key="employeeId" ldap="employeeID" maxlength="16" updatable="true" /&gt;
	&lt;property key="extensionAttribute13" ldap="extensionAttribute13" maxlength="64" updatable="true" /&gt;
	&lt;property key="extensionAttribute14" ldap="extensionAttribute14" maxlength="64" updatable="true" /&gt;
	&lt;property key="fax" ldap="facsimileTelephoneNumber" maxlength="64" updatable="true" /&gt;
	&lt;property key="firstName" ldap="givenName" maxlength="64" updatable="true" /&gt;
	&lt;property key="initials" ldap="initials" maxlength="6" updatable="true" /&gt;
	&lt;property key="lastName" ldap="sn" maxlength="64" updatable="true" /&gt;
	&lt;property key="mail" ldap="mail" maxlength="-1" updatable="false" /&gt;
	&lt;property key="manager" ldap="manager" maxlength="-1" updatable="true" /&gt;
	&lt;property key="mobile" ldap="mobile" maxlength="64" updatable="true" /&gt;
	&lt;property key="office" ldap="physicalDeliveryOfficeName" maxlength="128" updatable="true" /&gt;
	&lt;property key="pager" ldap="pager" maxlength="64" updatable="true" /&gt;
	&lt;property key="phone" ldap="telephoneNumber" maxlength="64" updatable="true" /&gt;
	&lt;property key="poBox" ldap="postOfficeBox" maxlength="40" updatable="true" /&gt;
	&lt;property key="postalCode" ldap="postalCode" maxlength="40" updatable="true" /&gt;
	&lt;property key="province" ldap="st" maxlength="128" updatable="true" /&gt;
	&lt;property key="title" ldap="title" maxlength="64" updatable="true" /&gt;
	&lt;property key="webURL" ldap="wWWHomePage" maxlength="2048" updatable="true" /&gt;
&lt;/properties&gt;</value>
            </setting>
            <setting name="PhoneNumberFormat" serializeAs="String">
                <value>+1 ###-###-####</value>
            </setting>
            <setting name="PostalCodeFormat" serializeAs="String">
                <value>### ###</value>
            </setting>
            <setting name="AddressFormatEn" serializeAs="String">
                <value>&lt;({0}), &gt;&lt;Floor ({1}), &gt;&lt;Room ({2})&gt;</value>
            </setting>
            <setting name="AddressFormatFr" serializeAs="String">
                <value>&lt;({0}), &gt;&lt;Étage ({1}), &gt;&lt;Pièce ({2})&gt;</value>
            </setting>
            <setting name="BilingualPropertySeparator" serializeAs="String">
                <value> / </value>
            </setting>
            <setting name="EMailFrom" serializeAs="String">
                <value>People Central AD Synchronization &lt;PeopleCentralADSync_WVM1PPAPPDSSHR1@parl.gc.ca&gt;</value>
            </setting>
            <setting name="EMailSubject" serializeAs="String">
                <value>People Central AD Synchronization - {0}</value>
            </setting>
            <setting name="EMailEnabled" serializeAs="String">
                <value>True</value>
            </setting>
            <setting name="LogAccountNotFound" serializeAs="String">
                <value>False</value>
            </setting>
            <setting name="LogAccountNotMatching" serializeAs="String">
                <value>False</value>
            </setting>
            <setting name="LogEmaiNotMatching" serializeAs="String">
                <value>True</value>
            </setting>
            <setting name="LogFileNameXML" serializeAs="String">
                <value>ADSyncLog{0}.xml</value>
            </setting>
            <setting name="LogFileNameHTML" serializeAs="String">
                <value>ADSyncLog{0}.htm</value>
            </setting>
            <setting name="IncludeErrorDetails" serializeAs="String">
                <value>False</value>
            </setting>
            <setting name="TestingMode" serializeAs="String">
                <value>False</value>
            </setting>
            <setting name="LOPWebServiceURL" serializeAs="String">
                <value>http://lpbpservices/staffdirectoryws/exporttointratel.asmx</value>
            </setting>
            <setting name="PeopleCentralADSync_EMailServices_Email" serializeAs="String">
                <value>http://commonapp/emailservices/email.asmx</value>
            </setting>
            <setting name="ADQueryEmailAlternate" serializeAs="String">
                <value>(&amp;(objectCategory=Person)(objectClass=user)(proxyAddresses=*SMTP:{0}*))</value>
            </setting>
            <setting name="AccountsToClear" serializeAs="String">
                <!--
                Enter email addresses (seperated by ';') of accounts to clear. Once they have been cleared, remove them from here.
                Example: <value>Joel.Sabourin-Poirier@parl.gc.ca;Steve.Larrivee@parl.gc.ca</value>
                -->
                <value></value>
            </setting>
            <setting name="ValidateEmployee" serializeAs="String">
                <value>True</value>
            </setting>
            <setting name="ValidateName" serializeAs="String">
                <value>True</value>
            </setting>
            <setting name="ADAccountRoot" serializeAs="String">
                <value>LDAP://hoc-cdc.ca/OU=Accounts,DC=hoc-cdc,DC=ca</value>
            </setting>
            <setting name="OverwriteEmployeeIDForRoleID" serializeAs="String">
                <value>1</value>
            </setting>
            <setting name="OverwriteDisplayNamesForRoleID" serializeAs="String">
                <value>1,28,29,30,31,32</value>
            </setting>
            <setting name="OverwriteAddressForRoleID" serializeAs="String">
                <value>1,28,29,30,31,32</value>
            </setting>
            <setting name="OverwriteTelephoneForRoleID" serializeAs="String">
                <value>1,28,29,30,31,32</value>
            </setting>
            <setting name="OverwriteTitleForRoleID" serializeAs="String">
                <value>1,28,29,30,31,32</value>
            </setting>
            <setting name="OverwriteDepartmentForRoleID" serializeAs="String">
                <value>1,28,29,30,31,32</value>
            </setting>
            <setting name="OverwriteCompanyForRoleID" serializeAs="String">
                <value>1,28,29,30,31,32</value>
            </setting>
            <setting name="OverwriteManagerForRoleID" serializeAs="String">
                <value>1,29,30,31,32</value>
            </setting>
            <setting name="SimulationMode" serializeAs="String">
                <value>False</value>
            </setting>
            <setting name="EMailTo" serializeAs="String">
                <value>actmgt@parl.gc.ca</value>
            </setting>
            <setting name="EMailToError" serializeAs="String">
                <value>ISITMSAPPALERTS@parl.gc.ca;joel.sabourin-poirier@parl.gc.ca</value>
            </setting>
            <setting name="LOPDisplayNameSuffix" serializeAs="String">
                <value> : LOP-BDP</value>
            </setting>
            <setting name="MPStaffDisplayNameFormatEnglishMasc" serializeAs="String">
                <value>{0}, {1} ({2}, {3} - MP)</value>
            </setting>
            <setting name="MPStaffDisplayNameFormatEnglishFem" serializeAs="String">
                <value>{0}, {1} ({2}, {3} - MP)</value>
            </setting>
            <setting name="MPStaffDisplayNameFormatFrenchMasc" serializeAs="String">
                <value>{0}, {1} ({2}, {3} - Député)</value>
            </setting>
            <setting name="MPStaffDisplayNameFormatFrenchFem" serializeAs="String">
                <value>{0}, {1} ({2}, {3} - Députée)</value>
            </setting>
            <setting name="MPDisplayNameFormatEnglish" serializeAs="String">
                <value>{0}, {1} - Personal</value>
            </setting>
            <setting name="MPDisplayNameFormatFrench" serializeAs="String">
                <value>{0}, {1} - Personnel</value>
            </setting>
            <setting name="PBODisplayNameSuffix" serializeAs="String">
                <value> : PBO-DPB</value>
            </setting>
			<setting name="PPSDisplayNameSuffix" serializeAs="String">
                <value> : PPS-SPP</value>
            </setting>			
        </PeopleCentralADSync.My.MySettings>
    </applicationSettings>
<startup><supportedRuntime version="v4.0" sku=".NETFramework,Version=v4.6.1"/></startup>
</configuration>
