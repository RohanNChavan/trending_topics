from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

class CORSHTTPRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def translate_path(self, path):
        # Ensure we serve from the root directory
        path = super().translate_path(path)
        relpath = os.path.relpath(path, os.getcwd())
        return os.path.join(os.getcwd(), relpath)

def run(server_class=HTTPServer, handler_class=CORSHTTPRequestHandler, port=5000):
    server_address = ('0.0.0.0', port)
    httpd = server_class(server_address, handler_class)
    print(f'Starting server on port {port}...')
    httpd.serve_forever()

if __name__ == '__main__':
    run()