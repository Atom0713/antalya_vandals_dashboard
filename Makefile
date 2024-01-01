build:
	docker image build --no-cache -t organization_frontend:dev .

run:
	docker run -it --rm \
		-v ${PWD}:/app \
		-v /app/node_modules \
		-p 3001:3000 \
		-e CHOKIDAR_USEPOLLING=true \
		organization_frontend:dev