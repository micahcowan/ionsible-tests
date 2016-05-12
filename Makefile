.PHONY: clean all run build

SRC=src/*.ts

all: run

run: build
	node build/test.js

build: build/test.js

build/test.js: $(SRC)
	tsc --moduleResolution node -t ES5 --outDir build $^

clean:
	rm -fr build
