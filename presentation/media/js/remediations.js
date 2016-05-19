var remediationDefinitions = {"UPDATE_OLD_VSE":{"identifier":"UPDATE_OLD_VSE","description":"Update VirusScan Enterprise to the latest recommended version. See https://kc.mcafee.com/corporate/index?page=content&id=kb51111 for more information."},"SET_NP":{"identifier":"SET_NP","description":"On 32-bit Windows 7, set the EnableLowVaAccess registry value under HKLM\\System\\CurrentControlSet\\Session Manager\\Memory Management\\ to 0"},"UPGRADE_TO_NEWER_PROCESSOR":{"identifier":"UPGRADE_TO_NEWER_PROCESSOR","description":"Upgrade to a system with a newer processor that supports DEP"},"ENFORCE_APPLOCKER_RULESET":{"identifier":"ENFORCE_APPLOCKER_RULESET","description":"Change the AppLocker rule set '{0}' to enforcement mode"},"UPDATE_HIPS_CONTENT":{"identifier":"UPDATE_HIPS_CONTENT","description":"Update HIPS security content to the latest version"},"UPGRADE_TO_8_FOLLOW_2264107":{"identifier":"UPGRADE_TO_8_FOLLOW_2264107","description":"Upgrade to Windows 8+. Follow instructions in Microsoft Knowledge Base article 2264107 to set registry value CWDIllegalInDLLSearch to 2"},"SET_ARTEMIS_SENSITIVITY_MEDIUM":{"identifier":"SET_ARTEMIS_SENSITIVITY_MEDIUM","description":"Set the GTI Sensitivity Level to Medium or higher"},"INSTALL_SSP_PATCH":{"identifier":"INSTALL_SSP_PATCH","description":"Install the secure search path patch and follow instructions in Microsoft Knowledge Base article 2264107 to set registry value CWDIllegalInDLLSearch to 2 under HKLM\\System\\CurrentControlSet\\Session Manager\\"},"UPGRADE_TO_7SP1_PATCH":{"identifier":"UPGRADE_TO_7SP1_PATCH","description":"Upgrade to Windows 7 SP1 and ensure system is fully patched"},"UPGRADE_TO_64BIT_7_PLUS":{"identifier":"UPGRADE_TO_64BIT_7_PLUS","description":"Upgrade to 64-bit operating system, Windows 7 or later"},"ADD_SRP_WHITELIST_RULE":{"identifier":"ADD_SRP_WHITELIST_RULE","description":"Add a whitelist rule for '{0}' to SRP"},"UPDATE_HIPS":{"identifier":"UPDATE_HIPS","description":"Update HIPS to the latest version"},"ACF_ENABLE_DEP_FOR_APP":{"identifier":"ACF_ENABLE_DEP_FOR_APP","description":"Set application AppCompatFlags registry value for application to EnableNxShowUI or EnableNxHideUI"},"START_VSE_SERVICE":{"identifier":"START_VSE_SERVICE","description":"Start the VirusScan Enterprise service"},"SECURITY_PATCH_OS":{"identifier":"SECURITY_PATCH_OS","description":"Patch the operating system with recent security updates"},"SET_VSE_SERVICE_AUTO":{"identifier":"SET_VSE_SERVICE_AUTO","description":"Change the VirusScan Enterprise service Startup Type to Automatic"},"DOMAIN_ADMIN_LOGON_REMEDIATION_SERVER":{"identifier":"DOMAIN_ADMIN_LOGON_REMEDIATION_SERVER","description":"Do not use Domain Admin accounts on member servers"},"UPDATE_VERY_OLD_VSE":{"identifier":"UPDATE_VERY_OLD_VSE","description":"Update VirusScan Enterprise to the minimum recommended version. See https://kc.mcafee.com/corporate/index?page=content&id=kb51111 for more information."},"DOMAIN_ADMIN_LOGON_REMEDIATION_WORKSTATION":{"identifier":"DOMAIN_ADMIN_LOGON_REMEDIATION_WORKSTATION","description":"Do not use Domain Admin accounts on workstations"},"HIPS_LOG_LOW":{"identifier":"HIPS_LOG_LOW","description":"Change the HIPS Protection policy so low severity events are at least set to Log"},"DISABLE_HIPS_AUDIT_MODE":{"identifier":"DISABLE_HIPS_AUDIT_MODE","description":"Disable HIPS adaptive mode (aka audit mode)"},"UPGRADE_TO_8_1_PATCH":{"identifier":"UPGRADE_TO_8_1_PATCH","description":"Install patch KB3000850 on Windows 8.1/Windows Server 2012 R2"},"CHECK_ARTEMIS_CONNECTIVITY":{"identifier":"CHECK_ARTEMIS_CONNECTIVITY","description":"Investigate GTI connectivity issues"},"CHECK_ARTMIS_CONFIGURATION":{"identifier":"CHECK_ARTMIS_CONFIGURATION","description":"Confirm GTI network configuration is correct"},"ENABLE_ARTEMIS":{"identifier":"ENABLE_ARTEMIS","description":"Enable GTI"},"HIPS_PREVENT_MEDIUM":{"identifier":"HIPS_PREVENT_MEDIUM","description":"Change the HIPS Protection policy so medium severity events are set to Prevent"},"UPGRADE_TO_WINDOWS_8_1":{"identifier":"UPGRADE_TO_WINDOWS_8_1","description":"Upgrade to Windows 8.1/Windows Server 2012 R2 or later"},"ADD_APPLOCKER_BLACKLIST_RULE":{"identifier":"ADD_APPLOCKER_BLACKLIST_RULE","description":"Add a blacklist rule for '{0}' to the Applocker rule named '{1}' in the '{2}' rule set"},"UPGRADE_OS":{"identifier":"UPGRADE_OS","description":"Upgrade the operating system to be newer than Windows XP"},"INSTALL_NP_PATCH":{"identifier":"INSTALL_NP_PATCH","description":"Install one of the patches that adds the EnableLowVaAccess feature to disable mapping of the null page"},"SMAP":{"identifier":"SMAP","description":"Purchase systems that support Supervisor Mode Access Prevention (Broadwell chipset and successors) during the next acquisition cycle to harden the system against kernel exploits"},"SET_DECV":{"identifier":"SET_DECV","description":"On Vista SP1 through Windows 7, set the DisableExceptionChainValidation registry value under HKLM\\System\\CurrentControlSet\\Session Manager\\Kernel\\ to 0"},"UPGRADE_TO_WINDOWS_8_1_PATCH":{"identifier":"UPGRADE_TO_WINDOWS_8_1_PATCH","description":"Install patch KB3000850 on Windows 8.1"},"CONFIGURE_SRP_RULE_ENFORCEMENT":{"identifier":"CONFIGURE_SRP_RULE_ENFORCEMENT","description":"Configure the SRP rule to be enforced"},"SECURITY_PATCH_OS_REGULARLY":{"identifier":"SECURITY_PATCH_OS_REGULARLY","description":"Patch the operating system with security updates within 30 days of patch release"},"CONFIGURE_WHITELISTING":{"identifier":"CONFIGURE_WHITELISTING","description":"Implement a supported whitelisting technology"},"CHANGE_SRP_SCOPE":{"identifier":"CHANGE_SRP_SCOPE","description":"Change SRP scope to apply to all users"},"SET_EO_FOR_APP":{"identifier":"SET_EO_FOR_APP","description":"Set the ExecuteOptions registry value for the application, under the Image File Execution Options key, to zero to enable DEP for the application"},"FOLLOW_2264107":{"identifier":"FOLLOW_2264107","description":"Follow instructions in Microsoft Knowledge Base article 2264107 to set registry value CWDIllegalInDLLSearch to 2"},"SET_HIPS_SERVICE_AUTO":{"identifier":"SET_HIPS_SERVICE_AUTO","description":"Change the HIPS service Startup Type to Automatic"},"UPGRADE_APP_FOR_NXCOMPAT":{"identifier":"UPGRADE_APP_FOR_NXCOMPAT","description":"Upgrade the application to a version that is built with DEP support"},"UPGRADE_TO_WINDOWS_8":{"identifier":"UPGRADE_TO_WINDOWS_8","description":"Upgrade to Windows 8/Windows Server 2012 or later"},"SET_MO_ENABLE_SEHOP_FOR_APP":{"identifier":"SET_MO_ENABLE_SEHOP_FOR_APP","description":"Delete or configure the MitigationsOptions registry value for the application under the Image File Execution Options key to enable SEHOP"},"UPGRADE_TO_7_SP1":{"identifier":"UPGRADE_TO_7_SP1","description":"Upgrade to Windows 7 SP1/Windows Server 2008 R2 SP1 or later"},"ENABLE_SECURE_BOOT":{"identifier":"ENABLE_SECURE_BOOT","description":"Enable Secure Boot in BIOS Setup at boot or by using OEM supported tools"},"FOLLOW_291572":{"identifier":"FOLLOW_291572","description":"Follow instructions in Microsoft Security Advisory 2915720 to enable certificate padding checks"},"SET_MO_DEP":{"identifier":"SET_MO_DEP","description":"On Windows 8+, configure the MitigationOptions registry value to enforce DEP as AlwaysOn with the Policy Override bit"},"MO_ENABLE_DEP_ON_APP":{"identifier":"MO_ENABLE_DEP_ON_APP","description":"Delete or configure the MitigationsOptions registry value for the application under the Image File Execution Options key to enable DEP"},"SET_KSEHOP":{"identifier":"SET_KSEHOP","description":"On Windows 8.1+ x86 only, configure the KernelSEHOPEnabled value under HKLM\\System\\CurrentControlSet\\Session Manager\\Kernel\\ to 1 to enable kernel SEHOP"},"MO_ENABLE_DEP_ON_APP2":{"identifier":"MO_ENABLE_DEP_ON_APP2","description":"On Windows 8+, configure the MitigationsOptions registry value for the application under the Image File Execution Options key to enable DEP"},"SET_FONT_BLOCKING":{"identifier":"SET_FONT_BLOCKING","description":"In Group Policy go to Computer Configuration > Administrative Templates > System > Mitigation Options and set Untrusted Font Blocking to Enabled. Then select 'Block untrusted fonts and log events' from the Mitigation Options drop down menu"},"PATCH_OS":{"identifier":"PATCH_OS","description":"Patch the operating system with recent updates"},"UPGRADE_TO_VISTA_SP2":{"identifier":"UPGRADE_TO_VISTA_SP2","description":"Upgrade to Windows Vista SP2/Windows Server 2008 SP2 or later"},"CONFIGURE_APPLOCKER_RULESET":{"identifier":"CONFIGURE_APPLOCKER_RULESET","description":"Configure the AppLocker rule set '{0}'."},"START_APPLOCKER_SERVICE":{"identifier":"START_APPLOCKER_SERVICE","description":"Start the Application Identity service"},"UPDATE_AV_ENGINE":{"identifier":"UPDATE_AV_ENGINE","description":"Update the AV engine to the latest supported version. See http://www.mcafee.com/us/support/support-eol-scan-engine.aspx for more information."},"INSTALL_HIPS":{"identifier":"INSTALL_HIPS","description":"Install HIPS"},"UPGRADE_XPSP3_APPLY_SSP_PATCH":{"identifier":"UPGRADE_XPSP3_APPLY_SSP_PATCH","description":"Upgrade to at least Windows XP service pack 3. For OSes prior to windows 8, apply the the secure search path patch. Follow directions in Microsoft Knowledge Base article 2265107 to set registry value CWDIllegalInDLLSearch to 2"},"ADD_SRP_BLACKLIST_RULE":{"identifier":"ADD_SRP_BLACKLIST_RULE","description":"Add a blacklist rule for '{0}' to SRP"},"BLOCK_W2W_TRAFFIC":{"identifier":"BLOCK_W2W_TRAFFIC","description":"Create firewall rule to block workstation to workstation traffic on port {0}"},"INSTALL_CERTPADDING_PATCH":{"identifier":"INSTALL_CERTPADDING_PATCH","description":"Install the certificate padding patch and follow instructions in Microsoft Security Advisory 2915720 to enable certificate padding checks"},"REMOVE_APPLOCKER_RULE":{"identifier":"REMOVE_APPLOCKER_RULE","description":"Remove the AppLocker rule named '{0}' from the '{1}' rule set"},"SET_APPLOCKER_SERVICE_AUTO":{"identifier":"SET_APPLOCKER_SERVICE_AUTO","description":"Change the Application Identity service Startup Type to Automatic"},"ENABLE_CFG_MO":{"identifier":"ENABLE_CFG_MO","description":"Set the MitigationOptions registry value under HKLM\\System\\CurrentControlSet\\Control\\Session Manager\\Kernel\\ to 0x{0:2X} to enable Control Flow Guard"},"SET_MO_FOR_SEHOP":{"identifier":"SET_MO_FOR_SEHOP","description":"On Windows 8+, configure the MitigationOptions value under HKLM\\System\\CurrentControlSet\\Session Manager\\Kernel\\ to enable SEHOP"},"ENABLE_CFG":{"identifier":"ENABLE_CFG","description":"Delete the EnableCFG registry value under HKLM\\System\\CurrentControlSet\\Control\\Session Manager\\Memory Management\\ or set its value to 1"},"UEFI_BIOS":{"identifier":"UEFI_BIOS","description":"If the system has a UEFI BIOS, then change it from Legacy/Compatibility Support Mode to UEFI Mode (requires OS re-install) in BIOS Setup at boot. If the system does not have a UEFI BIOS, then purchase a system with UEFI BIOS during the next acquisition cycle and ensure it is in UEFI Mode before OS installation"},"HIPS_PREVENT_HIGH":{"identifier":"HIPS_PREVENT_HIGH","description":"Change the HIPS Protection policy so high severity events are set to Prevent"},"ADD_SRP_BLACKLIST_RULES":{"identifier":"ADD_SRP_BLACKLIST_RULES","description":"Add all required SRP blacklist rules"},"SET_BOOT_DEP_POLICY":{"identifier":"SET_BOOT_DEP_POLICY","description":"Set boot DEP policy (in boot.ini or the BCD Store) to AlwaysOn. On Windows 8+, ensure this is not overridden by the system MitigationOptions registry value"},"ADD_SRP_PATH_RULE":{"identifier":"ADD_SRP_PATH_RULE","description":"Add SRP path rules"},"ADD_SRP_WHITELIST_RULES":{"identifier":"ADD_SRP_WHITELIST_RULES","description":"Add SRP whitelist rules"},"ENABLE_HIPS":{"identifier":"ENABLE_HIPS","description":"Enable HIPS in HIPS policy"},"CHANGE_SRP_BINARIES":{"identifier":"CHANGE_SRP_BINARIES","description":"Change SRP to apply to all executables and libraries"},"ADD_APPLOCKER_BLACKLIST_RULES":{"identifier":"ADD_APPLOCKER_BLACKLIST_RULES","description":"Add all blacklist rules to the Applocker rule named '{0}' in the '{1}' rule set"},"START_HIPS_SERVICE":{"identifier":"START_HIPS_SERVICE","description":"Start the HIPS service"},"SET_DECV_FOR_APP":{"identifier":"SET_DECV_FOR_APP","description":"Under the Image File Execution Options registry key for the application, set the DisableExceptionChainValidation registry value to 0"},"CONFIGURE_EVENT_LOG":{"identifier":"CONFIGURE_EVENT_LOG","description":"Configure Group Policy to audit user logon/logoff events"},"CONFIGURE_SRP_WHITELISTING":{"identifier":"CONFIGURE_SRP_WHITELISTING","description":"Configure SRP to be in whitelisting mode"},"SMEP":{"identifier":"SMEP","description":"Purchase systems that support Supervisor Mode Execution Prevention (Ivy Bridge chipset and successors) during the next acquisition cycle to harden the system against kernel exploits"},"INSTALL_VSE":{"identifier":"INSTALL_VSE","description":"Install VirusScan Enterprise"},"SET_MOVEIMAGES":{"identifier":"SET_MOVEIMAGES","description":"On operating system versions 6.0-6.1, the MoveImages value under HKLM\\System\\CurrentControlSet\\Session Manager\\Memory Management\\ should be set to 0xFFFFFFFF, so that ASLR is AlwaysOn"},"UPDATE_DAT":{"identifier":"UPDATE_DAT","description":"Update the DAT file"},"ADD_SRP_EXE_TYPE":{"identifier":"ADD_SRP_EXE_TYPE","description":"Add an executable type of '{0}' to the SRP Designated File Types list"},"ENABLE_VSE_STARTUP":{"identifier":"ENABLE_VSE_STARTUP","description":"Enable on access scanning at system startup"},"UPGRADE_TO_WINDOWS_10":{"identifier":"UPGRADE_TO_WINDOWS_10","description":"Upgrade to Windows 10/Windows Server 2016 or later"},"UPGRADE_TO_APP_WITH_DEP":{"identifier":"UPGRADE_TO_APP_WITH_DEP","description":"Upgrade the application to a version that is built with ASLR support"}}