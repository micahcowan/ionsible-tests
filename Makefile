.PHONY: clean all run build

SRC=$(wildcard src/*.ts)
BSRC=$(wildcard browser-src/*/*.ts)

PATH:=$(PATH):node_modules/.bin

BRSLT=$(patsubst browser-src/%.ts,browser/%.js,$(BSRC))

BBROWS=$(patsubst %.js,%-b.js,$(BRSLT))

all: build run

run: build
	node build/test.js

build: build/test.js $(BBROWS)


build/test.js: $(SRC)
	tsc --moduleResolution node -t ES5 --outDir build $^ || { $(MAKE) clean; exit 1; }

$(BBROWS): $(BRSLT)
	browserify -o $@ $(patsubst %-b.js,%.js,$@)

$(BRSLT): $(BSRC)
	tsc --moduleResolution node -t ES5 --rootDir browser-src --outDir browser $^ || { $(MAKE) clean; exit 1; }

clean:
	rm -fr build browser/*/*.js
