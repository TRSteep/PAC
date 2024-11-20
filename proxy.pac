function FindProxyForURL(url, host) {
    // Localhost
    if (shExpMatch(host, "127.0.0.1" )) {return "DIRECT";}
    if (isInNet(host, "10.0.0.0", "255.0.0.0")) {return "DIRECT";}
    if (isInNet(host, "172.16.0.0", "255.240.0.0")) {return "DIRECT";}
    if (isInNet(host, "192.168.0.0", "255.255.0.0")) {return "DIRECT";}
    // AD
    if ( shExpMatch(url,"*doubleclick.net/*")) { return proxy_empty; }
    // RU
    if (dnsDomainIs(host, "*.ru")) {return "DIRECT";}
    // Other
    return "PROXY proxy.winitpro.ru:3128";
}