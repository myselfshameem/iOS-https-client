# iOS-https-client
First we need to generate the self signed SSL certificate.
Below is the steps to generate the SSL certificate for your server

# Generate SSL certificate using macOS command line
openssl genrsa -out key.pem 2048
openssl req -new -sha256 -key key.pem -out csr.csr
openssl req -x509 -sha256 -days 365 -key key.pem -in csr.csr -out certificate.pem
openssl req -in csr.csr -text -noout | grep -i "Signature.*SHA256" && echo "It worked"

# Start Https server
shaman@Samans-MBP Learning % cd iOS-https-client 
shaman@Samans-MBP iOS-https-client % cd node-js-server 
shaman@Samans-MBP node-js-server % npm install 

added 69 packages, and audited 70 packages in 884ms

7 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
shaman@Samans-MBP node-js-server % node https_server.js
Express server listening on port 9000

Server staretd on port 9000

# Run iOS project
open iOS-client/iOS-client.xcodeproj
In project search for '<Update the server address>' and update the server address
Similarly search for '<Update the port>' and update the port by deafult its 9000
Build the project and click on the connect


