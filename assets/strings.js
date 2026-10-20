/* Text found in botzor.exe (Zotob.A), rebuilt from the vendor write-ups:
   F-Secure, Symantec, Sophos, McAfee (see research notes zotob_technical.md).
   Tagged lines (k) are the sourced ones. Untagged lines are the ordinary
   Windows program text any 2005 executable carries. Offsets are illustrative. */
window.BOTZOR_STRINGS=[
 ['!This program cannot be run in DOS mode.'],
 ['.text'],['.rdata'],['.data'],
 ['KERNEL32.dll'],['ADVAPI32.dll'],['WS2_32.dll'],
 ['LoadLibraryA'],['GetProcAddress'],['CreateMutexA'],['GetLastError'],['GetSystemDirectoryA'],
 ['CopyFileA'],['CreateThread'],['Sleep'],['WinExec'],['RegCreateKeyExA'],['RegSetValueExA'],['RegCloseKey'],
 ['WSAStartup'],['socket'],['connect'],['send'],['recv'],['inet_addr'],['gethostbyname'],
 ['B-O-T-Z-O-R','mutex'],
 ['botzor.exe','file'],
 ['WINDOWS SYSTEM','run'],
 ['Software\\Microsoft\\Windows\\CurrentVersion\\Run','run'],
 ['Software\\Microsoft\\Windows\\CurrentVersion\\RunServices','run'],
 ['SYSTEM\\CurrentControlSet\\Services\\SharedAccess','run'],
 ['\\drivers\\etc\\hosts','hosts'],
 ['Botzor2005 Made By .... Greetz to good friend Coder. Based On HellBot3','sig'],
 ['MSG to avs: the first av who detect this worm will be the first killed in the next 24hours!!!','sig'],
 ['127.0.0.1 www.symantec.com','hosts'],['127.0.0.1 securityresponse.symantec.com','hosts'],
 ['127.0.0.1 symantec.com','hosts'],['127.0.0.1 www.sophos.com','hosts'],['127.0.0.1 sophos.com','hosts'],
 ['127.0.0.1 www.mcafee.com','hosts'],['127.0.0.1 www.f-secure.com','hosts'],['127.0.0.1 www.kaspersky.com','hosts'],
 ['127.0.0.1 www.microsoft.com','hosts'],['127.0.0.1 www.paypal.com','hosts'],['127.0.0.1 www.ebay.com','hosts'],
 ['diabl0.turkcoders.net','c2'],
 ['NICK '],['USER '],['JOIN '],['PRIVMSG '],['PONG '],
 ['sysinfo','cmd'],['download','cmd'],['remove','cmd'],
 ['2pac.txt','ftp'],
 ['haha.exe','ftp'],
 ['cmd.exe']
];
