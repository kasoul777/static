#!/bin/sh
# Serve the cleaned static site on port 8000
python3 -m http.server 8000 --directory "$(dirname "$0")"
