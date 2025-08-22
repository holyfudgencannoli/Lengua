#!/usr/bin/env python3
import http.server
import socketserver
import os
import socket
import io
import zipfile

# Configuration
PORT = 8000
DIRECTORY = os.path.expanduser(".")

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        path = self.translate_path(self.path)

        if os.path.isdir(path):
            # Dynamically zip the folder
            buffer = io.BytesIO()
            with zipfile.ZipFile(buffer, 'w', zipfile.ZIP_DEFLATED) as zf:
                for root, _, files in os.walk(path):
                    for f in files:
                        full_path = os.path.join(root, f)
                        rel_path = os.path.relpath(full_path, os.path.dirname(path))
                        zf.write(full_path, rel_path)
            buffer.seek(0)

            self.send_response(200)
            self.send_header("Content-Type", "application/zip")
            self.send_header("Content-Disposition", f'attachment; filename="{os.path.basename(path)}.zip"')
            self.send_header("Content-Length", str(len(buffer.getvalue())))
            self.end_headers()
            self.wfile.write(buffer.getvalue())

        elif os.path.isfile(path):
            # Force files to download
            self.send_response(200)
            self.send_header("Content-Type", "application/octet-stream")
            filename = os.path.basename(path)
            self.send_header("Content-Disposition", f'attachment; filename="{filename}"')
            fs = os.stat(path)
            self.send_header("Content-Length", str(fs.st_size))
            self.end_headers()
            with open(path, "rb") as f:
                self.wfile.write(f.read())

        else:
            self.send_error(404, "File not found")

def get_local_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
    except Exception:
        ip = "127.0.0.1"
    finally:
        s.close()
    return ip

if __name__ == "__main__":
    ip = get_local_ip()
    print(f"\nServing '{DIRECTORY}' at:")
    print(f"  -> http://{ip}:{PORT}\n")
    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
