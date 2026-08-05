.PHONY: help init serve build

help:
	@echo "Requires uv installed"
	@echo ""
	@echo "Usage:"
	@echo "  make init   - Install mkdocs dependencies"
	@echo "  make serve  - Serve the documentation locally"
	@echo "  make build  - Build the documentation into the public directory"

init:
	@uv install

serve:
	@uv run mkdocs serve

build:
	@uv run mkdocs build --site-dir public

