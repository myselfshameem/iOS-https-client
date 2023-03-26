//
//  File.swift
//  SelfSignedSSLCertDemo
//
//  Created by Saman khan on 26/03/2023.
//

class NetworkConstants {
    private init() {}
    
    static let baseURL = "192.168.0.149"
    static let port = "9000"
    
    /// method
    static let health = "health"
    
    enum Method {
        case GET, POST
    }
}

enum NetworkError: Error {
     case Error(String)
}
